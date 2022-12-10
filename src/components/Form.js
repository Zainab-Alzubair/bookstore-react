import React from 'react';

const Form = () => (
  <div className="formtWrap">
    <h2>Add a new Book</h2>
    <form className="form">
      <input type="text" id="title" name="title" placeholder="Book Title" />
      <input type="text" id="author" name="author" placeholder="Author" />
      <button type="button" id="submit" name="submit">Add Book</button>
    </form>
  </div>
);
export default Form;
