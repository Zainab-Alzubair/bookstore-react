import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import NavBar from './components/NavBar.js';
import Categories from './components/Categories';

const App = () => (
  <div>
    <NavBar />
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>

  </div>
);

export default App;
