/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosResponse, GET, HTTP, Interceptors, Path } from '@yggdrasilts/axiosfit';
import { NetworkInterceptor } from '../interceptor/network.interceptor';

@HTTP('/test', {usePromises: true, enableAxiosLogger: process.env.NODE_ENV === 'development'}) @Interceptors(NetworkInterceptor)
export class MoviesApiService {
    @GET('/test')
    public test(@Path('testParam') _testParam: string,): Promise<AxiosResponse<{ testResponse: object }>> {
        return null;
    }
}
