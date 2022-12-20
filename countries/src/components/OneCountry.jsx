import React from "react";
import "./countries.css";

const OneCountry = ({ filterCountry }) => {
  const {
    name: { common: country },
    capital,
    area,
    languages,
    flags: { png },
  } = filterCountry;

  return (
    <>
      <h1>{country}</h1>
      <span>capital {capital}</span>
      <br />
      <span>area {area}</span>

      <h3>languages:</h3>
      <ul>
        {Object.values(languages).map((list) => (
          <li key={list}>{list}</li>
        ))}
      </ul>
      <br />
      <img src={png} alt="png img" />
    </>
  );
};

export default OneCountry;
