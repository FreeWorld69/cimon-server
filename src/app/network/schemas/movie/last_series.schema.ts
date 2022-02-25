import { Type } from "class-transformer";

export class LastSeriesSchema {
    @Type(() => LastSeriesDataSchema)
    public readonly data?: LastSeriesDataSchema;
}

class LastSeriesDataSchema {
    public readonly season?: number;
    public readonly episode?: number;
}
