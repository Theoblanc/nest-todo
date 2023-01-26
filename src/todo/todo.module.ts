import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TodoEntity } from './entities/todo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoResolver } from './todo.resolver';
import { TodoItemQuery } from './types';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  controllers: [TodoController],
  providers: [
    {
      provide: TodoItemQuery,
      useClass: TodoService,
    },
    TodoResolver,
  ],
})
export class TodoModule {}
