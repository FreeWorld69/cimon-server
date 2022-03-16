import { MovieApiDeclares } from '../declares/movie_api_declares';
import { MovieDetailsSchema, MovieSchema } from '../schemas/movie/movie.schema';
import { plainToInstance } from 'class-transformer';
import { Axiosfit } from '@yggdrasilts/axiosfit';
import { ActorsSchema } from '../schemas/actors/actors.schema';
import { SeasonFilesSchema } from '../schemas/season/season_files.schema';
import { SearchResultsSchema } from '../schemas/seach/search_results.schema';

export class MoviesApiService implements MovieApiDeclares {
  private static moviesApiService = new Axiosfit<MovieApiDeclares>()
    .baseUrl(process.env.MOVIE_API_URL)
    .create(MovieApiDeclares);

  async getMovies(
    page?: string,
    perPage?: string,
    sort?: string,
    source?: string,
    filterInit?: string,
    filterSort?: string,
    filterType?: string,
    filterGenre?: string,
    filterLanguage?: string,
    filterWithFiles?: string,
    filterYearRange?: string,
    filterWithActors?: string,
    filterWithDirectors?: string,
    filterImdbRatingRange?: string,
  ): Promise<MovieSchema> {
    const data = await MoviesApiService.moviesApiService.getMovies(
      page,
      perPage,
      sort,
      source,
      filterInit,
      filterSort,
      filterType,
      filterGenre,
      filterLanguage,
      filterWithFiles,
      filterYearRange,
      filterWithActors,
      filterWithDirectors,
      filterImdbRatingRange,
    );

    return plainToInstance(MovieSchema, data);
  }

  async getActors(
    movieId: number,
    page?: string,
    perPage?: string,
    filterRole?: string,
    source?: string,
  ): Promise<ActorsSchema> {
    const data = await MoviesApiService.moviesApiService.getActors(
      movieId,
      page,
      perPage,
      filterRole,
      source,
    );

    return plainToInstance(ActorsSchema, data);
  }

  async getGenericMovieDetails(
    movieDetailsId: number,
    source?: string,
    filterWithDirectors?: string,
  ): Promise<MovieDetailsSchema> {
    const data = await MoviesApiService.moviesApiService.getGenericMovieDetails(
      movieDetailsId,
      source,
      filterWithDirectors,
    );

    return plainToInstance(MovieDetailsSchema, data);
  }

  async getPopularMovies(source?: string): Promise<MovieSchema> {
    const data = await MoviesApiService.moviesApiService.getPopularMovies(source);
    return plainToInstance(MovieSchema, data);
  }

  async getRelatedMovies(
    movieId: number,
    page?: string,
    source?: string,
    perPage?: string,
    filterWithActors?: string,
    filterWithDirectors?: string,
  ): Promise<MovieSchema> {
    const data = await MoviesApiService.moviesApiService.getRelatedMovies(
      movieId,
      page,
      source,
      perPage,
      filterWithActors,
      filterWithDirectors,
    );

    return plainToInstance(MovieSchema, data);
  }

  async getSeasonFiles(id: number, season: number, source?: string): Promise<SeasonFilesSchema> {
    const data = await MoviesApiService.moviesApiService.getSeasonFiles(id, season, source);

    return plainToInstance(SeasonFilesSchema, data);
  }

  async getTopMovies(
    page?: string,
    perPage?: string,
    type?: string,
    source?: string,
    period?: string,
    filterWithActors?: string,
    filterWithDirectors?: string,
  ): Promise<MovieSchema> {
    const data = await MoviesApiService.moviesApiService.getTopMovies(
      page,
      perPage,
      type,
      source,
      period,
      filterWithActors,
      filterWithDirectors,
    );

    return plainToInstance(MovieSchema, data);
  }

  async search(
    page?: string,
    perPage?: string,
    source?: string,
    keywords?: string,
    filterType?: string,
    filterKeyword?: string,
    filterInit?: string,
    filterWithActors?: string,
    filterWithDirectors?: string,
  ): Promise<SearchResultsSchema> {
    const data = await MoviesApiService.moviesApiService.search(
      page,
      perPage,
      source,
      keywords,
      filterType,
      filterKeyword,
      filterInit,
      filterWithActors,
      filterWithDirectors,
    );

    return plainToInstance(SearchResultsSchema, data);
  }
}
