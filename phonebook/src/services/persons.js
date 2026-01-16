import axios from "axios";
const url = "http://localhost:3001/persons";

const getPersons = () => axios.get(url);
const createPerson = (data) => axios.post(url, data);
const deletePerson = (id) => axios.delete(`${url}/${id}`);
const updatePerson = (id, person) => axios.put(`${url}/${id}`, person);

export { getPersons, createPerson, deletePerson, updatePerson };
