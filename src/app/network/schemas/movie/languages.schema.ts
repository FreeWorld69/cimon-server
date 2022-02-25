import { Type } from "class-transformer";

export class LanguagesSchema {
    @Type(() => LanguagesDataSchema)
    public readonly data?: LanguagesDataSchema;
}

class LanguagesDataSchema {
    public readonly code?: string;
    public readonly primaryName?: string;
    public readonly primaryNameTurned?: string;
    public readonly tertiaryName?: string;
    public readonly secondaryName?: string;
}