import { Type } from "class-transformer";
import { MetaSchema } from "../core/meta.schema";
import { ActorSchema } from "./actor.schema";

export class ActorsSchema {
    @Type(() => ActorSchema)
    public readonly data?: Array<ActorSchema>

    @Type(() => MetaSchema)
    public readonly meta?: MetaSchema;
}





