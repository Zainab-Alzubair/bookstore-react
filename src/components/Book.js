import React from 'react';
import { PropTypes } from 'prop-types';

class Book extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const { id, title, author } = this.props;
    return (
      <div className="book">
        <h3>{id}</h3>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <button className="remove-btn" type="button">Remove</button>
      </div>
    );
  }
}
Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
}.isRequired;
export default Book;
