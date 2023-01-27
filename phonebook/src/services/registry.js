import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAllRegistry = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const addRegistry = (data) => {
  const request = axios.post(baseUrl, data);
  return request.then((response) => response.data);
};

const deleteRegistry = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const updateRegistry = (data, id) => {
  const request = axios.put(`${baseUrl}/${id}`, data);
  return request.then((response) => response.data);
};

const registry = {
  getAllRegistry,
  addRegistry,
  deleteRegistry,
  updateRegistry,
};

export default registry;
