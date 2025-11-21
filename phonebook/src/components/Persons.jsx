import React from "react";
import Person from "./Person";

const Persons = ({ search, persons, deleteName }) => {
  return (
    <ul>
      {search
        ? persons.reduce((arr, person) => {
            if (
              Object.values(person).some((text) =>
                text.toLowerCase().includes(search.toLowerCase())
              )
            )
              return [
                ...arr,
                <Person
                  key={person.name}
                  person={person}
                  deleteName={deleteName}
                />,
              ];

            return arr;
          }, [])
        : persons.map((person) => (
            <Person key={person.name} person={person} deleteName={deleteName} />
          ))}
    </ul>
  );
};

export default Persons;
