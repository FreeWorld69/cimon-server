import { Injectable } from "@nestjs/common";
import { MovieGenres } from "../../commons/enums/movie_genres.enum";
import { MoviesApiService } from "../../network/services/movie_api.service";

@Injectable()
export class MovieService {
    private static SOURCE = process.env.MOVIE_API_SOURCE_PARAM;
    private static PER_PAGE = 20;
    private static TYPE = 'movie';
    private static PERIOD = 'month';

    constructor(
        private readonly moviesApiService: MoviesApiService
    ) {}

    getMovie(page: number, genre: MovieGenres) {
        const sortParam ='-upload_date';
        const filterInit = true;
        const filterSort = '-upload_date';
        const filterWithFiles ='yes';
        const filterWithActors = 3;
        const filterWithDirectors = 1;

        return this.moviesApiService.getMovies(
            String(page),
            String(MovieService.PER_PAGE),
            String(sortParam),
            String(MovieService.SOURCE),
            String(filterInit),
            String(filterSort),
            null,
            String(genre),
            null,
            String(filterWithFiles),
            null,
            String(filterWithActors),
            String(filterWithDirectors),
            null
        )
    }

    getTopMovies() {
        const page = 1;
        const perPage = 20;
        const filterWithActors = 3;
        const filterWithDirectors = 1;

        return this.moviesApiService.getTopMovies(
            String(page),
            String(perPage),
            String(MovieService.TYPE),
            String(MovieService.SOURCE),
            String(MovieService.PERIOD),
            String(filterWithActors),
            String(filterWithDirectors)
        );
    }

    getPopularMovies() {
        return this.moviesApiService.getPopularMovies(
            String(MovieService.SOURCE)
        );
    }
}