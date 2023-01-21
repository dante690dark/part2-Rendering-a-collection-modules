import React from "react";
import List from "./List";

const Persons = ({ filterPersons, persons, hasFiltered, handleDelete }) => {
  return (
    <>
      {hasFiltered ? (
        <List listNames={filterPersons} handleDelete={handleDelete} />
      ) : (
        <List listNames={persons} handleDelete={handleDelete} />
      )}
    </>
  );
};

export default Persons;
