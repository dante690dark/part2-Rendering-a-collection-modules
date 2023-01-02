import React from "react";

const List = ({ listNames, handleDelete }) => {
  // TODO: add state for change the button's color

  return (
    <>
      {listNames.map(({ name, number, id }) => (
        <li key={id}>
          {name} {number}{" "}
          <button onClick={() => handleDelete(id)}>delete</button>
        </li>
      ))}
    </>
  );
};

export default List;
