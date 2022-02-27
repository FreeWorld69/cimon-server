import { Exclude, Expose } from "class-transformer";

@Exclude()
export class MovieFileModel {
    @Expose()
    public readonly id?: number;

    @Expose()
    public readonly duration?: number;

    @Expose()
    public readonly quality?: string;

    @Expose()
    public readonly src?: string;
}