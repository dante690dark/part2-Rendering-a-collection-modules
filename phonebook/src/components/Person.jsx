import React from "react";

const Person = ({ person, deleteName }) => {
  const { name, number, id } = person;
  return (
    <div>
      {name} {number}
      <button onClick={() => deleteName(id, name)} type="button">
        delete
      </button>
    </div>
  );
};

export default Person;
