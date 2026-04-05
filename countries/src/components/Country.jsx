import Weather from "./Weather";

const Country = ({ countryDetail }) => {
  const {
    name: { common },
    capital,
    area,
    languages,
    flags: { png, alt },
    latlng: [latitude, longitude],
  } = countryDetail;

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
      <Weather capital={capital} latitude={latitude} longitude={longitude} />
    </>
  );
};

export default Country;
