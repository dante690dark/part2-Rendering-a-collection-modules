import React, { useState } from "react";
import { getCountry } from "../../services/country";
import Country from "./Country";

const Countries = ({ filterCountries }) => {
  const [countryDetail, setCountryDetail] = useState([]);
  const handleClick = (common) => {
    getCountry(common).then(({ data }) => setCountryDetail([data]));
  };

  if (filterCountries.length > 10) {
    return (
      <span className="message">Too many matches, specify another filter</span>
    );
  }

  if (countryDetail.length === 1) {
    return <Country countryDetail={countryDetail} />;
  }

  return (
    <>
      {filterCountries.map(({ name: { common } }) => {
        return (
          <div className="container-country" key={common}>
            <span>{common}</span>
            <button type="button" onClick={() => handleClick(common)}>
              Show
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Countries;
