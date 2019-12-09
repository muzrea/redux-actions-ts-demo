import reducer from '../reducer';
import * as types from '../types';

describe('reducer', () => {
  let initState: types.TodoState;

  beforeEach(() => {
    initState = [{ id: 1, text: 'text' }];
  });

  it('should add todo successfully given init state when trigger add action', () => {
    const action: types.AddTodoActionType = {
      type: types.ADD_TODO,
      payload: { id: 2, text: 'text2' },
    };
    const expectedTodoList = [
      { id: 1, text: 'text' },
      { id: 2, text: 'text2' },
    ];
    expect(reducer(initState, action)).toEqual(expectedTodoList);
  });

  it('should request todo list successfully given init state when trigger request complete action', () => {
    const action: types.RequestTodoListCompleteType = {
      type: types.REQUEST_TODO_LIST_COMPLETED,
      payload: [{ id: 3, text: 'text3' }],
    };
    const expectedTodoList = [
      { id: 1, text: 'text' },
      { id: 3, text: 'text3' },
    ];
    expect(reducer(initState, action)).toEqual(expectedTodoList);
  });
});
