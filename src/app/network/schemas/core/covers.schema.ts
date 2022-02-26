import { Expose, Type } from "class-transformer";

export class CoversDataSchema {
    @Expose({ name: "1920" }) public readonly s1920?: string;
    @Expose({ name: "1050" }) public readonly s1050?: string;
    @Expose({ name: "510" }) public readonly s510?: string;
    @Expose({ name: "367" }) public readonly s367?: string;
    @Expose({ name: "145" }) public readonly s145?: string;
    public readonly imageHeight?: any;
    public readonly position?: string;
    public readonly positionPercentage?: string;
    public readonly blurhash?: string;
}

export class CoversSchema {
    @Type(() => CoversDataSchema)
    public readonly data?: CoversDataSchema;
}