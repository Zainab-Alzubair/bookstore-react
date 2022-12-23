import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';
import Book from './Book';

const BookList = () => {
  const booksList = useSelector((state) => state.books);
  return (
    <div>
      {booksList.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          id={book.id}

        />
      ))}
      <Form />
    </div>
  );
};

export default BookList;
