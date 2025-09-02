import { useState } from 'react';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import './styles.css';
import Filter from './components/Filter';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [data, setData] = useState({ name: '', number: '' });
  const [search, setSearch] = useState('');

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
    setData({ name: '', number: '' });
  };

  const handleChange =
    (name) =>
    ({ target: { value } }) => {
      if (name === 'search') setSearch(value);
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
