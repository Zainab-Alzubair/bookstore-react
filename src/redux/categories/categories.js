import { IoIosConstruct } from 'react-icons/io';

const STATUS_CHECKER = 'booklist/books/STATUS_CHECKER';

const categories = [];

const categoriesReducer = (state = categories, action) => {
  switch (action.type) {
    case STATUS_CHECKER:
      return (
        <h3>
          <IoIosConstruct />
          {' '}
          Under construction
          {' '}
          <IoIosConstruct />
        </h3>
      );
    default:
      return state;
  }
};

export const statusCheck = () => ({
  type: STATUS_CHECKER,
});

export default categoriesReducer;
