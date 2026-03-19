import { useEffect, useState } from "react";
import { getAllCountries } from "../services/country";
import Country from "./components/Country";

function App() {
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);

  useEffect(() => {
    getAllCountries().then(({ data }) => {
      setCountries([...data]);
      setFilterCountries([...data]);
    });
  }, []);

  //NOTE: this handleChage is for filter countries
  const handleChange = ({ target: { value } }) => {
    const collection = countries.filter(({ name: { common: filtered } }) =>
      filtered.toLowerCase().includes(value.toLowerCase()),
    );
    if (collection) {
      setFilterCountries([...collection]);
      return;
    }

    setFilterCountries([...countries]);
    return;
  };

  return (
    <>
      <span>find countries</span>{" "}
      <input type="text" onChange={handleChange} name="" id="" />
      <Country filterCountries={filterCountries} />
    </>
  );
}

export default App;
