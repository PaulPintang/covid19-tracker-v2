import React from "react";
import Filter from "./components/Filter.jsx";

const SelectCountry = ({ countries, continents }) => {
  return (
    <div className="lg:pb-16">
      <Filter countries={countries} continents={continents} />
    </div>
  );
};

export default SelectCountry;
