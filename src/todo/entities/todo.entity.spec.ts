import { BaseModel } from 'src/commons/model/base.model';
import { TodoEntity } from './todo.entity';

describe('TodoEntity', () => {
  it('should create an instance of TodoEntity', () => {
    const todo = new TodoEntity();
    expect(todo).toBeInstanceOf(TodoEntity);
  });

  it('should set title and completed properties', () => {
    const todo = new TodoEntity();
    todo.title = 'Test Todo';
    todo.completed = true;

    expect(todo.title).toBe('Test Todo');
    expect(todo.completed).toBe(true);
  });

  it('should extend BaseModel', () => {
    const todo = new TodoEntity();
    expect(todo).toBeInstanceOf(BaseModel);
  });
});
