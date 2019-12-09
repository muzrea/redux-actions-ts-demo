import { AppState } from 'src/reducer';
import { Todo } from './types';

export const selectTodos = (state: AppState): Todo[] => state.todo;
