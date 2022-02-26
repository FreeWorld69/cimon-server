import * as yg from '@yggdrasilts/axiosfit';

export class NetworkInterceptor implements yg.AxiosfitRequestInterceptor, yg.AxiosfitResponseInterceptor, yg.AxiosfitInterceptor {
    onRequest(config: yg.AxiosRequestConfig): yg.AxiosRequestConfig | Promise<yg.AxiosRequestConfig> {
        // 10 sec
        config.timeout = 10000;

        // register needed headers
        config.headers = {
            'content-type': 'application/json',
            "Accept": "application/json",
            // 'User-Agent': process.env.MOVIE_API_HEADER_USER_AGENT,
            'x-source': process.env.MOVIE_API_HEADER_X_SOURCE,
            'origin': process.env.MOVIE_API_HEADER_ORIGIN,
            'referer': process.env.MOVIE_API_HEADER_REFERER,
        }

        return config;
    }

    onError(error: any): any {
        console.log(error)
    }

    onResponse(response: yg.AxiosResponse): yg.AxiosResponse | Promise<yg.AxiosResponse> {
        return response.data;
    }

}
