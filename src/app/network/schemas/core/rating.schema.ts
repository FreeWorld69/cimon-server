import { Expose, Type } from "class-transformer";
import { RatingItemSchema } from "./rating_item.schema";

export class RatingSchema {
    @Type(() => RatingItemSchema)
    public readonly imovies?: RatingItemSchema;

    @Type(() => RatingItemSchema)
    public readonly imdb?: RatingItemSchema;

    @Type(() => RatingItemSchema)
    public readonly rotten?: RatingItemSchema;

    @Type(() => RatingItemSchema)
    @Expose({ name: "metacritic" })
    public readonly metaCritic?: RatingItemSchema;
}