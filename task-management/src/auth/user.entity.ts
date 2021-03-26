import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique} from 'typeorm';

@Entity()
@Unique(['username']) // For duplicate username
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string

}