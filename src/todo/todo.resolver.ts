import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TodoItemDTO } from './dto/todo.dto';
import { TodoItemInputDTO } from './input/todo.input';
import { TodoService } from './todo.service';

@Resolver(() => TodoItemDTO)
export class TodoResolver {
  constructor(private todoService: TodoService) {}

  @Query(() => TodoItemDTO)
  async getTodos() {
    return this.todoService.findAll();
  }
  // async todos(
  //   @Args() query: QueryType<TodoItemQuery>,
  // ): Promise<ConnectionType<TodoItemDTO>> {
  //   const filter = {
  //     ...query.filter,
  //     ...{ completed: { is: true } },
  //   };
  // }

  // @Query(() => Todo)
  // async todo(id: string, option: Filter<TodoItemDTO>) {
  //   return this.todoService.findOne(id, option);
  // }

  @Mutation(() => TodoItemDTO)
  async crate(@Args('input') input: TodoItemInputDTO) {
    return this.todoService.createOne(input);
  }
}
