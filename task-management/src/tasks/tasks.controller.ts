import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import {Task} from './task.entity';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
// import { Task, TaskStatus } from './task.model';


// Big Magic Happens in Controller
@Controller('tasks')
export class TasksController {
    constructor(private tasksService : TasksService){} // Provided injectable service 


    // @Get() // provided a decorator for GET method
    // getTasks(@Query() filterDto : GetTasksFilterDto): Task[] {

    //     if(Object.keys(filterDto).length) {
    //         return this.tasksService.getTasksWithFilters(filterDto);
    //     } else {
    //         return this.tasksService.getAllTasks();
    //     }
    // }

    @Get(':id') // provided id url path
    getTaskById(@Param('id', ParseIntPipe) id : number): Promise<Task> {
        return this.tasksService.getTaskById(id);
    }

    
    // @Post() // provided a decorator for POST method
    // @UsePipes(ValidationPipe)
    // createTask(@Body() createTaskDto : CreateTaskDto): Task {
    //     return this.tasksService.createTask(createTaskDto);
    // }

    // @Delete(':id') // provided id url path to delete
    // deleteTaskById(@Param('id') id: string): void {
    //     this.tasksService.deleteTaskById(id);
    // }

    // @Patch(':id/status') // provided id url to update state of ID
    // updateTaskStatus(
    //     @Param('id') id: string,
    //     @Body('status', TaskStatusValidationPipe) status: TaskStatus,
    // ): Task {
    //     return this.tasksService.updateTaskStatus(id, status);
    // }
       
    
}      




