import { Type } from "class-transformer";

class LastSeriesDataSchema {
    public readonly season?: number;
    public readonly episode?: number;
}

export class LastSeriesSchema {
    @Type(() => LastSeriesDataSchema)
    public readonly data?: LastSeriesDataSchema;
}


