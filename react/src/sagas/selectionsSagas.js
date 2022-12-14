import {call, put, takeEvery, take, cancel, delay, race, fork} from 'redux-saga/effects'
import SERVER from "../actions/server"
import {
    ADD_BOOK_TO_SELECTION_ACTION_NAME,
    blockBookForDelete,
    CREATE_SELECTION_ACTION_NAME,
    FETCH_SELECTIONS_ACTION_NAME,
    FETCH_SELECTIONS_FULFILLED_ACTION_NAME,
    REMOVE_BOOK_FROM_SELECTION_ACTION_NAME,
    REMOVE_SELECTION_ACTION_NAME,
    removeBlockBookForDelete
} from "../actions/selection-actions";
import {showError} from "../actions/error-actions";
import {fetchBooks, removeBook} from "./booksSagas";
import {REMOVE_BOOK_ACTION_NAME} from "../actions/book-actions";

export function* fetchSelections() {
    try {
        const res = yield call(SERVER.get, '/selections')
        const selections = res.data;
        yield put({type: FETCH_SELECTIONS_FULFILLED_ACTION_NAME, payload: selections})
    } catch (e) {
        yield put(showError(e))
    }
}

export function* addBookToSelection(action) {
    try {
        console.log('запустили добавление', action)
        // yield delay(10000);
        yield put(blockBookForDelete(action.payload.bookId));
        yield call(SERVER.post, `/selections/${action.payload.selectionId}/books`, [action.payload.bookId]);
        yield call(fetchSelections);
        yield put(removeBlockBookForDelete(action.payload.bookId));
        console.log('закончили добавление', action)
    } catch (e) {
        yield put(showError(e))
    }
}

export function* createSelection(action) {
    try {
        yield call(SERVER.post, "/selections", action.payload);
        yield call(fetchSelections);
    } catch (e) {
        yield put(showError(e))
    }
}

export function* removeSelection(action) {
    try {
        yield call(SERVER.delete, `/selections/${action.payload}`)
        yield call(fetchSelections)
    } catch (e) {
        yield put(showError(e))
    }
}

export function* removeBookFromSelection(action) {
    try {
        yield call(SERVER.delete, `/selections/${action.payload.selectionId}/books/${action.payload.bookId}`)
        yield call(fetchSelections)
    } catch (e) {
        yield put(showError(e))
    }
}

export function* watchDeleteBookSaga(action) {
    console.log('зашли в наблюдатель добавление', action)
    const addBookToSelectionSaga = yield fork(addBookToSelection, action);
    yield take(REMOVE_BOOK_ACTION_NAME)
    console.log('получили экшн на удаление', action)
    yield cancel(addBookToSelectionSaga)
    console.log('отменили добавление', action)
    console.log('запустили гонку', action)
    const result = yield race({
        add: call(addBookToSelection,action),
        remove: call(removeBook,{payload: action.payload.bookId})
    })
    console.log('закончили гонку', result)

}

export function* selectionsSaga() {
    yield takeEvery(FETCH_SELECTIONS_ACTION_NAME, fetchSelections)
    yield takeEvery(ADD_BOOK_TO_SELECTION_ACTION_NAME, watchDeleteBookSaga)
    yield takeEvery(CREATE_SELECTION_ACTION_NAME, createSelection)
    yield takeEvery(REMOVE_SELECTION_ACTION_NAME, removeSelection)
    yield takeEvery(REMOVE_BOOK_FROM_SELECTION_ACTION_NAME, removeBookFromSelection)
}