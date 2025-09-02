import React from 'react';
import Person from './Person';

const Persons = ({ search, persons }) => {
  return (
    <ul>
      {search
        ? persons.reduce((arr, { name, number }) => {
            if (
              Object.values({ name, number }).some((text) =>
                text.toLowerCase().includes(search.toLowerCase())
              )
            )
              return [
                ...arr,
                <Person key={name} name={name} number={number} />,
              ];

            return arr;
          }, [])
        : persons.map(({ name, number }) => (
            <Person key={name} name={name} number={number} />
          ))}
    </ul>
  );
};

export default Persons;
