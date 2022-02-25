import helmet from 'helmet';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AllExceptionsFilter } from "./app/commons/filters/generic_exception.filter";
import { AppModule } from './app/modules/app.module';


NestFactory.create<NestExpressApplication>(AppModule).then(async (app) => {
    //!!!!!! https://swiperjs.com/demos for awesome swiping experience
    const port = 3000;
    const httpAdapterHost = app.get(HttpAdapterHost);

    // for api and data
    app.set('trust proxy', 1);
    app.use(cookieParser());
    app.use(helmet());
    app.use(compression());

    // app.useGlobalPipes(new ValidationPipe({transform: true}));
    app.useGlobalFilters(new AllExceptionsFilter(httpAdapterHost));
    app.enableCors({origin: true, methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', credentials: true,});

    // for mvc
    // TODO make it for cookie and test (https://docs.nestjs.com/techniques/session)
    app.use(session({secret: 'my-secret',  resave: false, saveUninitialized: false,}),);

    // for views
    await app.listen(port);

    // log extra details
    console.log({platform: 'nestjs', library: 'express', enviroment: process.env.NODE_ENV, port,});
});
