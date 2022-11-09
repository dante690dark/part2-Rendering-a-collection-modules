import React from "react";

const Filter = ({ handleFilter }) => {
  return (
    <>
      filter shown with: <input type="text" onChange={handleFilter} />
    </>
  );
};

export default Filter;
