import { Type } from "class-transformer";

export class CountriesSchema {
    @Type(() => CountriesDataSchema)
    public readonly data?: Array<CountriesDataSchema>;
}

class CountriesDataSchema {
    public readonly id?: number;
    public readonly primaryName?: string;
    public readonly secondaryName?: string;
    public readonly tertiaryName?: string;
}
