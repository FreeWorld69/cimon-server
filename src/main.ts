import helmet from 'helmet';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AllExceptionsFilter } from './app/commons/filters/generic_exception.filter';
import { AppModule } from './app/modules/app/app.module';
import { ValidationPipe } from '@nestjs/common';
import * as axios from 'axios';

function test() {
  axios.default
    .get(
      'https://api.adjaranet.com/api/v1/movies?page=1&per_page=20&filters%5Blanguage%5D=GEO&filters%5Btype%5D=movie&filters%5Bonly_public%5D=yes&filters%5Bwith_actors%5D=3&filters%5Bwith_directors%5D=1&filters%5Bwith_files%5D=yes&sort=-upload_date&source=adjaranet',
    )
    .then((r) => {
      console.log('------------------');
      console.log(r.data);
      console.log('------------------');
    })
    .catch((err: axios.AxiosError) => {
      console.log('==============');
      console.log(err.name);
      console.log(err.message);
      console.log('==============');
    });
}

NestFactory.create<NestExpressApplication>(AppModule).then(async (app) => {
  app.set('trust proxy', 1);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  //   app.useGlobalFilters(new AllExceptionsFilter(app.get(HttpAdapterHost)));
  app.use(session({ secret: 'my-secret', resave: false, saveUninitialized: false }));
  app.use(cookieParser());
  app.use(helmet());
  app.use(compression());
  app.setGlobalPrefix('/api');
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(process.env.PORT);

  test();

  console.log({
    platform: 'nestjs',
    library: 'express',
    enviroment: process.env.NODE_ENV,
    port: process.env.PORT,
  });
});

/**
 * !!!!!! https://swiperjs.com/demos for awesome swiping experience
 * TODO integrate session for cookies !!! (https://docs.nestjs.com/techniques/session)
 */
