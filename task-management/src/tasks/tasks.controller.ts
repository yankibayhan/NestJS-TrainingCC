import { TasksService } from './tasks.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from './task.model';
import { stringify } from 'node:querystring';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService : TasksService){ } // Provided injectable service 


    @Get() // provided a decorator for GET method
    getTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Post() // provided a decorator for POST method
    createTask( 
        @Body('title') title: string,
        @Body('description') description: string,
    ): Task {
        return this.tasksService.createTask(title,description);
    }
}      




