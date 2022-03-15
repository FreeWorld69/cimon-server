import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandModule } from 'nestjs-command';
import { TypeormConfig } from 'src/configs/typeorm';
import { GeneralCommand } from './general/general.command';

@Module({
  imports: [
    CommandModule,
    ConfigModule.forRoot({ isGlobal: true }),
    // TypeOrmModule.forRoot(TypeormConfig.instance),
  ],
  controllers: [],
  providers: [GeneralCommand],
})
export class CommandsModule {}
