export const addBook = (book = {}) => ({
  type: 'NEW_BOOK_ADDED',
  payload: book,
});

export const removeBook = (bookId) => ({
  type: 'BOOK_REMOVED',
  payload: bookId,
});

const bookReducer = (state = [], { action, payload }) => {
  switch (action.type) {
    case 'NEW_BOOK_ADDED':
      return {
        ...state,
        books: [...state.books, payload],
      };
    case 'BOOK_REMOVED':
      return {
        ...state,
        books: state.books.filter((book) => book.id !== payload),
      };

    default:
      return state;
  }
};

export default bookReducer;
