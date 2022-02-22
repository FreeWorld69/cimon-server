import { IncomingHttpHeaders } from 'http';
import { ExceptionMessageCode } from "./enums/exception_message_code.enum";
import { HttpStatus } from "@nestjs/common";

export namespace Generic {
    export interface ExceptionPropsStack {
        path: string;
        method: string;
        extraStack: any;
        timestamp: string;
        headers: IncomingHttpHeaders;
    }

    export interface ExceptionProps {
        message: string;
        messageCode: ExceptionMessageCode;
        statusCode: HttpStatus;
        stack?: Partial<ExceptionPropsStack>;
    }
}


export namespace Token {
    export interface AccessPayload {
        uuid: string;
    }

    export interface ValidateAccessParams {
        token: string;
        secret: string;
        clbck?: () => any;
        expired_clbck?: () => any;
    }
}