import { all, fork } from 'redux-saga/effects'
import { messageSaga } from './message.effects'


export default function* rootSaga() {
  yield all([
    fork(messageSaga)
  ]);
}
