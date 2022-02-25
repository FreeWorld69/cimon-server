import { Type } from "class-transformer";

export class CoversSchema {
    @Type(() => CoversDataSchema)
    public readonly data?: CoversDataSchema;
}

export class CoversDataSchema {
    public readonly 1920?: string;
    public readonly 1050?: string
    public readonly 510?: string
    public readonly 367?: string
    public readonly 145?: string
    public readonly imageHeight?: any;
    public readonly position?: string;
    public readonly positionPercentage?: string;
    public readonly blurhash?: string;
}