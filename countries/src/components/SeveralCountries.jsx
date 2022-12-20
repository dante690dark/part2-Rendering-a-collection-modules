import React from "react";
import "./countries.css";

const SeveralCountries = ({ filterCountries, setFilterCountries }) => {
  return (
    <>
      {filterCountries.map((country) => (
        <li key={country.name.common}>
          {country.name.common}
          <button
            onClick={() => {
              setFilterCountries([country]);
            }}
          >
            show
          </button>
        </li>
      ))}
    </>
  );
};

export default SeveralCountries;
