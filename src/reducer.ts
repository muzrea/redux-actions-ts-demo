import { combineReducers } from 'redux';

import todoReducer from './pages/todo/reducer';

export const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
