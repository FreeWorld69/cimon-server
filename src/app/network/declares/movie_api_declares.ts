/* eslint-disable @typescript-eslint/no-unused-vars */
import { GET, HTTP, Interceptors, Param, Path } from '@yggdrasilts/axiosfit';
import { NetworkInterceptor } from '../interceptor/network.interceptor';
import { MovieDetailsSchema, MovieSchema } from '../schemas/movie/movie.schema';
import { SeasonFilesSchema } from '../schemas/season/season_files.schema';
import { ActorsSchema } from '../schemas/actors/actors.schema';
import { SearchResultsSchema } from '../schemas/seach/search_results.schema';

@HTTP('', { usePromises: true, enableAxiosLogger: process.env.NODE_ENV === 'development' })
@Interceptors(NetworkInterceptor)
export class MovieApiDeclares {
  @GET('/movies')
  public getMovies(
    @Param('page') _page?: string,
    @Param('per_page') _perPage?: string,
    @Param('sort') _sort?: string,
    @Param('source') _source?: string,
    @Param('filters[init]') _filterInit?: string,
    @Param('filters[sort]') _filterSort?: string,
    @Param('filters[type]') _filterType?: string,
    @Param('filters[genre]') _filterGenre?: string,
    @Param('filters[language]') _filterLanguage?: string,
    @Param('filters[with_files]') _filterWithFiles?: string,
    @Param('filters[year_range]') _filterYearRange?: string,
    @Param('filters[with_actors]') _filterWithActors?: string,
    @Param('filters[with_directors]') _filterWithDirectors?: string,
    @Param('filters[imdb_rating_range]') _filterImdbRatingRange?: string,
  ): Promise<MovieSchema> {
    return null;
  }

  @GET('/movies/featured')
  public getPopularMovies(@Param('source') _source?: string): Promise<MovieSchema> {
    return null;
  }

  @GET('/movies/top')
  public getTopMovies(
    @Param('page') _page?: string,
    @Param('per_page') _perPage?: string,
    @Param('type') _type?: string,
    @Param('source') _source?: string,
    @Param('period') _period?: string,
    @Param('filters[with_actors]') _filterWithActors?: string,
    @Param('filters[with_directors]') _filterWithDirectors?: string,
  ): Promise<MovieSchema> {
    return null;
  }

  @GET('/movies/:movieDetailsId')
  public getGenericMovieDetails(
    @Path('movieDetailsId') _movieDetailsId: number,
    @Param('source') _source?: string,
    @Param('filters[with_directors]') _filterWithDirectors?: string,
  ): Promise<MovieDetailsSchema> {
    return null;
  }

  @GET('/movies/:id/season-files/:season')
  public getSeasonFiles(
    @Path('id') _id: number,
    @Path('season') _season: number,
    @Param('source') _source?: string,
  ): Promise<SeasonFilesSchema> {
    return null;
  }

  @GET('/movies/:movieId/persons')
  public getActors(
    @Path('movieId') _movieId: number,
    @Param('page') _page?: string,
    @Param('per_page') _perPage?: string,
    @Param('filters[role]') _filterRole?: string,
    @Param('source') _source?: string,
  ): Promise<ActorsSchema> {
    return null;
  }

  @GET('/movies/:movieId/related')
  public getRelatedMovies(
    @Path('movieId') _movieId: number,
    @Param('page') _page?: string,
    @Param('source') _source?: string,
    @Param('per_page') _perPage?: string,
    @Param('filters[with_actors]') _filterWithActors?: string,
    @Param('filters[with_directors]') _filterWithDirectors?: string,
  ): Promise<MovieSchema> {
    return null;
  }

  @GET('/search')
  public search(
    @Param('page') _page?: string,
    @Param('per_page') _perPage?: string,
    @Param('source') _source?: string,
    @Param('keywords') _keywords?: string,
    @Param('filters[type]') _filterType?: string,
    @Param('movie_filters[keyword]') _filterKeyword?: string,
    @Param('movie_filters[init]') _filterInit?: string,
    @Param('movie_filters[with_actors]') _filterWithActors?: string,
    @Param('movie_filters[with_directors]') _filterWithDirectors?: string,
  ): Promise<SearchResultsSchema> {
    return null;
  }
}
