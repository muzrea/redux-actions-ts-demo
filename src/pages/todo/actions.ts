import { createActions } from 'redux-actions';

import { identity } from 'src/utils';
import { CommonAction } from '../types';
import {
  ADD_TODO,
  REQUEST_TODO_LIST,
  REQUEST_TODO_LIST_COMPLETED,
  Todo,
  TodoPayload,
} from './types';

const { add, requestTodoList, requestTodoListCompleted } = createActions<TodoPayload>(
  {
    [ADD_TODO]: (text: string) => ({ text, id: Date.now() }),
    [REQUEST_TODO_LIST]: identity,
    [REQUEST_TODO_LIST_COMPLETED]: (remoteTodoList: Todo[]) => remoteTodoList,
  },
);

export const requestCompleted = requestTodoListCompleted;
export const addTodo = add as CommonAction<Todo>;
export {
  requestTodoList,
};
