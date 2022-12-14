import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Accordion } from 'react-bootstrap';

import Selection from './components/Selections/Selection';
import AddBookToSelectionForm from './components/Selections/AddBookToSelectionForm';
import CreateSelectionForm from './components/Selections/CreateSelectionForm'
import ErrorModal from "./components/Errors/ErrorModal"
import CreateBookForm from "./components/Books/CreateBookForm";
import Books from "./components/Books/Books";

import {fetchBooksActionCreator} from "./actions/book-actions";

import './App.css';
import {fetchSelectionsActionCreator} from "./actions/selection-actions";

function App() {
  const selections = useSelector(state => state.selections)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchBooksActionCreator())
    dispatch(fetchSelectionsActionCreator())
  }, [])

  return (
    <>
    <div className="wrapper books_wrapper">
      <h2 className="page_title">Books</h2>
      <CreateBookForm />
      <Books/>
    </div>
    <div className="wrapper selections_wrapper">
      <h2 className="page_title">Selections</h2>
      <CreateSelectionForm />
      <AddBookToSelectionForm />
      { selections?.data?.length > 0 && (
        <Accordion>
          {selections.data.map((el,i) => {
            return <Selection key={i} item={el} itemKey={i} />
          })}
        </Accordion>
      )}
    </div>
    <ErrorModal />
    </>
  );
}

export default App;
