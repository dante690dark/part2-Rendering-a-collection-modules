import React, { useState } from "react";

const Person = ({ person, deleteName }) => {
  const [click, setClick] = useState(false);
  const { name, number, id } = person;
  return (
    <div>
      {name} {number}
      <button
        className={click ? "bgBlue" : ""}
        onClick={() => {
          deleteName(id, name, setClick);
        }}
        type="button"
      >
        delete
      </button>
    </div>
  );
};

export default Person;
