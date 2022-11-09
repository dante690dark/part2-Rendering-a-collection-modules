import React from "react";
import List from "./List";

const Persons = ({ filterNames, persons, state }) => {
  return (
    <>
      {state ? <List listNames={filterNames} /> : <List listNames={persons} />}
    </>
  );
};

export default Persons;
