import { useEffect, useState } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import { getPersons, createPerson, deletePerson } from "./services/persons";
import "./styles.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [data, setData] = useState({ name: "", number: "" });
  const [search, setSearch] = useState("");

  useEffect(() => {
    getPersons().then((response) => {
      setPersons([...response.data]);
    });
  }, []);

  const addName = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === data.name)) {
      alert(`${data.name} is already added to phonebook`);
      return;
    }

    createPerson(data).then((reponse) => {
      setPersons((prevState) => [
        ...prevState,
        {
          name: reponse.data.name,
          number: reponse.data.number,
          id: reponse.data.id,
        },
      ]);
    });

    setData({ name: "", number: "" });
  };

  const deleteName = (id, name, setClick) => {
    setClick(true);

    setTimeout(() => {
      if (!window.confirm(`Delete ${name} ?`)) {
        setClick(false);
        return;
      }

      deletePerson(id).then(({ data: { id } }) =>
        setPersons((prevState) =>
          prevState.filter((person) => person.id !== id)
        )
      );
    }, 0);
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
      <Persons search={search} persons={persons} deleteName={deleteName} />
    </>
  );
};

export default App;
