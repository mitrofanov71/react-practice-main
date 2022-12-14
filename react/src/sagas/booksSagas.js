import {call, put, takeEvery,select, take, delay} from 'redux-saga/effects'
import SERVER from "../actions/server"
import {
    CREATE_BOOK_ACTION_NAME,
    FETCH_BOOK_ACTION_NAME,
    FETCH_BOOKS_FULFILLED_ACTION_NAME,
    REMOVE_BOOK_ACTION_NAME
} from "../actions/book-actions";
import {showError} from "../actions/error-actions";
import {REMOVE_BLOCK_BOOK_FOR_DELETE_ACTION_NAME} from "../actions/selection-actions";

export function* fetchBooks() {
    try {
        const res = yield call(SERVER.get, '/books')
        const books = res.data;
        yield put({type: FETCH_BOOKS_FULFILLED_ACTION_NAME, payload: {books}})
    } catch (e) {
        yield put(showError(e))
    }
}

export function* createBook(action) {
    try {
        yield call(SERVER.post, '/books', action.payload);
        yield call(fetchBooks)
    } catch (e) {
        yield put(showError(e))
    }
}
// Пример как можно поставить сагу на паузу и подождать выполнение другой через action
export function* removeBookWithPause(action) {
    try {
        const blockedBook = yield select((state) => state.blockBookForDelete)
        if (blockedBook == action.payload) yield put(showError('книга добавляется в подборку, подождите!'))
        yield take(REMOVE_BLOCK_BOOK_FOR_DELETE_ACTION_NAME);
        yield call(SERVER.delete, `/books/${action.payload}`);
        yield call(fetchBooks)
    } catch (e) {
        yield put(showError(e))
    }
}

export function* removeBook(action) {
    try {
        console.log('запустили удаление', action)
        // yield delay(12000);
        yield call(SERVER.delete, `/books/${action.payload}`);
        yield call(fetchBooks)
        console.log('завершили удаление')
    } catch (e) {
        yield put(showError(e))
    }
}

export function* booksSaga() {
    yield takeEvery(FETCH_BOOK_ACTION_NAME, fetchBooks)
    yield takeEvery(CREATE_BOOK_ACTION_NAME, createBook)
    yield takeEvery(REMOVE_BOOK_ACTION_NAME, removeBook)
}