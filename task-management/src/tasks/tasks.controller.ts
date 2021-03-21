import { TasksService } from './tasks.service';
import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService : TasksService){ } // Provided injectable service 


    @Get() // provided a decorator for GET method
    getTasks(){
        return this.tasksService.getAllTasks();
    }
}

