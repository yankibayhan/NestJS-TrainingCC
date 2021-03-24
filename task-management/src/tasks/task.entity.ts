import { TaskStatus } from './task.model';
import {BaseEntity, Entity, PrimaryGeneratedColumn, Column} from 'typeorm'


// Database Logic for Tasks

@Entity()
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    status: TaskStatus;
}