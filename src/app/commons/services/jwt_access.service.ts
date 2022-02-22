import * as jwt from 'jsonwebtoken';
import { configs } from 'src/configs/config';
import { Token } from "../common_types";
import { ExceptionMessageCode } from "../enums/exception_message_code.enum";
import { RandomGenerator } from '../../utils/random_generator.helper';
import { GenericException } from "../exceptions/generic.exception";
import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class JwtAccessService {
    constructor(public readonly jwtService: JwtService) {}

    public async validateToken(params: Token.ValidateAccessParams): Promise<Token.AccessPayload> {
        if (!params.token) {
            throw new GenericException(HttpStatus.UNAUTHORIZED, ExceptionMessageCode.TOKEN_MISSING);
        }

        let decodedToken: Token.AccessPayload;

        await jwt.verify(params.token, params.secret, async (err: jwt.VerifyErrors, decoded: jwt.JwtPayload) => {
            if (!err) {
                decodedToken = decoded as Token.AccessPayload;
                return null;
            }

            // expired
            if (err instanceof jwt.TokenExpiredError) {
                if ('expired_clbck' in params) await params.expired_clbck();

                throw new GenericException(HttpStatus.UNAUTHORIZED, ExceptionMessageCode.TOKEN_EXPIRED_ERROR, err.message,);
            }

            if ('clbck' in params) await params.clbck();

            // general
            if (err instanceof jwt.JsonWebTokenError) {
                throw new GenericException(HttpStatus.UNAUTHORIZED, ExceptionMessageCode.TOKEN_ERROR, err.message);
            }
        });

        return decodedToken;
    }

    public generateAccessToken(uuid: string): string {
        const payload = {uuid};

        return this.jwtService.sign(payload, {expiresIn: configs.tokens.access_token});
    }

    public generateForgotPasswordToken(uuid: number) {
        const secret = RandomGenerator.randomString();
        const payload = {uuid};
        const token = this.jwtService.sign(payload, {expiresIn: configs.tokens.user_forgot_password, secret,});

        return {secret, token};
    }

    public decodeAccessToken(token: string) {
        return new Promise((resolve: (value: Token.AccessPayload) => void) => {
            jwt.verify(token, process.env.JWT_SECRET, (err: jwt.VerifyErrors) => {
                // we don't care about token expiration only valid
                if (!err || err instanceof jwt.TokenExpiredError) {
                    const decoded = jwt.decode(token) as Token.AccessPayload;
                    resolve(decoded);
                }

                throw new GenericException(HttpStatus.UNAUTHORIZED, ExceptionMessageCode.GENERAL_ERROR, 'token must be validated before',);
            });
        });
    }
}
