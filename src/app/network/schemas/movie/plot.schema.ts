import { Type } from "class-transformer";

export class PlotDataSchema {
    public readonly description?: string;
    public readonly language?: string;
}

export class PlotSchema {
    @Type(() => PlotDataSchema)
    public readonly data?: PlotDataSchema;
}

