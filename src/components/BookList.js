import React from 'react';
import '../App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Categories from '../pages/Categories';
import Form from './Form';

// eslint-disable-next-line react/prefer-stateless-function
const BookList = () => (
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
          <Form />
 )}
      />
      <Route path="/categories" element={<Categories />} />
    </Routes>

  </>
);

export default BookList;
