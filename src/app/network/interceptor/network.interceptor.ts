import * as yg from '@yggdrasilts/axiosfit';
import { GenericException } from '../../commons/exceptions/generic.exception';
import { HttpStatus } from '@nestjs/common';
import { ExceptionMessageCode } from '../../commons/enums/exception_message_code.enum';

export class NetworkInterceptor
  implements yg.AxiosfitRequestInterceptor, yg.AxiosfitResponseInterceptor, yg.AxiosfitInterceptor
{
  onRequest(config: yg.AxiosRequestConfig): yg.AxiosRequestConfig | Promise<yg.AxiosRequestConfig> {
    // 10 sec
    config.timeout = 10000;

    // register needed headers
    config.headers = {
      'content-type': 'application/json',
      Accept: 'application/json',
      'User-Agent': process.env.MOVIE_API_HEADER_USER_AGENT,
      'x-source': process.env.MOVIE_API_HEADER_X_SOURCE,
      origin: process.env.MOVIE_API_HEADER_ORIGIN,
      referer: process.env.MOVIE_API_HEADER_REFERER,
    };

    return config;
  }

  onError(): any {
    throw new GenericException(
      HttpStatus.BAD_REQUEST,
      ExceptionMessageCode.INTERNAL_API_ERROR,
      'api error',
    );
  }

  onResponse(response: yg.AxiosResponse): yg.AxiosResponse | Promise<yg.AxiosResponse> {
    return response.data;
  }
}
