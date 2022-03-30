import React, { useState } from "react";
import SelectedCountry from "./SelectedCountry";

const Dropdown = ({
  selectedContinent,
  setSelectedContinent,
  selectedCountry,
  setSelectedCountry,
  countries,
  continents,
}) => {
  // state for dropdown
  const [options, setOptions] = useState(false);
  const [showCountry, setShowCountry] = useState(false);
  const [searchInput, setSearchInput] = useState("");

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

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    setSelectedCountry(searchInput);
    setSearchInput("");
  };

  return (
    <React.Fragment>
      <h1 className="text-2xl dark:text-white pb-7 py-10">Countries</h1>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div>
            <div className="relative inline-block text-left">
              {/* Country */}
              <div>
                <button
                  onClick={handleClickCountry}
                  type="button"
                  className="inline-flex justify-between w-52 rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none border-opacity-30 dark:bg-gray-800 dark:text-gray-400"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  {selectedCountry}
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {/* Popup selection */}
              {showCountry ? (
                <div
                  className="transition-all h-56 overflow-auto origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white dark:bg-gray-800 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  {showCountry && (
                    <div className="py-1" role="none">
                      {countries
                        .filter(
                          (region) => region.continent === selectedContinent
                        )
                        .sort()
                        .map((item, i) => (
                          <button
                            onClick={handleSelectCountry}
                            href="#"
                            className="w-full text-left text-gray-700  px-4 py-2 text-sm dark:bg-gray-800 dark:text-gray-400 hover:dark:bg-gray-600 transition-all hover:bg-gray-200"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-0"
                            key={i}
                            value={item.country}
                          >
                            {item.country}
                          </button>
                        ))}
                    </div>
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="relative inline-block text-left">
            <div>
              <button
                onClick={handleClick}
                type="button"
                className="flex justify-between w-44 rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none border-opacity-30 dark:bg-gray-800 dark:text-gray-400"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                {selectedContinent}
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              className="transition-all origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white dark:bg-gray-800 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              {options && (
                <div className="py-1" role="none">
                  {continents.map((item, i) => (
                    <button
                      onClick={handleSelect}
                      href="#"
                      className="w-full text-left text-gray-700 block px-4 py-2 text-sm dark:bg-gray-800 dark:text-gray-400 hover:dark:bg-gray-600 transition-all hover:bg-gray-200"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                      key={i}
                      value={item.continent}
                    >
                      {item.continent}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="relative">
          <input
            className="px-3 py-2 w-56 rounded-md text-sm transition focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:focus:border-gray-800 dark:border-opacity-20 focus:border-opacity-60 border border-gray-200 border-opacity-40 shadow-sm"
            type="text"
            placeholder="Quick Search"
            onChange={handleSearchInput}
            value={searchInput}
          />
          <div
            className="absolute right-3"
            style={{ top: 6 }}
            onClick={handleSearch}
          >
            <i className="fa-solid fa-magnifying-glass text-gray-400 cursor-pointer text-sm "></i>
          </div>
        </div>
      </div>
      <SelectedCountry
        selectedCountry={selectedCountry}
        countries={countries}
      />
    </React.Fragment>
  );
};

export default Dropdown;
