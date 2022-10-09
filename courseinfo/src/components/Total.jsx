const Total = ({ parts }) => {
  const total = parts.reduce(
    (accumulator, part) => accumulator + part.exercises,
    0
  );

  return (
    <strong>
      <p>{`Total of ${total} excercises`}</p>
    </strong>
  );
};

export default Total;
