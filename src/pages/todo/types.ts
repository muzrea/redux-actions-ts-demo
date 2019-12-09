export const ADD_TODO = 'ADD';
export const REQUEST_TODO_LIST = 'REQUEST_TODO_LIST';
export const REQUEST_TODO_LIST_COMPLETED = 'REQUEST_TODO_LIST_COMPLETED';

export interface Todo {
  id: number;
  text: string;
}

export interface AddTodoActionType {
  type: typeof ADD_TODO;
  payload: Todo;
}

export interface RequestTodoListCompleteType {
  type: typeof REQUEST_TODO_LIST_COMPLETED;
  payload: TodoState;
}

export type TodoState = Todo[];
export type TodoPayload = Todo | TodoState | null;
