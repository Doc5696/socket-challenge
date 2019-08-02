import { all, takeEvery } from 'redux-saga/effects'
import * as types from '../actions/types'

export function* GetNewMessages() {

}

export function* messageSaga() {
  yield all([
    takeEvery(types.GET_MESSAGES, GetNewMessages),
  ]);
}
