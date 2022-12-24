/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/books';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({
  title, author, id, category,
}) => {
  const dispatch = useDispatch();
  const percentage = 66;
  return (
    <div className="book-container">
      <div className="book">
        <div className="book-details">
          <h4 className="category">
            {category}
          </h4>
          <h2>
            {' '}
            {title}
          </h2>
          <p className="book-author">
            {' '}
            {author}
          </p>
        </div>
        <div>
          <button
            className="action-btn"
            type="button"
            onClick={() => dispatch(removeBook(id))}
          >
            Delete
          </button>
          <button type="button" className="action-btn">
            Comments
          </button>
          <button type="button" className="action-btn">
            Edit
          </button>
        </div>
      </div>
      <div className="progress-container">
        <CircularProgressbar value={percentage} />
        <div className="progress-stat">
          <p className="percent-complete">64%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="divider" />
      <div className="chapter-container">
        <div className="current-chapter-label">Current Chapter</div>
        <div className="chapter">Chapter 20</div>
        <button type="button" className="update-progress-button">
          Update Progress
        </button>
      </div>

    </div>
  );
};

export default Book;
