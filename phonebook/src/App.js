import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import registry from "./services/registry";
import "./style.css";

const App = () => {
  const [state, setState] = useState(false);
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterNames, setFilterNames] = useState(persons);

  useEffect(() => {
    registry.getAllRegistry().then((allData) => setPersons(allData));
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

    const newEntry = {
      name: newName,
      number: newPhone,
      id: persons.length + 1,
    };

    registry
      .addRegistry(newEntry)
      .then((newData) => setPersons((prevState) => [...prevState, newData]));

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

  const handleDelete = (index) => {
    if (!window.confirm("Do you really want to leave?")) {
      return;
    }

    // FIXME: fix the id when delete a registry
    const findObject = persons.find((element) => element.id === index);
    registry
      .deleteRegistry(findObject, index)
      .then(() =>
        setPersons((prevState) =>
          [...prevState].filter((element) => element.id !== index)
        )
      );
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
        <Persons
          filterNames={filterNames}
          persons={persons}
          state={state}
          handleDelete={handleDelete}
        />
      </ul>
    </div>
  );
};

export default App;
