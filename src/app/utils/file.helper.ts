import * as path from 'path';
import { HttpStatus } from '@nestjs/common';
import { GenericException } from "../commons/exceptions/generic.exception";
import { ExceptionMessageCode } from "../commons/enums/exception_message_code.enum";

export class FileHelper {
    public static imageFileFilter(_, file, callback) {
        if (!file.originalname.match(/\.(jpeg)$/)) {
            return callback(
                new GenericException(HttpStatus.BAD_REQUEST, ExceptionMessageCode.ONLY_JPEG_ALLOWED),
                false,
            );
        }

        callback(null, true);
    }

    public static customFileName(_, file, callback) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);

        const fileExtName = path.extname(file.originalname);
        const fileName = `${uniqueSuffix}${fileExtName}`;

        callback(null, fileName);
    }
}
