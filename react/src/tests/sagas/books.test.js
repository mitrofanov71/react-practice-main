import {call, put} from 'redux-saga/effects'
import {fetchBooks} from "../../sagas/booksSagas";
import SERVER from "../../actions/server";
import {booksMock} from "../mocks/mock";

describe('Test books sagas', () => {
    it('tests fetchBooks', () => {
        const iterator = fetchBooks();
        expect(JSON.stringify(iterator.next().value)).toEqual(JSON.stringify(call(SERVER.get, '/books')))
        expect(JSON.stringify(iterator.next(booksMock).value)).toEqual(JSON.stringify(put({ type: "FETCH_BOOKS_FULFILLED", payload: {books: booksMock.data}})))
    })
})