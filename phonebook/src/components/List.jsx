import React from "react";

const List = ({ listNames }) => {
  return (
    <>
      {listNames.map(({ name, number, id }) => (
        <li key={id}>
          {name} {number}
        </li>
      ))}
    </>
  );
};

export default List;
