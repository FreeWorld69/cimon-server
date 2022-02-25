/* eslint-disable @typescript-eslint/no-unused-vars */
import { GET, HTTP, Interceptors, Param, Path } from '@yggdrasilts/axiosfit';
import { NetworkInterceptor } from '../interceptor/network.interceptor';
import { MovieSchema } from "../schemas/movie/movie.schema";
import { SeasonFilesSchema } from "../schemas/season/season_files.schema";
import { ActorsSchema } from "../schemas/actors/actors.schema";
import { SearchResultsSchema } from "../schemas/seach/search_results.schema";

const movieApiServiceConfig = {
    usePromises: true,
    enableAxiosLogger: process.env.NODE_ENV === 'development'
}

@HTTP('/test', movieApiServiceConfig) @Interceptors(NetworkInterceptor)
export class MoviesApiService {
    @GET('/movies')
    public getMovies(
        @Param('page') page?: string,
        @Param('sort') sort?: string,
        @Param('source') source?: string,
        @Param('per_page') perPage?: string,
        @Param('filters[init]') filterInit?: string,
        @Param('filters[sort]') filterSort?: string,
        @Param('filters[type]') filterType?: string,
        @Param('filters[genre]') filterGenre?: string,
        @Param('filters[language]') filterLanguage?: string,
        @Param('filters[with_files]') filterWithFiles?: string,
        @Param('filters[year_range]') filterYearRange?: string,
        @Param('filters[with_actors]') filterWithActors?: string,
        @Param('filters[with_directors]') filterWithDirectors?: string,
        @Param('filters[imdb_rating_range]') filterImdbRatingRange?: string,
    ): Promise<MovieSchema> { return null; }

    @GET('/movies/featured')
    public getPopularMovies(
        @Param('source') source?: string
    ): Promise<MovieSchema> { return null; }

    @GET('/movies/top')
    public getTopMovies(
        @Param('page') page?: string,
        @Param('type') type?: string,
        @Param('source') source?: string,
        @Param('period') period?: string,
        @Param('per_page') perPage?: string,
        @Param('filters[with_actors]') filterWithActors?: string,
        @Param('filters[with_directors]') filterWithDirectors?: string,
    ): Promise<MovieSchema> { return null; }

    @GET('/movies/:movieId')
    public getMovie(
        @Path('movieId') movieId: number,
        @Param('source') source?: string,
        @Param('filters[with_directors]') filterWithDirectors?: string,
    ): Promise<MovieSchema> { return null; }


    @GET('/movies/:movieId/season-files/:season')
    public getSeasonFiles(
        @Path('movieId') movieId: number,
        @Path('season') season: number,
        @Param('source') source?: string,
    ): Promise<SeasonFilesSchema> { return null; }

    @GET('/movies/{movieId}/persons')
    public getActors(
        @Path('movieId') movieId: number,
        @Param('page') page?: string,
        @Param('per_page') perPage?: string,
        @Param('filters[role]') filterRole?: string,
        @Param('source') source?: string,
    ): Promise<ActorsSchema> { return null; }

    @GET('/movies/:movieId/related')
    public getRelatedMovies(
        @Path('movieId') movieId: number,
        @Param('page') page?: string,
        @Param('source') source?: string,
        @Param('per_page') perPage?: string,
        @Param('filters[with_actors]') filterWithActors?: string,
        @Param('filters[with_directors]') filterWithDirectors?: string,
    ): Promise<MovieSchema> { return null; }

    @GET('/search')
    public search(
        @Param('movie_filters[keyword]') filterKeyword?: string,
        @Param('movie_filters[init]') filterInit?: string,
        @Param('movie_filters[with_actors]') filterWithActors?: string,
        @Param('movie_filters[with_directors]') filterWithDirectors?: string,
        @Param('filters[type]') filterType?: string,
        @Param('keywords') keywords?: string,
        @Param('page') page?: string,
        @Param('per_page') perPage?: string,
        @Param('source') source?: string,
    ): Promise<SearchResultsSchema> { return null; }
}
