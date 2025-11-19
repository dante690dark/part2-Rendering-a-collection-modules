import React from "react";

const Person = ({ name, number, handleChange }) => {
  return (
    <div>
      {name} {number}{" "}
      <button type="button" onChange={handleChange}>
        delete
      </button>
    </div>
  );
};

export default Person;
