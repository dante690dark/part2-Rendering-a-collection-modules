import React from 'react';

function PersonForm({ data, handleChange, addName }) {
  return (
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
  );
}

export default PersonForm;
