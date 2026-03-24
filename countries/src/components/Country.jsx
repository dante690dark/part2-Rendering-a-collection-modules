import React from "react";

const Country = ({ filterCountries }) => {
  if (filterCountries.length > 10) {
    return (
      <span className="message">Too many matches, specify another filter</span>
    );
  }

  if (filterCountries.length === 1) {
    const [data] = filterCountries;

    const languages = Object.values(data.languages);
    return (
      <>
        <h1>{data.name.common}</h1>
        <div>{data.capital[0]}</div>
        <div>{data.area}</div>
        <h2>Languages</h2>
        <ul>
          {languages.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={data.flags.png} alt={data.flags.alt} />
      </>
    );
  }

  return (
    <>
      {filterCountries.map((country) => (
        <div key={country.name.common}>{country.name.common}</div>
      ))}
    </>
  );
};

export default Country;
