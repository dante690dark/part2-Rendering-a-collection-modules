import { useEffect, useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import axios from "axios";
import "./styles.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [data, setData] = useState({ name: "", number: "" });
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons([...response.data]);
    });
  }, []);

  const addName = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === data.name)) {
      alert(`${data.name} is already added to phonebook`);
      return;
    }

    setPersons((prevState) => [
      ...prevState,
      { name: data.name, number: data.number },
    ]);
    setData({ name: "", number: "" });
  };

  const handleChange =
    (name) =>
    ({ target: { value } }) => {
      if (name === "search") setSearch(value);
      setData((prevState) => ({ ...prevState, [name]: value }));
    };

  return (
    <>
      <h2>Phonebook</h2>
      <Filter search={search} handleChange={handleChange} />
      <h2>Add new</h2>
      <PersonForm data={data} handleChange={handleChange} addName={addName} />
      <h2>Numbers</h2>
      <Persons search={search} persons={persons} />
    </>
  );
};

export default App;
