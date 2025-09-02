import { useState } from 'react';
import Person from './components/Person';
import './styles.css';

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
      if (name === 'search') {
        setSearch(value);
      }

      setData((prevState) => ({ ...prevState, [name]: value }));
    };

  return (
    <>
      <h2>Phonebook</h2>
      filter shown with
      <input type='text' onChange={handleChange('search')} value={search} />
      <h2>Add new</h2>
      <form onSubmit={addName}>
        <div>
          <label htmlFor='name-field'>Name:</label>
          <input
            type='text'
            id='name-field'
            onChange={handleChange('name')}
            value={data.name}
            required
          />
        </div>
        <div>
          <label htmlFor='number-field'>Number:</label>
          <input
            type='tel'
            id='number-field'
            onChange={handleChange('number')}
            value={data.number}
            pattern='[0-9\- ]+'
            required
          />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {search
          ? persons
              .filter((person) => person.name.includes(search))
              .map((person) => (
                <Person
                  key={person.name}
                  name={person.name}
                  number={person.number}
                />
              ))
          : persons.map((person) => (
              <Person
                key={person.name}
                name={person.name}
                number={person.number}
              />
            ))}
      </ul>
    </>
  );
};

export default App;
