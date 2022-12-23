/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="book">
        <h2>
          {' '}
          title:
          {title}
        </h2>
        <p>
          {' '}
          author:
          {author}
        </p>
        <h4>
          category:
          {category}
        </h4>
        <div>
          <button
            type="button"
            onClick={() => dispatch(removeBook(id))}
          >
            Delete
          </button>
          <button type="button">
            Comments
          </button>
          <button type="button">
            Edit
          </button>
        </div>
      </div>

    </div>
  );
};

export default Book;
