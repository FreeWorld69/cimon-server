import { Type } from "class-transformer";

export class TrailersSchema {
    @Type(() => TrailersDataSchema)
    public readonly data?: Array<TrailersDataSchema>;
}

class TrailersDataSchema {
    public readonly id?: number;
    public readonly name?: string;
    public readonly fileUrl?: string;
    public readonly language?: string;
}
