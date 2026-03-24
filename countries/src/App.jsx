import { useEffect, useState } from "react";
import { getAllCountries, getCountry } from "../services/country";
import Country from "./components/Country";
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

      if (collection.length === 1) {
        const [
          {
            name: { common },
          },
        ] = collection;
        getCountry(common).then(({ data }) => setFilterCountries([data]));
      }

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
      <Country filterCountries={filterCountries} />
    </>
  );
}

export default App;
