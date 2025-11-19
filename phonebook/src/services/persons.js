import axios from "axios";
const url = "http://localhost:3001/persons";

const getPersons = () => axios.get(url);
const createPerson = (data) => axios.post(url, data);

export { getPersons, createPerson };
