import { Exclude, Expose } from "class-transformer";

@Exclude()
export class MovieFileSchema {
    @Expose()
    public readonly id?: number;

    @Expose()
    public readonly duration?: number;

    @Expose()
    public readonly quality?: string;

    @Expose()
    public readonly src?: string;
}