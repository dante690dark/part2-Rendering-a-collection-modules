import axios from "axios";
import React, { useEffect, useState } from "react";
import "./countries.css";

const OneCountry = ({ filterCountry }) => {
  const {
    name: { common: country },
    capital,
    area,
    languages,
    flags: { png },
  } = filterCountry;

  const [collection, setCollection] = useState({});
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const params = {
      q: capital[0],
      appid: process.env.REACT_APP_API_KEY,
    };

    axios
      .get("http://api.openweathermap.org/data/2.5/weather", { params })
      .then(({ data }) => {
        setStatus(true);
        setCollection(data);
      })
      .catch((err) => err);
  }, [capital]);

  return (
    <>
      <h1>{country}</h1>
      <span>capital {capital[0]}</span>
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
      <h2>Weather in {capital}</h2>
      {status && (
        <>
          <h3>Temperature {collection.main.temp} Celsius</h3>
          <img
            src={`http://openweathermap.org/img/wn/${collection.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <h3>wind: {collection.wind.speed} m/s</h3>
        </>
      )}
    </>
  );
};

export default OneCountry;
