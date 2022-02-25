import { Type } from "class-transformer";
import { ThumbnailSchema } from "./thumbnail.schema";

export class FilesSchema {
    public readonly lang?: string;

    @Type(() => FileDataSchema)
    public readonly files?: Array<FileDataSchema>;
}

export class FileDataSchema {
    public readonly id?: number;
    public readonly duration?: number;
    public readonly quality?: string;
    public readonly src?: string;
    @Type(() => ThumbnailSchema) public readonly thumbnails?: Array<ThumbnailSchema>;
}
