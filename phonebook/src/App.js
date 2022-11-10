import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import "./style.css";

const App = () => {
  const [state, setState] = useState(false);
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterNames, setFilterNames] = useState(persons);

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const handleName = ({ target: { value } }) => {
    setNewName(value);
  };

  const handlePhone = ({ target: { value } }) => {
    setNewPhone(value);
  };

  const clearFields = (event) => {
    setNewName(event.target.reset());
    setNewPhone(event.target.reset());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      persons.some(
        ({ name }) =>
          name.toLocaleLowerCase() === newName.toLocaleLowerCase().trim()
      )
    ) {
      alert(`${newName.trim()} is already added to phonebook`);
      clearFields(event);
      return;
    }

    setPersons((prevState) => [
      ...prevState,
      { name: newName, number: newPhone, id: persons.length + 1 },
    ]);

    clearFields(event);
  };

  const handleFilter = ({ target: { value } }) => {
    const names = persons.filter(({ name }) => {
      if (value === "") return persons;
      return name.toLowerCase().includes(value.toLowerCase().trim());
    });

    setFilterNames(names);

    value === "" ? setState(false) : setState(true);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <h2>Add a new</h2>

      <PersonForm
        handleSubmit={handleSubmit}
        handleName={handleName}
        handlePhone={handlePhone}
      />

      <h2>Numbers</h2>
      <ul>
        <Persons filterNames={filterNames} persons={persons} state={state} />
      </ul>
    </div>
  );
};

export default App;
