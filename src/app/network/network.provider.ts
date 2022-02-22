import { Injectable } from '@nestjs/common';
import { Axiosfit } from '@yggdrasilts/axiosfit';
import { MoviesApiService } from './services/movie.service';

@Injectable()
export class NetworkProvider {
    public lolRemoteService = new Axiosfit<MoviesApiService>()
        .baseUrl(process.env.MOVIE_API_URL)
        .create(MoviesApiService);
}
