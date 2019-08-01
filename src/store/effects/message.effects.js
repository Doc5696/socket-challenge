import { all, put, takeEvery } from 'redux-saga/effects';
import { CreateMessage } from '../actions/message.action';
import * as types from '../actions/types';


export function* createNewMessage() {
  yield put(CreateMessage)
}

export function* messageSaga() {
  yield all([
    takeEvery(types.CREATE_MESSAGE, createNewMessage),
  ]);
}
