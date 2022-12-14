import {
  CREATE_BOOK_ACTION_NAME,
  CREATE_BOOKS_FULFILLED_ACTION_NAME,
  FETCH_BOOKS_FULFILLED_ACTION_NAME
} from "../actions/book-actions";
import {HIDE_ERROR_ACTION_NAME, SHOW_ERROR_ACTION_NAME} from "../actions/error-actions";
import {
  BLOCK_BOOK_FOR_DELETE_ACTION_NAME,
  CREATE_SELECTION_ACTION_NAME, CREATE_SELECTION_FULFILLED_ACTION_NAME,
  FETCH_SELECTIONS_FULFILLED_ACTION_NAME, REMOVE_BLOCK_BOOK_FOR_DELETE_ACTION_NAME,
  REMOVE_BOOK_FROM_SELECTION_ACTION_NAME
} from "../actions/selection-actions";

export const reducer = (state = { books: [], selections: { data: [] }, blockBookForDelete: null }, action) => {
  switch (action.type) {
    case FETCH_SELECTIONS_FULFILLED_ACTION_NAME:
      return {
        ...state,
        selections: {
          ...state.selections,
          data: action.payload
        },
      }
    case FETCH_BOOKS_FULFILLED_ACTION_NAME:
      return {
        ...state,
        books: [
          ...action.payload.books
        ]
      }
    case REMOVE_BOOK_FROM_SELECTION_ACTION_NAME:
      return {
        ...state,
        book: {
          selectionId: action.payload.selectionId, 
          bookId: action.payload.bookId
        }
      }
    case CREATE_SELECTION_ACTION_NAME:
      return {
        ...state,
        selections: {
          ...state.selections,
          ...action.payload,
        }
      }
    case CREATE_BOOK_ACTION_NAME:
      return {
        ...state,
      }
    case CREATE_SELECTION_FULFILLED_ACTION_NAME:
      return {
        ...state,
        selections: {
          ...state.selections,
          isPending: false,
          newSelection: null
        }
      }
    case CREATE_BOOKS_FULFILLED_ACTION_NAME:
      return {
        ...state,
        selections: {
          ...state.selections,
          isPending: false,
          newSelection: null
        }
      }
    case HIDE_ERROR_ACTION_NAME:
      return {
        ...state,
        modal: {
          ...state.modal,
          isShow: false
        }
      }

    case SHOW_ERROR_ACTION_NAME:
      return {
        ...state,
        modal: {
          ...state.modal,
          message: action.payload.message,
          isShow: true
        }
      }
    case BLOCK_BOOK_FOR_DELETE_ACTION_NAME:
      return {
        ...state,
        blockBookForDelete: action.payload
      }
    case REMOVE_BLOCK_BOOK_FOR_DELETE_ACTION_NAME:
      return {
        ...state,
        blockBookForDelete: null
      }
    default:
      return state
  }
}