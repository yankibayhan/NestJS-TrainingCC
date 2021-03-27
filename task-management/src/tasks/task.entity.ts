import { User } from './../auth/user.entity';
// import { TaskStatus } from './task.model';
import { TaskStatus } from './task-status.enum'
import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm'


// Database Model for Tasks

@Entity()
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus;
    
    @ManyToOne(type => User, user => user.tasks, {eager : false})
    user: User

    @Column()
    userId: number;

    

    
}