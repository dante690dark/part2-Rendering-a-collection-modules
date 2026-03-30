import { useEffect, useState } from "react";
import { getAllCountries } from "../services/country";
import Countries from "./components/Countries";
import "./styles.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);

  useEffect(() => {
    getAllCountries().then(({ data }) => {
      setCountries(data);
    });
  }, []);

  const handleChange = ({ target: { value } }) => {
    if (value) {
      const collection = countries.filter(({ name: { common: filtered } }) =>
        filtered.toLowerCase().includes(value.toLowerCase()),
      );

      setFilterCountries(collection);
      return;
    }

    setFilterCountries([]);
    return;
  };

  return (
    <>
      <span>find countries</span>{" "}
      <input type="text" onChange={handleChange} name="filtered" />
      <Countries filterCountries={filterCountries} />
    </>
  );
}

export default App;
