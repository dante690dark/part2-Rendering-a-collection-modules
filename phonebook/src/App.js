import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import registry from "./services/registry";
import "./style.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [state, setState] = useState(false);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterNames, setFilterNames] = useState(persons);

  useEffect(() => {
    registry
      .getAllRegistry()
      .then((allData) => setPersons(allData))
      .catch((error) => console.error(error.message));
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

  // add a new name
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
      id: persons.length ? persons[persons.length - 1].id + 1 : 1,
    };

    registry
      .addRegistry(newEntry)
      .then((newData) => setPersons((prevState) => [...prevState, newData]))
      .catch((error) => console.error(error.message));

    clearFields(event);
  };

  // filter a name
  const handleFilter = ({ target: { value } }) => {
    const names = persons.filter(({ name }) => {
      if (value === "") return persons;
      return name.toLowerCase().includes(value.toLowerCase().trim());
    });

    setFilterNames(names);

    value === "" ? setState(false) : setState(true);
  };

  // delete a name
  const handleDelete = (index) => {
    const findName = persons.find((element) => element.id === index);

    if (!window.confirm(`Delete ${findName.name}`)) {
      return;
    }

    const findRegistry = persons.find((element) => element.id === index);
    registry
      .deleteRegistry(findRegistry, index)
      .then(() =>
        setPersons((prevState) =>
          [...prevState].filter((element) => element.id !== index)
        )
      )
      .catch((error) => console.error(error.message));
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
