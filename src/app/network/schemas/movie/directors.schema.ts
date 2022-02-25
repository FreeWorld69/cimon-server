import { Type } from "class-transformer";

export class DirectorsSchema {
    @Type(() => DirectorsDataSchema)
    public readonly data?: Array<DirectorsDataSchema>;
}

class DirectorsDataSchema {
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
