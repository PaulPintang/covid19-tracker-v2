import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
// Components
import Content from "./components/Content";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Status from "./components/Status";

function App() {
  const [total, setTotal] = useState([]);
  const [continent, setContinent] = useState([]);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    // all total
    axios
      .get("https://disease.sh/v3/covid-19/all")
      .then((res) => {
        setTotal(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // by continent, use in option tag
    axios
      .get("https://disease.sh/v3/covid-19/continents")
      .then((res) => {
        setContinent(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // by countries
    axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((res) => {
        setCountries(res.data);
        console.log(countries);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // initialize total from the API = ALL total
  const totalCases = total.cases;
  const active = total.active;
  const recovered = total.recovered;
  const deaths = total.deaths;
  const todaytotal = total.todaytotal;
  const todayRecovered = total.todayRecovered;
  const todayDeaths = total.todayDeaths;
  // array
  console.log(total);
  return (
    <React.Fragment>
      <div className="bg-white dark:bg-gray-900 transition-all">
        <div className="container mx-auto px-6" style={{ maxWidth: 1120 }}>
          <Header />
          <Content totalCases={totalCases} />
        </div>
      </div>
      <Summary
        active={active}
        recovered={recovered}
        deaths={deaths}
        todaytotal={todaytotal}
        todayRecovered={todayRecovered}
        todayDeaths={todayDeaths}
        continents={continent}
      />
      <div className="container mx-auto px-6" style={{ maxWidth: 1120 }}>
        <Status countries={countries} />
      </div>
    </React.Fragment>
  );
}

export default App;
