import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDTO } from './dto/create-todo.dto';
import { TodoEntity } from './entities/todo.entity';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;
  let repository: Repository<TodoEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoController],
      providers: [
        TodoService,
        {
          provide: getRepositoryToken(TodoEntity),
          useValue: {
            save: jest.fn().mockResolvedValue(new TodoEntity()),
            find: jest.fn().mockResolvedValue([]),
            findOne: jest.fn().mockResolvedValue(null),
            update: jest.fn().mockResolvedValue({ affected: 0 }),
            delete: jest.fn().mockResolvedValue({ affected: 0 }),
          },
        },
      ],
    }).compile();

    service = module.get<TodoService>(TodoService);
    repository = module.get<Repository<TodoEntity>>(
      getRepositoryToken(TodoEntity),
    );
  });

  describe('create()', () => {
    it('should create a new TodoEntity', async () => {
      const createTodoDto = new CreateTodoDTO();
      const todo = await service.create(createTodoDto);

      expect(todo).toBeInstanceOf(TodoEntity);
      expect(repository.save).toHaveBeenCalledWith(createTodoDto);
    });
  });
});
