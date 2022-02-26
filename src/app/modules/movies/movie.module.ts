import { Module } from '@nestjs/common';
import { NetworkModule } from "../../network/network.module";
import { MovieController } from "./movie.controller";
import { MovieService } from "./movie.service";

@Module({
    imports: [NetworkModule],
    controllers: [MovieController],
    providers: [MovieService],
})
export class MovieModule {}
