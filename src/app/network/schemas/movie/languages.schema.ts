import { Type } from "class-transformer";

class LanguagesDataSchema {
    public readonly code?: string;
    public readonly primaryName?: string;
    public readonly primaryNameTurned?: string;
    public readonly tertiaryName?: string;
    public readonly secondaryName?: string;
}

export class LanguagesSchema {
    @Type(() => LanguagesDataSchema)
    public readonly data?: LanguagesDataSchema;
}