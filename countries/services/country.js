import axios from "axios";
const url = "https://studies.cs.helsinki.fi/restcountries/api";

const getAllCountries = () => axios.get(`${url}/all`);
const getCountry = (data) => axios.get(`${url}/name/${data}`);

export { getAllCountries, getCountry };
