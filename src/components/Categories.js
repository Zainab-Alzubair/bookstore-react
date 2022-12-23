import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checksStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  const handleOnclick = () => {
    dispatch(checksStatus());
  };

  const status = useSelector((state) => state.categories);

  return (
    <div className="categories">
      <p>{status}</p>
      <button className="status-btn" type="button" onClick={handleOnclick}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;
