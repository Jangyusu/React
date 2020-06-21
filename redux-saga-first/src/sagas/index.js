import { spawn, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { CALL_DATA, callDataFail, callDataSuccess } from '../actions';

function* fetchCallData() {
  const { data } = yield axios.get('http://localhost:4321');
  try {
    yield put(callDataSuccess(data));
  } catch (error) {
    yield put(callDataFail(data));
  }
}

function* watchCall() {
  yield takeEvery(CALL_DATA, fetchCallData);
}

export default function* root() {
  yield spawn(watchCall);
}
