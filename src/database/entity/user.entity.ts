import { Column, Entity, OneToOne } from 'typeorm';
import { GeneralEntity } from '../entity_inheritance/generic.entity';
import { UserDetails } from "./user_details.entity";

@Entity('users')
export class User extends GeneralEntity {
    @Column({unique: true}) username: string;
    @Column() email: string;
    @Column({nullable: true, type: 'text'}) img_path?: string;

    @Column({nullable: false, select: false})
    password: string;

    @Column({nullable: false, select: false})
    ip?: string;

    // relations

    @OneToOne(() => UserDetails, (details) => details.user)
    details: UserDetails;
}
