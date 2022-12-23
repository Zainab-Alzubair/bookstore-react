import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Categories from './components/Categories';
import BookList from './components/BookList';
import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <NavBar />
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </Provider>
);

export default App;
