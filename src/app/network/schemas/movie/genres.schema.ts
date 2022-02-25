import { Type } from "class-transformer";

export class GenresSchema {
    @Type(() => GenresDataSchema)
    public readonly data?: Array<GenresDataSchema>;
}

class GenresDataSchema {
    public readonly id?: number;
    public readonly primaryName?: string;
    public readonly secondaryName?: string;
    public readonly tertiaryName?: string;
    public readonly backgroundImage?: string;
}
