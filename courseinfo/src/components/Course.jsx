import React from 'react';
import Content from './Content';
import Header from './Header';

const Course = ({ course }) => {
  return (
    <>
      <ul>
        {course.map(({ name, parts }) => (
          <li key={name}>
            <Header name={name} />
            <Content parts={parts} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Course;
