import React from "react";

const Country = ({ filterCountries }) => {
  return (
    <div>
      {filterCountries.map((e) => (
        <div key={e.name.common}>{e.name.common}</div>
      ))}
    </div>
  );
};

export default Country;
