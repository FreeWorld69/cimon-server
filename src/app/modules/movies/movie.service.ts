import { Injectable } from "@nestjs/common";
import { MovieGenres } from "../../commons/enums/movie_genres.enum";
import { MoviesApiService } from "../../network/services/movie_api.service";
import { instanceToInstance, plainToClass, plainToInstance } from "class-transformer";
import { MovieModel } from "../../models/movie.model";
import { MovieSchema } from "../../network/schemas/movie/movie.schema";
import { SearchResultsSchema } from "../../network/schemas/seach/search_results.schema";
import { SeasonFilesSchema } from "../../network/schemas/season/season_files.schema";

@Injectable()
export class MovieService {
    private static SOURCE = process.env.MOVIE_API_SOURCE_PARAM;
    private static PER_PAGE = 20;
    private static TYPE = 'movie';
    private static PERIOD = 'month';

    constructor(
        private readonly moviesApiService: MoviesApiService
    ) {}

    async getMovies(page: number, genre: MovieGenres | null): Promise<MovieModel[]> {
        const sortParam ='-upload_date';
        const filterInit = true;
        const filterSort = '-upload_date';
        const filterWithFiles ='yes';
        const filterWithActors = 3;
        const filterWithDirectors = 1;
        const filterWithGenre = genre?.toString();

        const { data } = await this.moviesApiService.getMovies(
            String(page),
            String(MovieService.PER_PAGE),
            String(sortParam),
            String(MovieService.SOURCE),
            String(filterInit),
            String(filterSort),
            null,
            filterWithGenre,
            null,
            String(filterWithFiles),
            null,
            String(filterWithActors),
            String(filterWithDirectors),
            null
        );

        return plainToInstance(MovieModel, data, {enableCircularCheck: true});
    }

    async getTopMovies(): Promise<MovieModel[]> {
        const page = 1;
        const perPage = 20;
        const filterWithActors = 3;
        const filterWithDirectors = 1;

        const { data } = await this.moviesApiService.getTopMovies(
            String(page),
            String(perPage),
            String(MovieService.TYPE),
            String(MovieService.SOURCE),
            String(MovieService.PERIOD),
            String(filterWithActors),
            String(filterWithDirectors)
        );

        return plainToInstance(MovieModel, data, {enableCircularCheck: true});
    }

    async getPopularMovies(): Promise<MovieModel[]> {
        const { data } = await this.moviesApiService.getPopularMovies(
            String(MovieService.SOURCE)
        );

        return plainToInstance(MovieModel, data, {enableCircularCheck: true});
    }

    async getGeneralDetails(movieDetailsId: number): Promise<MovieModel> {
        const data = await this.moviesApiService.getGenericMovieDetails(
            movieDetailsId,
            MovieService.SOURCE,
            '1'
        );

        return plainToInstance(MovieModel, data.data, {enableCircularCheck: true});
    }

    getFoundMovie(keywords:string, page:number, perPage:number): Promise<SearchResultsSchema> {
        return this.moviesApiService.search(
            String(page),
            String(perPage),
            MovieService.SOURCE,
            keywords
        );
    }

    getMovie(id: number): Promise<SeasonFilesSchema> {
        const defaultForMovie = 1;

        return this.moviesApiService.getSeasonFiles(
            id,
            defaultForMovie,
            MovieService.SOURCE
        );
    }

    getSeries(id: number, season: number): Promise<SeasonFilesSchema> {
        return this.moviesApiService.getSeasonFiles(
            id,
            season,
            MovieService.SOURCE
        );
    }
}





