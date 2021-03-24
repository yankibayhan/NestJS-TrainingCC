import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './task.model';
import { Injectable, NotFoundException} from '@nestjs/common';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    // Fork all the tasks
    getAllTasks(): Task[] {
        return this.tasks;
    }

    getTasksWithFilters(filterDto : GetTasksFilterDto): Task[] {
        const {status, search} = filterDto;
        let tasks = this.getAllTasks();
        if (status) {
            tasks = tasks.filter(task => task.status === status)
        }
        if (search) {
            tasks = tasks.filter(task =>
                task.title.includes(search) ||
                task.description.includes(search),
            );
        }
        return tasks;
    }

    // Get Task from its ID
    getTaskById(id : string): Task {
        const found = this.tasks.find(task => task.id === id);

        if (!found) {
            throw new NotFoundException(`Task with ${id} not found`);
        }
        return found;
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
        const found = this.getTaskById(id);
        this.tasks = this.tasks.filter(task => task.id !== found.id);
    }

    // Update Task Status
    updateTaskStatus(id : string, status : TaskStatus): Task {
        const task = this.getTaskById(id);
        task.status = status;
        return task;
    }
    
    
}
