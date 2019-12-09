import { all, call } from 'redux-saga/effects';

import { watchRequestTodoList } from './pages/todo/saga';

export default function* rootSaga() {
  yield all([
    call(watchRequestTodoList),
  ]);
}
