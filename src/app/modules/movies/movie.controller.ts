import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MovieService } from "./movie.service";
import { type } from "os";
import session from "express-session";

@Controller('/movies')
export class MovieController {
    constructor(private readonly movieService: MovieService) {}

    @Get('home')
    async home() {
        const [popularMovies, topMovies, movies] = await Promise.all([
            this.movieService.getPopularMovies(),
            this.movieService.getTopMovies(),
            this.movieService.getMovies(1, null)
        ]);

        return {
            popularMovies,
            topMovies,
            movies
        };
    }

    @Get('search/:search')
    async search(@Param('search') search: string) {
        return this.movieService.getFoundMovie(search, 1, 10);
    }

    @Get('details/:movieDetailsId')
    async generalDetails(@Param('movieDetailsId', ParseIntPipe) movieDetailsId: number) {
        return this.movieService.getGeneralDetails(movieDetailsId);
    }

    @Get('movie/:id')
    async series(@Param('id', ParseIntPipe) id: number) {
        return this.movieService.getMovie(id);
    }

    @Get('series/:id/:season')
    async movie(
        @Param('id', ParseIntPipe) id: number,
        @Param('season', ParseIntPipe) season: number
    ) {
        return this.movieService.getSeries(id, season);
    }

}
