import { Type } from "class-transformer";
import { MetaSchema } from "../core/meta.schema";
import { RatingSchema } from "../core/rating.schema";
import { PostersSchema } from "../core/posters.schema";
import { CoverSchema } from "../core/cover.schema";

export class SearchResultsSchema {
    @Type(() => SearchResultDataSchema)
    public readonly data?: Array<SearchResultDataSchema>;

    @Type(() => MetaSchema)
    public readonly meta?: MetaSchema;
}

export class SearchResultDataSchema {
    public readonly id?: number;
    public readonly type?: string;
    public readonly adjaraId?: number;
    public readonly originalName?: string;
    public readonly primaryName?: string;
    public readonly secondaryName?: string;
    public readonly tertiaryName?: string;
    public readonly primaryDescription?: string;
    public readonly secondaryDescription?: string;
    public readonly tertiaryDescription?: string;
    public readonly poster?: string;
    public readonly isTvShow?: boolean;
    public readonly isAdult?: boolean;
    public readonly year?: number;
    public readonly weight?: number;
    @Type(() => RatingSchema) public readonly rating?: RatingSchema;
    @Type(() => PostersSchema) public readonly posters?: PostersSchema;
    @Type(() => CoverSchema) public readonly covers?: CoverSchema;
}