const Part = ({ parts }) => {
  return (
    <>
      <ul>
        {parts.map(({ name, exercises }) => (
          <li key={name}>
            <p>
              {name} {exercises}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Part;
