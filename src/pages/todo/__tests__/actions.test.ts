import { addTodo, requestCompleted, requestTodoList } from '../actions';
import * as types from '../types';

describe('todo actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Todo';
    expect(addTodo(text).payload.text).toEqual('Todo');
    expect(addTodo(text).type).toEqual(types.ADD_TODO);
  });

  it('should create an action to request to do list', () => {
    const expectedAction = {
      type: types.REQUEST_TODO_LIST,
      payload: null,
    };
    expect(requestTodoList()).toEqual(expectedAction);
  });

  it('should create an action to trigger list request completed', () => {
    const expectedAction = {
      type: types.REQUEST_TODO_LIST_COMPLETED,
      payload: [],
    };
    expect(requestCompleted([])).toEqual(expectedAction);
  });
});
