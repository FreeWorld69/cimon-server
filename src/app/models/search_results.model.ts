import { Exclude, Expose, plainToInstance, Transform, Type } from "class-transformer";
import { RatingSchema } from "../network/schemas/core/rating.schema";
import { PostersSchema } from "../network/schemas/core/posters.schema";
import { CoverSchema } from "../network/schemas/core/cover.schema";
import { PostersModel } from "./core/poster.model";
import { CoversModel } from "./core/covers.model";

@Exclude()
export class SearchResultsModel {
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

    @Expose({name: 'secondaryDescription'})
    public readonly geoDescription?: string;

    @Expose({name: 'primaryDescription'})
    public readonly engDescription?: string;

    @Expose({name: 'tertiaryDescription'})
    public readonly rusDescription?: string;

    @Expose()
    public readonly poster?: string;

    @Expose({name: 'posters'})
    @Transform(({obj}) => plainToInstance(PostersModel, obj?.posters?.data.s240))
    public readonly posterS240?: string;

    @Expose({name: 'isTvShow'})
    public readonly isSeries?: boolean;

    @Expose({name: 'year'})
    @Transform(obj => String(obj?.value ?? ''))
    public readonly releaseYear?: string;

    @Expose({name: 'rating'})
    @Transform(({obj}) => obj?.rating?.imdb?.score ?? 0)
    public readonly imdb?: number;

    @Expose()
    @Transform(({obj}) => plainToInstance(CoversModel, obj?.covers?.data))
    public readonly covers?: CoversModel;
}