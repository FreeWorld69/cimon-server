import { Exclude, Expose, plainToInstance, Transform, Type } from "class-transformer";
import { PostersModel } from "./core/poster.model";
import { CoversModel } from "./core/covers.model";
import { CoverModel } from "./core/cover.model";
import { PlotModel } from "./core/plot.model";
import { GenresModel } from "./core/genre.model";
import { SeasonModel } from "./core/season.model";

@Exclude()
export class MovieModel {
    @Expose()
    public readonly id?: number;

    @Expose()
    public readonly movieDetailsId?: number;

    @Expose({name: 'primaryName'})
    public readonly geoTitle?: string;

    @Expose({name: 'secondaryName'})
    public readonly engTitle?: string;

    @Expose({name: 'tertiaryName'})
    public readonly rusTitle?: string;

    @Expose({name: 'originalName'})
    public readonly originalTitle?: string;

    @Expose({name: 'isTvShow'})
    public readonly isSeries?: boolean;

    @Expose()
    public readonly duration?: number;

    @Expose({name: 'rating'})
    @Transform(({obj}) => obj?.rating?.imdb?.score ?? 0)
    public readonly imdb?: number;

    @Expose()
    public readonly releaseDate?: string;

    @Expose({name: 'year'})
    @Transform(obj => String(obj?.value ?? ''))
    public readonly releaseYear?: string;

    @Expose()
    public readonly poster?: string;

    @Expose({name: 'posters'})
    @Transform(({obj}) => plainToInstance(PostersModel, obj?.posters?.data.s240))
    public readonly posterS240?: string;

    @Expose()
    @Type(() => CoverModel)
    public readonly cover?: CoverModel;

    @Expose()
    @Transform(({obj}) => plainToInstance(CoversModel, obj?.covers?.data))
    public readonly covers?: CoversModel;

    @Expose()
    @Transform(({obj}) => plainToInstance(PlotModel, obj?.plots?.data ?? null))
    public readonly plots?: Array<PlotModel>;

    @Expose()
    @Transform(({obj}) => plainToInstance(GenresModel, obj?.genres?.data ?? null))
    public readonly genres?: Array<GenresModel>;

    @Expose()
    @Transform(({obj}) => plainToInstance(SeasonModel, obj?.seasons?.data ?? null))
    public readonly seasons?: Array<SeasonModel>;
}