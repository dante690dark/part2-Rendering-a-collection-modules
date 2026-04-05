import { useEffect, useState } from "react";
import { sendCountry } from "../../services/country";

const Weather = ({ capital, latitude, longitude }) => {
  const [weather, setWeather] = useState({});

  const api_key = import.meta.env.VITE_SOME_KEY;

  useEffect(() => {
    sendCountry(latitude, longitude, api_key)
      .then(({ data }) => {
        setWeather(data);
      })
      .catch((err) => console.log("no sirve", err));
  }, [latitude, longitude, api_key]);

  return (
    <>
      <h2>Weather in {capital}</h2>
      <div>Temperature {weather.current?.temp} Celsius</div>
      <img
        src={`https://openweathermap.org/payload/api/media/file/${weather.current?.weather[0]?.icon}.png`}
        alt="weather icon"
      />
      <div>Wind {weather.current?.wind_speed} m/s</div>
    </>
  );
};

export default Weather;
