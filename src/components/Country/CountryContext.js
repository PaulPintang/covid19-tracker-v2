import React, { createContext, useState } from "react";

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [selectedContinent, setSelectedContinent] = useState("North America");
  const [selectedCountry, setSelectedCountry] = useState("USA");
  // state for dropdown
  const [options, setOptions] = useState(false);
  const [showCountry, setShowCountry] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showMatch, setShowMatch] = useState(true);

  const handleClick = () => {
    setOptions(!options);
  };
  const handleClickCountry = () => {
    setShowCountry(!showCountry);
  };

  // getting value and close dropdown / CONTINENT DROPDOWN.
  const handleSelect = (e) => {
    setSelectedContinent(e.target.value);
    // console.log(filtered[0].country);
    setOptions(!options);
  };
  // getting value and close dropdown / COUNTRY DROPDOWN.
  const handleSelectCountry = (e) => {
    setSelectedCountry(e.target.value);
    setShowCountry(!showCountry);
  };

  const handleSearch = (e) => {
    setSelectedCountry(e.target.value);
    setSearchInput(e.target.value);
    setsuggestions([]);
    setShowMatch(false);
  };
  return (
    <CountryContext.Provider
      value={{
        selectedCountry,
        setSelectedCountry,
        selectedContinent,
        setSelectedContinent,
        options,
        setOptions,
        showCountry,
        setShowCountry,
        searchInput,
        setSearchInput,
        suggestions,
        setsuggestions,
        showMatch,
        setShowMatch,
        // functions
        handleClick,
        handleClickCountry,
        handleSearch,
        handleSelect,
        handleSelectCountry,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContext;
