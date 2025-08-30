import React from 'react';
import Part from './Part';
import Total from './Total';

const Content = ({ parts }) => {
  return (
    <>
      <Part parts={parts} />
      <Total parts={parts} />
    </>
  );
};

export default Content;
