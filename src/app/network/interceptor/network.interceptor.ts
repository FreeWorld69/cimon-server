import * as yg from '@yggdrasilts/axiosfit';

export class NetworkInterceptor implements yg.AxiosfitRequestInterceptor, yg.AxiosfitResponseInterceptor {
    onRequest(config: yg.AxiosRequestConfig): yg.AxiosRequestConfig | Promise<yg.AxiosRequestConfig> {
        // 10 sec
        config.timeout = 10000;

        // register needed headers
        config.headers = {
            'User-Agent': process.env.MOVIE_API_HEADER_USER_AGENT,
            'x-source': process.env.MOVIE_API_HEADER_X_SOURCE,
            'origin': process.env.MOVIE_API_HEADER_ORIGIN,
            'referer': process.env.MOVIE_API_HEADER_REFERER
        }

        return config;
    }

    onResponse(response: yg.AxiosResponse): yg.AxiosResponse | Promise<yg.AxiosResponse> {
        return response.data;
    }

}
