import { Exclude, Expose, Type } from "class-transformer";
import { MovieFileModel } from "./movie_file.model";

@Exclude()
export class MovieFilesModel {
    @Expose()
    public readonly lang?: string;

    @Expose({name: 'files'})
    @Type(() => MovieFileModel)
    public readonly movies?: Array<MovieFileModel>;
}