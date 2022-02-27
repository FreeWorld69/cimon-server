import { Exclude, Expose, Type } from "class-transformer";
import { MovieFileSchema } from "./movie_file.schema";

@Exclude()
export class MovieFilesSchema {
    @Expose()
    public readonly lang?: string;

    @Expose({name: 'files'})
    @Type(() => MovieFileSchema)
    public readonly movies?: Array<MovieFileSchema>;
}