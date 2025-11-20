import React from "react";

const Person = ({ name, number, id, deleteName }) => {
  return (
    <div>
      {name} {number}
      <button onClick={() => deleteName({ id, name })} type="button">
        delete
      </button>
    </div>
  );
};

export default Person;
