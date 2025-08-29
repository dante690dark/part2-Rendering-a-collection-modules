import Part from './Part';

const Content = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <>
      <Part part={parts[0]?.name} exercises={parts[0]?.exercises} />
      <Part part={parts[1]?.name} exercises={parts[1]?.exercises} />
      <Part part={parts[2]?.name} exercises={parts[2]?.exercises} />
      <Part part={parts[3]?.name} exercises={parts[3]?.exercises} />
      <p
        style={{
          fontWeight: 'bold',
        }}
      >
        total of {total} excercise
      </p>
    </>
  );
};

export default Content;
