import {useSelector} from "react-redux";
import {useState} from "react";

export function ReadBooksForm() {
    const [bookId, setBookId] = useState("")
    const books = useSelector(state => state.books)
    return (
        <select className="form-select" id="bookSelect"
                onChange={e=>setBookId(e.target.value)} data-testid='books-select'>
            <option value="">Choose a book</option>
            { books && books.map((el, i) =>
                <option key={i} value={el._id} data-testid='book-option'>{el.title} by {el.author}</option>)}
        </select>
    )
}