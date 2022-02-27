import { Type } from "class-transformer";
import { CoversDataSchema } from "../core/covers.schema";
import { FilesSchema } from "./files.schema";

export class SeasonFilesSchema {
    @Type(() => SeasonFileDataSchema)
    public readonly data?: Array<SeasonFileDataSchema>;
}

export class SeasonFileDataSchema {
    public readonly episode?: number;
    public readonly episodes_include?: string;
    public readonly title?: string;
    public readonly description?: string;
    public readonly poster?: string;
    public readonly rating?: any;
    @Type(() => CoversDataSchema) public readonly covers?: CoversDataSchema;
    @Type(() => FilesSchema) public readonly files?: Array<FilesSchema>;
}