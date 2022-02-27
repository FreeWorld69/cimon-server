import { Exclude, Expose, Type } from "class-transformer";
import { CoversModel } from "./core/covers.model";
import { MovieFilesModel } from "./core/movie_files.model";

@Exclude()
export class SeasonFileModel {
    @Expose()
    public readonly episode?: number;

    @Expose()
    public readonly title?: string;

    @Expose()
    public readonly poster?: string;

    @Expose()
    public readonly rating?: any;

    @Expose()
    @Type(() => CoversModel)
    public readonly covers?: CoversModel;

    @Expose({name: 'files'})
    @Type(() => MovieFilesModel)
    public readonly movieFiles?: Array<MovieFilesModel>;
}