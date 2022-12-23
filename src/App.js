import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import Navbar from './components/NavBar';
import Categories from './components/Categories';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>

  </div>
);

export default App;
