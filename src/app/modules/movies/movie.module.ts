import { Module } from '@nestjs/common';
import { NetworkModule } from "../../network/network.module";
import { MovieController } from "./movie.controller";

@Module({
    imports: [NetworkModule],
    controllers: [MovieController],
    providers: [],
})
export class MovieModule {}
