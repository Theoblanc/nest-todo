import { Test } from '@nestjs/testing';
import { TodoEntity } from './entities/todo.entity';
import { TodoResolver } from './todo.resolver';
import { TodoQueryService, TodoService } from './todo.service';

describe('TodoResolver', () => {
  let todoResolver: TodoResolver;
  let todoService: TodoQueryService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TodoResolver,
        {
          provide: TodoService,
          useValue: {
            findAll: jest.fn(),
            findOne: jest.fn(),
            createOne: jest.fn(),
            updateOne: jest.fn(),
          },
        },
      ],
    }).compile();

    todoResolver = module.get<TodoResolver>(TodoResolver);
    todoService = module.get<TodoService>(TodoService);
  });

  describe('getTodos', () => {
    it('should return an array of todo items', async () => {
      const todos: TodoEntity[] = [
        {
          id: 1,
          title: 'Todo 1',
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: 'Todo 2',
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      jest.spyOn(todoService, 'findAll').mockResolvedValue(todos);
      expect(await todoResolver.getTodos()).toEqual(todos);
    });
  });
});
