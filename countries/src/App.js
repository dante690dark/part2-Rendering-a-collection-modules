import React, { useEffect, useState } from "react";
import OneCountry from "./components/OneCountry";
import SeveralCountries from "./components/SeveralCountries";
import axios from "axios";
import "./style.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(({ data }) => setCountries(data));
  }, []);

  const handleCountry = ({ target: { value } }) => {
    const results = countries.filter(({ name: { common: country } }) =>
      country.toLowerCase().includes(value.toLowerCase().trim())
    );

    setFilterCountries(results);
  };

  return (
    <>
      <span>find countries </span>
      <input type="text" onChange={handleCountry} />
      <ul className="parent-list">
        {filterCountries.length === 1 ? (
          <OneCountry filterCountry={filterCountries[0]} />
        ) : filterCountries.length < 10 ? (
          <SeveralCountries filterCountries={filterCountries} />
        ) : (
          <span>Too many matches, specify another filter</span>
        )}
      </ul>
    </>
  );
}

export default App;
