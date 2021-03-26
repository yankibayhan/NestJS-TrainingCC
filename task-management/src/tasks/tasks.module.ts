import { AuthModule } from './../auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskRepository]),
    AuthModule,
  ],
  controllers: [TasksController],
  providers: [TasksService],
  
})
export class TasksModule {}
