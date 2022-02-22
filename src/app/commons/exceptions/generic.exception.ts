import { HttpException, HttpStatus } from '@nestjs/common';
import { ExceptionMessageCode } from "../enums/exception_message_code.enum";
import { Generic } from "../common_types";

export interface GenericExceptionResponse {
    message: string | null;
    messageCode: ExceptionMessageCode | null;
    statusCode: number | null;
}

export class GenericException extends HttpException {
    constructor(statusCode: HttpStatus, messageCode: ExceptionMessageCode, message?: string) {
        const generalExceptionProps: Generic.ExceptionProps = {
            statusCode,
            messageCode,
            message,
        };

        super(generalExceptionProps, statusCode);
    }
}
