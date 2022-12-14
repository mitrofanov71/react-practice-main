import {all} from 'redux-saga/effects'
import {booksSaga} from "./booksSagas";
import {selectionsSaga} from "./selectionsSagas";
export function* rootSaga() {
    yield all([booksSaga(), selectionsSaga()])
}