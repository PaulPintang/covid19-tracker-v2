import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Status from "./components/Status";

function App() {
  const [data, setData] = useState([]);
  const [continent, setContinent] = useState([]);
  useEffect(() => {
    // all cases
    axios
      .get("https://disease.sh/v3/covid-19/all")
      .then((res) => {
        setData(res.data);
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
  }, []);

  // initialize data from the API = ALL Cases
  const total = data.cases;
  const active = data.active;
  const recovered = data.recovered;
  const deaths = data.deaths;
  const todayCases = data.todayCases;
  const todayRecovered = data.todayRecovered;
  const todayDeaths = data.todayDeaths;

  return (
    <React.Fragment>
      <div className="bg-white dark:bg-gray-900 transition-all">
        <div className="container mx-auto px-6" style={{ maxWidth: 1120 }}>
          <Header />
          <Content total={total} />
        </div>
      </div>
      <Summary
        active={active}
        recovered={recovered}
        deaths={deaths}
        todayCases={todayCases}
        todayRecovered={todayRecovered}
        todayDeaths={todayDeaths}
        continents={continent}
      />
      <div className="container mx-auto px-6" style={{ maxWidth: 1120 }}>
        <Status />
      </div>
    </React.Fragment>
  );
}

export default App;
