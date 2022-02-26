import { Injectable } from '@nestjs/common';
import { Axiosfit } from '@yggdrasilts/axiosfit';
import { MoviesApiService } from './services/movie_api.service';

@Injectable()
export class NetworkProvider {
    // public moviesApiService = new Axiosfit<MoviesApiService>()
    //     .baseUrl(process.env.MOVIE_API_URL)
    //     .create(MoviesApiService);
}
