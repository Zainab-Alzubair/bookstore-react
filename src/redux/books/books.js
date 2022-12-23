// Books data
const books = [
  { title: 'Coding Interview', author: 'Clive Cussler', id: 1 },
  { title: 'System Design', author: 'Debbie Macomber', id: 2 },
  { title: 'Data Structure', author: 'Patricia Cornwell', id: 3 },
];

// Actions
const ADD_BOOK = 'books/books/ADD_BOOK';
const REMOVE_BOOK = 'books/books/REMOVE_BOOK';

// Action Creators
export const addBook = (data) => (dispatch) => {
  dispatch({ type: ADD_BOOK, payload: data });
};

export const removeBook = (id) => (dispatch) => {
  dispatch({ type: REMOVE_BOOK, payload: id });
};

// Reducer
const booksReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return [...state, action.payload];
    }
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
