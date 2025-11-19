import React from "react";

const Person = ({ name, number }) => {
  return (
    <div>
      {name} {number}
      <button type="button">delete</button>
    </div>
  );
};

export default Person;
