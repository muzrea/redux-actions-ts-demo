import { call, put, takeEvery } from 'redux-saga/effects';

import { requestCompleted } from './actions';
import Api from './api';
import { REQUEST_TODO_LIST  } from './types';

export function* requestTodoList() {
  const remoteTodoList = yield call(Api.queryTodoList);
  yield put(requestCompleted(remoteTodoList));
}

export function* watchRequestTodoList() {
  yield takeEvery(
    REQUEST_TODO_LIST,
    requestTodoList,
  );
}
