import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Task } from './task.model';


// Big Magic Happens in Controller
@Controller('tasks')
export class TasksController {
    constructor(private tasksService : TasksService){} // Provided injectable service 


    @Get() // provided a decorator for GET method
    getTasks(): Task[] {
        return this.tasksService.getAllTasks();
    }

    @Get(':id') // provided id url path
    getTaskById(@Param('id') id : string): Task {
        return this.tasksService.getTaskById(id);
    }

    @Post() // provided a decorator for POST method
    createTask(@Body() createTaskDto : CreateTaskDto): Task {
        return this.tasksService.createTask(createTaskDto);
    }

    @Delete(':id') // provided id url path to delete
    deleteTaskById(@Param('id') id: string): void {
        this.tasksService.deleteTaskById(id);
    }
}      




