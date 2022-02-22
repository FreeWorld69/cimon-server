import helmet from 'helmet';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AllExceptionsFilter } from "./app/commons/filters/generic_exception.filter";
import { AppModule } from './app/modules/app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';
import * as path from 'path';
import * as hbs from 'hbs';
import * as hbsUtilsFunc from 'hbs-utils';
import * as handlebarsLayouts from 'handlebars-layouts';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import * as csurf from 'csurf';



NestFactory.create<NestExpressApplication>(AppModule).then(async (app) => {
    //!!!!!! https://swiperjs.com/demos for awesome swiping experience
    const hbsUtils = hbsUtilsFunc(hbs);
    const port = 3000;
    const httpAdapterHost = app.get(HttpAdapterHost);

    // for api and data
    app.set('trust proxy', 1);
    app.use(cookieParser());
    app.use(helmet());
    app.use(compression());
    app.use(csurf());

    app.useGlobalPipes(new ValidationPipe({transform: true}));
    app.useGlobalFilters(new AllExceptionsFilter(httpAdapterHost));
    app.enableCors({origin: true, methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', credentials: true,});

    // for mvc
    // TODO make it for cookie and test (https://docs.nestjs.com/techniques/session)
    app.use(session({secret: 'my-secret',  resave: false, saveUninitialized: false,}),);


    // for views
    app.setViewEngine('hbs');
    app.useStaticAssets(path.join(__dirname, './assets'), {prefix: '/src/assets'});
    app.setBaseViewsDir(path.join(__dirname, './views'));
    hbs.registerPartials(path.join(__dirname, './views/partials'));
    hbsUtils.registerWatchedPartials(path.join(__dirname, './views/partials'));

    // handlebars registering helpers
    hbs.handlebars.registerHelper(handlebarsLayouts(hbs.handlebars));
    hbs.handlebars.registerHelper('helper_name', () => 'helper value');
    hbs.handlebars.registerHelper('loud', (aString) => aString.toUpperCase());
    hbs.handlebars.registerHelper('print_person', function () { return this.firstname + ' ' + this.lastname;});

    await app.listen(port);

    // log extra details
    console.log({platform: 'nestjs', library: 'express', enviroment: process.env.NODE_ENV, port,});
});
