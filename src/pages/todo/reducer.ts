import { handleActions } from 'redux-actions';

import {
  ADD_TODO,
  REQUEST_TODO_LIST_COMPLETED,
  Todo,
  TodoPayload,
  TodoState,
} from './types';

const initState: TodoState = [];

const reducer = handleActions<TodoState, TodoPayload>({
  [ADD_TODO]: (state, action) => ([...state, action.payload as Todo]),
  [REQUEST_TODO_LIST_COMPLETED]: (state, action) => ([...state, ...(action.payload as TodoState)]),
}, initState);

export default reducer;
