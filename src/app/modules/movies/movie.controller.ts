import { Controller, Get } from '@nestjs/common';
import { MovieService } from "./movie.service";

@Controller('/movie')
export class MovieController {
    constructor(private readonly movieService: MovieService) {}

    @Get('/main')
    async home() {
        const topMoviesX = await this.movieService.getTopMovies();

        return topMoviesX.meta;

        const popularMovies = await this.movieService.getPopularMovies();
        const topMovies = await this.movieService.getTopMovies();

        return {
            popularMovies,
            topMovies,
        }
    }
}
