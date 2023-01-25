import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoEntity } from './entities/todo.entity';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreateTodoDTO } from './dto/create-todo.dto';
import { TodoItemDTO } from './dto/todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  async create(@Body() createTodoDto: CreateTodoDTO): Promise<TodoItemDTO> {
    return this.covertToDTO(await this.todoService.createOne(createTodoDto));
  }

  @Get()
  findAll(): Promise<TodoEntity[]> {
    return this.todoService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string): Promise<TodoItemDTO> {
  //   return this.todoService.findOne(id);
  // }

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateTodoDto: UpdateTodoDto,
  // ): Promise<UpdateResult> {
  //   return this.todoService.update(id, updateTodoDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoService.remove(id);
  }

  covertToDTO(entity: TodoEntity): TodoItemDTO {
    const todo = new TodoItemDTO();
    todo.id = entity.id;
    todo.title = entity.title;
    todo.completed = entity.completed;
    return todo;
  }
}
