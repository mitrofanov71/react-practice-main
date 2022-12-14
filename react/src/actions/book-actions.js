export const FETCH_BOOK_ACTION_NAME = 'FETCH_BOOKS'
export const CREATE_BOOK_ACTION_NAME = 'CREATE_BOOK'
export const REMOVE_BOOK_ACTION_NAME = 'REMOVE_BOOK'
export const FETCH_BOOKS_FULFILLED_ACTION_NAME = 'FETCH_BOOKS_FULFILLED'
export const CREATE_BOOKS_FULFILLED_ACTION_NAME = 'CREATE_BOOK_FULFILLED'

export const fetchBooksActionCreator = () => {
    return {type: FETCH_BOOK_ACTION_NAME}
}

export const createBookActionCreator = (book) => {
    return {type: CREATE_BOOK_ACTION_NAME, payload: book}
}

export const removeBookActionCreator = (id) => {
    return {type: REMOVE_BOOK_ACTION_NAME, payload: id}
}
