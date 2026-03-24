import React from "react";

const Country = ({ filterCountries }) => {
  if (filterCountries.length > 10) {
    return (
      <span className="message">Too many matches, specify another filter</span>
    );
  }

  if (filterCountries.length === 1) {
    const [
      {
        name: { common },
        capital,
        area,
        languages,
        flags: { png, alt },
      },
    ] = filterCountries;
    const values = Object.values(languages);
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
  }

  return (
    <>
      {filterCountries.map(({ name: { common } }) => {
        return (
          <div className="container-country" key={common}>
            <span>{common}</span>
            <button type="button">Show</button>
          </div>
        );
      })}
    </>
  );
};

export default Country;
