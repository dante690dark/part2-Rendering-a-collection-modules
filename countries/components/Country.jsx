import React from 'react';

const Filter = ({ search, handleChange }) => {
  return (
    <>
      filter shown with
      <input type='text' onChange={handleChange('search')} value={search} />
    </>
  );
};

export default Filter;
