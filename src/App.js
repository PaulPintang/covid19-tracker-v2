import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
// Components
import Content from "./components/Content";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Status from "./components/Status";
import Footer from "./components/Footer";
import Country from "./components/Country";

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
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // initialize props for Content COmponent
  const totalCases = total.cases;
  return (
    <React.Fragment>
      <div className="bg-white dark:bg-gray-900 transition-all w-full relative overflow-hidden">
        <div className="container mx-auto px-6" style={{ maxWidth: 1120 }}>
          <Header />
          <Content totalCases={totalCases} />
        </div>
      </div>
      <Summary continents={continent} total={total} />
      <div className="container mx-auto px-6 " style={{ maxWidth: 1120 }}>
        <Status countries={countries} continents={continent} />
      </div>
      <div className="bg-white dark:bg-gray-900 transition-all">
        <div className="container mx-auto px-6" style={{ maxWidth: 1120 }}>
          <Country countries={countries} continents={continent} />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
