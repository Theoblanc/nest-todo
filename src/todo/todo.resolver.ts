import { Query, Resolver } from '@nestjs/graphql';
import { Todo } from './model/todo.model';
import { TodoService } from './todo.service';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private todoService: TodoService) {}

  @Query(() => Todo)
  async todo() {
    return this.todoService.findOne('123');
  }
}
