import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(({ name, exercises, id }) => (
        <Part part={name} exercises={exercises} key={id} />
      ))}
    </>
  );
};

export default Content;
