import { Entity, JoinColumn, OneToOne } from 'typeorm';
import { GeneralEntity } from '../entity_inheritance/generic.entity';
import { User } from './user.entity';

@Entity({name: 'user_details'})
export class UserDetails extends GeneralEntity {
    @OneToOne(() => User, (user) => user.details) @JoinColumn() user: User;
}
