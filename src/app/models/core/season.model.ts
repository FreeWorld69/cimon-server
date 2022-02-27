import { Exclude, Expose } from "class-transformer";

@Exclude()
export class SeasonModel {
    @Expose()
    public readonly name?: string;

    @Expose()
    public readonly movieId?: number;

    @Expose()
    public readonly number?: number;

    @Expose()
    public readonly episodesCount?: number;
}
