import { Expose, Type } from "class-transformer";

class LinksSchema {
    public readonly next?: string;
    public readonly previous?: string;
}

class PaginationSchema {
    public readonly total?: number;
    public readonly count?: number;

    @Expose({ name: "per_page" })
    public readonly perPage?: number;

    @Expose({ name: "current_page" })
    public readonly currentPage?: number;

    @Expose({ name: "total_pages" })
    public readonly totalPages?: number;

    @Type(() => LinksSchema)
    public readonly links?: LinksSchema;
}


export class MetaSchema {
    @Type(() => PaginationSchema)
    public readonly pagination?: PaginationSchema;
}