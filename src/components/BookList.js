import React from 'react';
import '../App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Categories from '../pages/Categories';
import Form from './Form';
import Book from './Book';

// eslint-disable-next-line react/prefer-stateless-function
class BookList extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      books: [
        {
          id: '1',
          title: 'Book 1',
          author: 'author 1',
        },
        {
          id: '2',
          title: 'Book 2',
          author: 'author 2',
        },
        {
          id: '3',
          title: 'Book 3',
          author: 'author 3',
        },
      ],
    };
  }

  render() {
    const { books } = this.state;
    return (
      <>
        <div className="nav-bar">
          <h1 className="about__list">
            Book Store
          </h1>
          <Navbar />
        </div>
        <Routes>
          <Route
            exact
            path="/"
            element={(
              <>
                <ul className="books-list">
                  <li className="book-item">
                    {books.map((book) => (
                      <Book key={book.id} id={book.id} title={book.title} author={book.author} />
                    ))}
                  </li>
                </ul>

                <Form />
              </>
 )}
          />
          <Route path="/categories" element={<Categories />} />
        </Routes>

      </>

    );
  }
}
export default BookList;
