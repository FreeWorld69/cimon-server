import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CoversModel {
    @Expose()
    public readonly s1920?: string;

    @Expose()
    public readonly s1050?: string;

    @Expose()
    public readonly s510?: string;

    @Expose()
    public readonly s367?: string;

    @Expose()
    public readonly s145?: string;
}
