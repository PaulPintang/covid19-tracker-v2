import React from "react";
import Dropdown from "./components/Dropdown.jsx";

const SelectCountry = (props) => {
  const { countries, continents } = props;
  return (
    <div className="pb-20">
      <Dropdown countries={countries} continents={continents} />
    </div>
  );
};

export default SelectCountry;
