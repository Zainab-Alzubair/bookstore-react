import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HiOutlineBookOpen } from 'react-icons/hi';
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
    <div className="book-list">
      <div className="header-wrap">
        <div className="header">
          <h1 className="headline">
            <HiOutlineBookOpen />
            {' '}
            Books Library
            {' '}
            <HiOutlineBookOpen />
            {' '}
          </h1>
        </div>
      </div>
      {Object.keys(books).map((id) => (
        <Book
          key={id}
          id={id}
          title={books[id][0].title}
          author={books[id][0].author}
          category={books[id][0].category}
        />
      ))}
      <AddBook />
    </div>
  );
};

export default BookList;
