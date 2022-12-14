import {reducer} from "../../reducers/reducer";
import {booksMock} from "../mocks/mock";

describe('Test reduser', () => {
    it('test FETCH_BOOKS_FULFILLED', () => {
        expect(reducer(undefined, {type: 'FETCH_BOOKS_FULFILLED', payload: {books: booksMock.data}})).toEqual({
            books: booksMock.data,
            selections: { data: [] },
            blockBookForDelete: null
        })
    })
})