import { Type } from "class-transformer";

export class MetaSchema {
    @Type(() => PaginationSchema)
    public readonly pagination?: PaginationSchema;
}

class PaginationSchema {
    public readonly total?: number;
    public readonly count?: number;
    public readonly per_page?: number;
    public readonly current_page?: number;
    public readonly total_pages?: number;

    @Type(() => LinksSchema)
    public readonly links?: LinksSchema;
}

class LinksSchema {
    public readonly next?: string;
    public readonly previous?: string;
}