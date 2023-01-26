import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository, UpdateResult } from 'typeorm';
import { TodoItemDTO } from './dto/todo.dto';
import { TodoEntity } from './entities/todo.entity';
import { TodoItemInputDTO } from './input/todo.input';

export interface TodoQueryService {
  createOne(todoInput: TodoItemInputDTO): Promise<TodoEntity>;
  findAll(): Promise<TodoEntity[]>;
  findOne(id: string): Promise<TodoEntity>;
  updateOne(id: string, item: DeepPartial<TodoItemDTO>): Promise<UpdateResult>;
}

@Injectable()
export class TodoService implements TodoQueryService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}

  async createOne(todoInput: TodoItemInputDTO): Promise<TodoEntity> {
    return this.todoRepository.save(todoInput);
  }

  findAll(): Promise<TodoEntity[]> {
    return this.todoRepository.find();
  }

  findOne(id: string): Promise<TodoEntity> {
    return this.todoRepository.findOne(id);
  }

  updateOne(id: string, item: DeepPartial<TodoItemDTO>): Promise<UpdateResult> {
    return this.todoRepository.update(id, item);
  }

  remove(id: string) {
    return this.todoRepository.delete(id);
  }
}
