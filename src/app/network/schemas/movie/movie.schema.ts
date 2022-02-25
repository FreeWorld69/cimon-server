import { Type } from "class-transformer";
import { MetaSchema } from "../core/meta.schema";
import { CoversSchema } from "../core/covers.schema";
import { CoverSchema } from "../core/cover.schema";
import { RatingSchema } from "../core/rating.schema";
import { PostersSchema } from "../core/posters.schema";
import { LanguagesSchema } from "./languages.schema";
import { LastSeriesSchema } from "./last_series.schema";
import { MovieActorsSchema } from "./movie_actors.schema";
import { PlotSchema } from "./plot.schema";
import { PlotsSchema } from "./plots.schema";
import { GenresSchema } from "./genres.schema";
import { TrailersSchema } from "./trailers.schema";
import { CountriesSchema } from "./countries.schema";
import { SeasonsSchema } from "./movie_seasons.schema";
import { DirectorsSchema } from "./directors.schema";

export class MovieSchema {
    @Type(() => MovieDataSchema) public readonly data?: Array<MovieDataSchema>;
    @Type(() => MetaSchema) public readonly meta?: MetaSchema;
}

export class MovieDataSchema {
    public readonly id?: number;
    public readonly adjaraId?: number;
    public readonly primaryName?: string;
    public readonly secondaryName?: string;
    public readonly tertiaryName?: string;
    public readonly originalName?: string;
    public readonly year?: number;
    public readonly releaseDate?: string;
    public readonly imdbUrl?: string;
    public readonly isTvShow?: boolean;
    public readonly budget?: string;
    public readonly income?: string;
    public readonly duration?: number;
    public readonly adult?: boolean;
    public readonly watchCount?: number;
    public readonly canBePlayed?: boolean;
    public readonly regionAllowed?: boolean;
    public readonly parentalControlRate?: string;
    public readonly poster?: string;
    public readonly hasSubtitles?: boolean;
    covers?: CoversSchema;
    cover?: CoverSchema;
    rating?: RatingSchema;
    posters?: PostersSchema;
    languages?: LanguagesSchema;
    lastSeries?: LastSeriesSchema;
    actors?: MovieActorsSchema;
    plot?: PlotSchema;
    plots?: PlotsSchema;
    genres?: GenresSchema;
    trailers?: TrailersSchema;
    countries?: CountriesSchema;
    seasons?: SeasonsSchema;
    directors?: DirectorsSchema;
}