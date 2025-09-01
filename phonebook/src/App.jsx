import { useState } from 'react';
import Person from './components/Person';
import './styles.css';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const addName = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons((prevState) => [...prevState, { name: newName }]);
    setNewName('');
  };

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          <label htmlFor='username-field'>Name:</label>
          <input
            name='username'
            id='username-field'
            onChange={handleChange}
            value={newName}
          />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Person key={person.name} name={person.name} />
        ))}
      </ul>
    </>
  );
};

export default App;
