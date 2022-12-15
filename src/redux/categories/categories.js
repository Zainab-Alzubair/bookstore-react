export const checkStatus = () => ({
  type: 'STATUS_CHECKED',
});

const categoriesReducer = (state = [], action) => {
  if (action.type === 'STATUS_CHECKED') {
    // return the new state
    return 'Under construction';
  }
  return state;
};

export default categoriesReducer;
