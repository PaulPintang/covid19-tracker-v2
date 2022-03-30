import React, { useState, useEffect } from "react";
import Filter from "./components/Filter.jsx";

const SelectCountry = ({ countries, continents }) => {
  const [selectedContinent, setSelectedContinent] = useState("North America");
  const [selectedCountry, setSelectedCountry] = useState("USA");
  // only run when selectedContinent change
  useEffect(() => {
    let filtered = countries.filter(
      (region) => region.continent === selectedContinent
    );
    console.log("continent change");
    // setSelectedCountry(filtered[0].country);
    return () => {
      // setSelectedCountry(filtered[0].country);
    };
  }, [selectedContinent]);

  return (
    <div className="pb-20">
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
