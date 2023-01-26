import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoItemDTO } from './dto/todo.dto';
import { TodoItemInputDTO } from './input/todo.input';
import { TodoQueryService } from './todo.service';

@Resolver(() => TodoItemDTO)
export class TodoResolver {
  constructor(
    @Inject('TodoQueryService')
    private todoService: TodoQueryService,
  ) {}

  @Query(() => [TodoItemDTO])
  async getTodos() {
    return this.todoService.findAll();
  }

  @Query(() => TodoItemDTO)
  async getTodo(id: string) {
    return this.todoService.findOne(id);
  }

  @Mutation(() => TodoItemDTO)
  async createTodo(@Args('input') input: TodoItemInputDTO) {
    return this.todoService.createOne(input);
  }

  @Mutation(() => TodoItemDTO)
  async updateTodo(
    @Args('id') id: string,
    @Args('input') input: TodoItemInputDTO,
  ) {
    return this.todoService.updateOne(id, input);
  }
}
