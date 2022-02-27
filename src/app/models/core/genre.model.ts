import { Exclude, Expose } from "class-transformer";

@Exclude()
export class GenresModel {
    @Expose()
    public readonly id?: number;

    @Expose({name: 'primaryName'})
    public readonly geoTitle?: string;

    @Expose({name: 'secondaryName'})
    public readonly engTitle?: string;

    @Expose({name: 'tertiaryName'})
    public readonly rusTitle?: string;
}
