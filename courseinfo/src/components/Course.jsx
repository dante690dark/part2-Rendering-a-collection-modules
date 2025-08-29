import Content from './Content';
import Header from './Header';

const Course = ({ course }) => {
  return (
    <>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {course.map((e) => (
          <li key={e.name}>
            <Header name={e.name} />
            <Content parts={e.parts} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Course;
