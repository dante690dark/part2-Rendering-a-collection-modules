import React, { useState } from "react";
import OneCountry from "./OneCountry";
import "./countries.css";

const SeveralCountries = ({ filterCountries }) => {
  const [status, setStatus] = useState(false);
  const [showCountry, setShowCountry] = useState({});

  const handleClick = (country) => {
    setStatus(true);
    setShowCountry(country);
  };

  return (
    <>
      {filterCountries.map((country) => (
        <li key={country.name.common}>
          {country.name.common}
          <button onClick={() => handleClick(country)}>show</button>
        </li>
      ))}
      {status && <OneCountry filterCountry={showCountry} />}
    </>
  );
};

export default SeveralCountries;
