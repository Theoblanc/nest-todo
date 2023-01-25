import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository, UpdateResult } from 'typeorm';
import { TodoItemDTO } from './dto/todo.dto';
import { TodoEntity } from './entities/todo.entity';
import { TodoItemInputDTO } from './input/todo.input';

interface TodoQueryService {
  createOne(dto: TodoItemInputDTO): Promise<TodoEntity>;
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

  async createOne(createTodoDTO: TodoItemInputDTO): Promise<TodoEntity> {
    return this.todoRepository.save(createTodoDTO);
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
