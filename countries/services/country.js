import axios from "axios";
const URL_COUNTRY = "https://studies.cs.helsinki.fi/restcountries/api";
const URL_WEATHER = "https://api.openweathermap.org/data/3.0/onecall?";

const getAllCountries = () => axios.get(`${URL_COUNTRY}/all`);
const getCountry = (data) => axios.get(`${URL_COUNTRY}/name/${data}`);
const sendCountry = (latitude, longitude, api_key) =>
  axios.get(
    `${URL_WEATHER}lat=${latitude}&lon=${longitude}&exclude=hourly,daily&appid=${api_key}`,
  );

export { getAllCountries, getCountry, sendCountry };
