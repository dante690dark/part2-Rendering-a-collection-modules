import axios from "axios";
const url = "https://studies.cs.helsinki.fi/restcountries/api";

const getAllCountries = () => axios.get(`${url}/all`);
const getCountry = (data) => axios.get(`${url}/${data}`);
// const deletePerson = (id) => axios.delete(`${url}/${id}`);
// const updatePerson = (id, person) => axios.put(`${url}/${id}`, person);

export { getAllCountries, getCountry };
