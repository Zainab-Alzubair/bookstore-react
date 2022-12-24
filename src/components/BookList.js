import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { Route, Routes } from 'react-router-dom';
import AddBook from './AddBook';
import Book from './Book';
import { loadBooks } from '../redux/books/books';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);

  return (
   
        <div className='books-container'>
          <div className="book-list">
            
            {Object.keys(books).map((id) => (
              <Book
                key={id}
                id={id}
                title={books[id][0].title}
                author={books[id][0].author}
                category={books[id][0].category}
              />
            ))}
            <div class="horizontal-divider"></div>
            <AddBook />
          </div>
          </div>
  
   
  );
};

export default BookList;
