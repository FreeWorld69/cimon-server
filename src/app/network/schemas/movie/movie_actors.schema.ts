import { Type } from "class-transformer";

export class MovieActorsSchema {
    @Type(() => MovieActorsDataSchema)
    public readonly data?: Array<MovieActorsDataSchema>;
}

class MovieActorsDataSchema {
    public readonly id?: number;
    public readonly originalName?: string;
    public readonly primaryName?: string;
    public readonly secondaryName?: string;
    public readonly tertiaryName?: string;
    public readonly poster?: string;
    public readonly birthDate?: string;
    public readonly birthPlace?: string;
    public readonly deathDate?: string;
    public readonly deathPlace?: string;
    public readonly height?: number;
    public readonly slogan?: string;
    public readonly zodiacSign?: string;
}
