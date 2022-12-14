export const FETCH_SELECTIONS_ACTION_NAME = 'FETCH_SELECTIONS'
export const FETCH_SELECTIONS_FULFILLED_ACTION_NAME = 'FETCH_SELECTIONS_FULFILLED'
export const ADD_BOOK_TO_SELECTION_ACTION_NAME = 'ADD_BOOK_TO_SELECTION'
export const CREATE_SELECTION_ACTION_NAME = 'CREATE_SELECTION'
export const CREATE_SELECTION_FULFILLED_ACTION_NAME = 'CREATE_SELECTION_FULFILLED'
export const REMOVE_SELECTION_ACTION_NAME = 'REMOVE_SELECTION'
export const REMOVE_BOOK_FROM_SELECTION_ACTION_NAME = 'REMOVE_BOOK_FROM_SELECTION'
export const BLOCK_BOOK_FOR_DELETE_ACTION_NAME = 'BLOCK_BOOK_FOR_DELETE'
export const REMOVE_BLOCK_BOOK_FOR_DELETE_ACTION_NAME = 'REMOVE_BLOCK_BOOK_FOR_DELETE'

export const fetchSelectionsActionCreator = () => {
    return {type: FETCH_SELECTIONS_ACTION_NAME}
}

export const addBookToSelectionActionCreator = (bookId, selectionId) => {
    return {type: ADD_BOOK_TO_SELECTION_ACTION_NAME, payload: {bookId, selectionId}}
}

export const createSelectionActionCreator = (selection) => {
    return {type: CREATE_SELECTION_ACTION_NAME, payload: selection}
}

export const removeSelectionActionCreator = (selectionId) => {
    return {type: REMOVE_SELECTION_ACTION_NAME, payload: selectionId}
}

export const removeBookFromSelectionActionCreator = (bookId, selectionId) => {
    return {type: REMOVE_BOOK_FROM_SELECTION_ACTION_NAME, payload: {bookId, selectionId}}
}

export const blockBookForDelete = (bookId) => {
    return {type: BLOCK_BOOK_FOR_DELETE_ACTION_NAME, payload: bookId}
}

export const removeBlockBookForDelete = (bookId) => {
    return {type: REMOVE_BLOCK_BOOK_FOR_DELETE_ACTION_NAME, payload: bookId}
}

