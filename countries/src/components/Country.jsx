import React, { useEffect } from "react";
import { sendCountry } from "../../services/country";

const Country = ({ countryDetail }) => {
  const api_key = import.meta.env.VITE_SOME_KEY;

  const {
    name: { common },
    capital,
    area,
    languages,
    flags: { png, alt },
    latlng: [latitude, longitude],
  } = countryDetail;
  const values = Object.values(languages);

  useEffect(() => {
    sendCountry(latitude, longitude, api_key)
      .then(({ data }) => {
        console.log("si funciona", data);
      })
      .catch((err) => console.log("no sirve", err));
  }, [latitude, longitude, api_key]);

  return (
    <>
      <h1>{common}</h1>
      <div>{capital[0]}</div>
      <div>{area}</div>
      <h2>Languages</h2>
      <ul>
        {values.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={png} alt={alt} />
    </>
  );
};

export default Country;
