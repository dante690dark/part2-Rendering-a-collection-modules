import React from "react";

const PersonForm = ({ handleSubmit, handleName, handlePhone }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type="text" onChange={handleName} required />
        </div>
        <div>
          number: <input type="tel" onChange={handlePhone} required />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
