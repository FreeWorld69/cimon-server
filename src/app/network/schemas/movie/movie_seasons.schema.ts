import { Type } from "class-transformer";

export class SeasonsSchema {
    @Type(() => SeasonsDataSchema)
    public readonly data?: Array<SeasonsDataSchema>;
}

class SeasonsDataSchema {
    public readonly name?: string;
    public readonly movieId?: number;
    public readonly number?: number;
    public readonly episodesCount?: number;
}
