import { useEffect, useState } from "react";
import { sendCountry } from "../../services/country";

const Weather = ({ capital, latitude, longitude }) => {
  const [weather, setWeather] = useState({});
  const [temperature, setTemperature] = useState("");

  const API_KEY = import.meta.env.VITE_SOME_KEY;

  useEffect(() => {
    sendCountry(latitude, longitude, API_KEY)
      .then(({ data }) => {
        setTemperature(
          Number(weather.current?.temp - 273.15)
            .toFixed(1)
            .toString(),
        );
        setWeather(data);
      })
      .catch((error) => console.error(error));
  }, [latitude, longitude, weather, API_KEY]);

  return (
    <>
      <h2>Weather in {capital}</h2>
      <div>Temperature {temperature} Celsius</div>
      <img
        src={`https://openweathermap.org/payload/api/media/file/${weather.current?.weather[0]?.icon}.png`}
        alt="weather icon"
      />
      <div>Wind {weather.current?.wind_speed} m/s</div>
    </>
  );
};

export default Weather;
