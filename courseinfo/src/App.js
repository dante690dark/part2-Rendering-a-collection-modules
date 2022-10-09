import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";
import { courses } from "./data/courses";

const App = () => {
  return (
    <>
      {courses.map(({ name, parts, id }) => {
        return (
          <div key={id}>
            <Header name={name} />
            <Content parts={parts} />
            <Total parts={parts} />
          </div>
        );
      })}
    </>
  );
};

export default App;
