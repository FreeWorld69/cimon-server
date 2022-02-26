import { Module } from '@nestjs/common';
import { NetworkProvider } from './network.provider';
import { MoviesApiService } from "./services/movie_api.service";

@Module({
    imports: [],
    controllers: [],
    providers: [NetworkProvider, MoviesApiService],
    exports: [NetworkProvider, MoviesApiService],
})
export class NetworkModule {}
