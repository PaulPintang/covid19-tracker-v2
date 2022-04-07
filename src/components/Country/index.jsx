import React, { useState } from "react";
import Filter from "./components/Filter.jsx";

const SelectCountry = ({ countries, continents }) => {
  const [selectedContinent, setSelectedContinent] = useState("North America");
  const [selectedCountry, setSelectedCountry] = useState("USA");
  return (
    <div className="lg:pb-16">
      <Filter
        countries={countries}
        continents={continents}
        selectedContinent={selectedContinent}
        setSelectedContinent={setSelectedContinent}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
    </div>
  );
};

export default SelectCountry;
