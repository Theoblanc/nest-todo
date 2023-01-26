import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoEntity } from './entities/todo.entity';
import { TodoItemInputDTO } from './input/todo.input';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let todoService: TodoService;
  let todoRepository: Repository<TodoEntity>;

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

    todoService = module.get<TodoService>(TodoService);
    todoRepository = module.get<Repository<TodoEntity>>(
      getRepositoryToken(TodoEntity),
    );
  });

  describe('createOne', () => {
    it('should create a todo item', async () => {
      const todoInput: TodoItemInputDTO = {
        title: 'Test todo',
        completed: false,
      };
      const todoEntity = new TodoEntity();
      todoEntity.title = todoInput.title;
      todoEntity.completed = todoInput.completed;

      jest.spyOn(todoRepository, 'save').mockResolvedValue(todoEntity);

      expect(await todoService.createOne(todoInput)).toEqual(todoEntity);
    });
  });

  describe('findOne', () => {
    it('should return a todo item', async () => {
      const todoEntity = new TodoEntity();

      jest.spyOn(todoRepository, 'findOne').mockResolvedValue(todoEntity);

      expect(await todoService.findOne('1')).toEqual(todoEntity);
    });
  });

  describe('findAll', () => {
    it('should return all todo item', async () => {
      const todoEntities = [
        new TodoEntity(),
        new TodoEntity(),
        new TodoEntity(),
      ];

      jest.spyOn(todoRepository, 'find').mockResolvedValue(todoEntities);
      expect(await todoService.findAll()).toEqual(todoEntities);
    });
  });
});
