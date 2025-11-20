import React from "react";
import Person from "./Person";

const Persons = ({ search, persons, deleteName }) => {
  return (
    <ul>
      {search
        ? persons.reduce((arr, { name, number, id }) => {
            if (
              Object.values({ name, number }).some((text) =>
                text.toLowerCase().includes(search.toLowerCase())
              )
            )
              return [
                ...arr,
                <Person
                  key={name}
                  name={name}
                  number={number}
                  id={id}
                  deleteName={deleteName}
                />,
              ];

            return arr;
          }, [])
        : persons.map(({ name, number, id }) => (
            <Person
              key={name}
              name={name}
              number={number}
              id={id}
              deleteName={deleteName}
            />
          ))}
    </ul>
  );
};

export default Persons;
