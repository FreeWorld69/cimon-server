import { Type } from 'class-transformer';
import { PlotDataSchema } from './plot.schema';

export class PlotsSchema {
    @Type(() => PlotDataSchema)
    public readonly data?: Array<PlotDataSchema>;
}
