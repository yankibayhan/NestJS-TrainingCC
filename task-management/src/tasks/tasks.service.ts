import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './task.model';
import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    // Fork all the tasks
    getAllTasks(): Task[] {
        return this.tasks;
    }

    // Get Task from its ID
    getTaskById(id : string): Task {
        return this.tasks.find(task => task.id === id);
    }
    
    // Create a Task
    createTask(createTaskDto : CreateTaskDto) {

        const {title, description} = createTaskDto;

        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN,
        };
        this.tasks.push(task);
        return task;
    }
    // Delete a Task
    deleteTaskById(id : string): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
    
}
