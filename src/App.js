import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import Summary from "./components/Summary";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/all")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // initialize data from the API
  let total = data.cases;
  let active = data.active;
  let recovered = data.recovered;
  let deaths = data.deaths;
  let todayCases = data.todayCases;
  let todayRecovered = data.todayRecovered;
  let todayDeaths = data.todayDeaths;
  return (
    <div className="container mx-auto px-6" style={{ maxWidth: 1120 }}>
      <Header />
      <Content total={total} />
      <Summary
        active={active}
        recovered={recovered}
        deaths={deaths}
        todayCases={todayCases}
        todayRecovered={todayRecovered}
        todayDeaths={todayDeaths}
      />
    </div>
  );
}

export default App;
