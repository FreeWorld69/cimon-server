import * as path from 'path';
import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormConfig } from '../../../configs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { MovieModule } from '../movies/movie.module';

@Module({
  imports: [
    ThrottlerModule.forRoot({ ttl: 60, limit: 100 }), // 100 request every minute
    JwtModule.register({}),
    ConfigModule.forRoot({ isGlobal: true }),
    // TypeOrmModule.forRoot(TypeormConfig.instance),
    MulterModule.register({ dest: path.join(__dirname, '../../../../', 'upload') }),

    // own modules
    MovieModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
