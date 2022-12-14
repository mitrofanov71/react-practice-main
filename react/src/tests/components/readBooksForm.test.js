import {ReadBooksForm} from '../../components/Books/ReadBooksForm'
import {render, screen} from "@testing-library/react";
import {Provider} from "react-redux";
import {store} from "../../store";
import {booksMock} from "../mocks/mock";

jest.mock('../../store', () => {
    return {store: {getState: jest.fn(), dispatch: jest.fn(), subscribe: jest.fn()}}
})

describe('Test ReadBooksForm', () => {
    it('component is defined', () => {
        expect(ReadBooksForm).toBeDefined()
    })
    it('can select book from dropdown', () => {
        store.getState.mockReturnValue({ books: booksMock.data, selections: { data: [] }, blockBookForDelete: null})
         render(<Provider store={store}>
             <ReadBooksForm/>
         </Provider>)
        const booksSelect = screen.getByTestId('books-select')
        expect(booksSelect).toBeInTheDocument()
        const bookOptions = screen.getAllByTestId('book-option')
        expect(bookOptions.length).toBe(booksMock.data.length)
    })
})