import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { Connection} from 'typeorm';

@Injectable({})
export class GeneralCommand {
  constructor(private readonly connection: Connection) {}

  @Command({
    command: 'clean',
    describe: 'clean all matching spams matched duos notifications and lobby from database',
  })
  async clean() {
    if (process.env.NODE_ENV !== 'development') {
      console.log('not so fast');
    }

    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      console.log('wassup')
      // await queryRunner.manager.getRepository(entity).createQueryBuilder().delete().where('id > 0');

      await queryRunner.commitTransaction();
    } catch (err) {
      // since we have errors lets rollback the changes we made
      console.log(err);

      await queryRunner.rollbackTransaction();
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }
  }
}
