import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusCheck } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <div className="categ-wrap">
      <div>
        <button
          className="categ-btn"
          type="button"
          onClick={() => {
            dispatch(statusCheck());
          }}
        >
          Check status
        </button>
        <h1 className="categ-text">
          {status}
          {' '}
        </h1>
      </div>
    </div>
  );
};

export default Categories;
