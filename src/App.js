import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
// Components
import Content from "./components/Content";
import Header from "./components/Header";
import Status from "./components/Status";
import Footer from "./components/Footer";
import Country from "./components/Country";
import Table from "./components/Table";

function App() {
  const [globalCases, setGlobalCases] = useState([]);
  const [continent, setContinent] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    // all total
    axios
      .get("https://disease.sh/v3/covid-19/all")
      .then((res) => {
        setGlobalCases(res.data);
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

  // initialize props for Content COmponent / global cases
  const totalCases = globalCases.cases;

  return (
    <React.Fragment>
      <div className="bg-white dark:bg-gray-900 transition-all w-full relative overflow-hidden">
        <div className="container mx-auto px-6" style={{ maxWidth: 1120 }}>
          <Header />
          <Content totalCases={totalCases} />
        </div>
      </div>
      <Status continents={continent} globalCases={globalCases} />
      <div className="container mx-auto px-6 " style={{ maxWidth: 1120 }}>
        <Table countries={countries} continents={continent} />
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
