import { EntityRepository, Repository} from 'typeorm';
import { Task } from './task.entity';


// Repo For Tasks

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {


}