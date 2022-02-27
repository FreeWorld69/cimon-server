import { Exclude, Expose, Type } from "class-transformer";
import { CoversSchema } from "./core/covers.schema";
import { MovieFilesSchema } from "./core/movie_files.schema";

@Exclude()
export class SeasonFileSchema {
    @Expose()
    public readonly episode?: number;

    @Expose()
    public readonly title?: string;

    @Expose()
    public readonly poster?: string;

    @Expose()
    public readonly rating?: any;

    @Expose()
    @Type(() => CoversSchema)
    public readonly covers?: CoversSchema;

    @Expose({name: 'files'})
    @Type(() => MovieFilesSchema)
    public readonly movieFiles?: Array<MovieFilesSchema>;
}