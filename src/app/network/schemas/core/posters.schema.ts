import { Type } from "class-transformer";

export class PostersSchema {
    @Type(() => PostersDataSchema)
    public readonly data: PostersDataSchema
}

class PostersDataSchema {
    public readonly 240?: string
    public readonly blurhash?: string
}
