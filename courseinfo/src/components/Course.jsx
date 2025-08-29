import Content from "./Content";
import Header from "./Header";

const Course = ({ course: { name, parts } }) => {
  return (
    <>
      <Header name={name} />
      <Content parts={parts} />
    </>
  );
};

export default Course;
