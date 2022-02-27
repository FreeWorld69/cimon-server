import { Exclude, Expose, Type } from "class-transformer";

@Exclude()
export class FilesSchema {
    @Expose()
    public readonly lang?: string;

    @Expose()
    @Type(() => FileDataSchema)
    public readonly files?: Array<FileDataSchema>;
}

@Exclude()
export class FileDataSchema {
    @Expose() public readonly id?: number;
    @Expose() public readonly duration?: number;
    @Expose() public readonly quality?: string;
    @Expose() public readonly src?: string;
}
