import React from "react";
import List from "./List";

const Persons = ({ filterNames, persons, state, handleDelete }) => {
  return (
    <>
      {state ? (
        <List listNames={filterNames} handleDelete={handleDelete} />
      ) : (
        <List listNames={persons} handleDelete={handleDelete} />
      )}
    </>
  );
};

export default Persons;
