import React, { useState } from "react";
import Dropdown from "./components/Dropdown.jsx";
import SelectedCountry from "./components/SelectedCountry.jsx";

const SelectCountry = (props) => {
  const { countries, continents } = props;
  return (
    <div className="pb-20">
      <Dropdown countries={countries} continents={continents} />
      <SelectedCountry countries={countries} />
    </div>
  );
};

export default SelectCountry;
