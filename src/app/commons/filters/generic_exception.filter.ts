import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Request } from 'express';
import { Generic } from '../common_types';
import { HttpAdapterHost } from '@nestjs/core';
import { GenericException } from '../exceptions/generic.exception';
import { ExceptionMessageCode } from '../enums/exception_message_code.enum';
import { configs } from 'src/configs/config';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    console.log(exception);

    const httpAdapter = this.httpAdapterHost?.httpAdapter;
    const ctx = host.switchToHttp();
    const request = ctx.getRequest() as Request;

    // can be removed or saved in some file
    AllExceptionsFilter.logInternalServerErrors(exception);

    // http exceptions
    if (exception instanceof GenericException) {
      const exceptionResponse = exception.getResponse() as Generic.ExceptionProps;
      const statusCode = exception.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR;
      const responseBody: Generic.ExceptionProps = {
        message: exceptionResponse?.message ?? configs.messages.exceptions.generalMessage,
        messageCode: exceptionResponse?.messageCode ?? ExceptionMessageCode.INTERNAL_SERVER_ERROR,
        statusCode,
        stack: AllExceptionsFilter.getAdditionInfo(request, exception),
      };

      return httpAdapter.reply(ctx.getResponse(), responseBody, statusCode);
    }

    // http exceptions not thrown by me
    if (exception instanceof HttpException) {
      const exceptionResponseBody = exception.getResponse() as any;
      const statusCode = exception.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR;
      const message = Array.isArray(exceptionResponseBody?.message)
        ? exceptionResponseBody?.message[0]
        : null;
      const responseBody: Generic.ExceptionProps = {
        message: message ?? exception.message,
        messageCode: ExceptionMessageCode.GENERAL_ERROR,
        statusCode,
        stack: AllExceptionsFilter.getAdditionInfo(request, exception),
      };

      return httpAdapter.reply(ctx.getResponse(), responseBody, statusCode);
    }

    // general and internal errors
    return httpAdapter.reply(
      ctx.getResponse(),
      {
        message: 'internal server error',
        messageCode: ExceptionMessageCode.INTERNAL_SERVER_ERROR,
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        stack: AllExceptionsFilter.getAdditionInfo(request, exception),
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }

  private static getAdditionInfo(request: Request, exception: any) {
    const additionalParams: Generic.ExceptionPropsStack = {
      timestamp: new Date().toISOString(),
      path: request?.url,
      method: request?.method,
      headers: request?.headers,
      extraStack: exception && Object.values(exception).length ? exception : undefined,
    };

    return process.env.NODE_ENV === 'development' ? additionalParams : undefined;
  }

  private static logInternalServerErrors(exception: any) {
    if (exception && exception.hasOwnProperty('getStatus') && exception.getStatus() === 500) {
      console.log(exception);
    }
  }
}
