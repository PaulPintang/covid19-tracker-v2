import React, { useState } from "react";

const SelectCountry = (props) => {
  // state for dropdown
  const [options, setOptions] = useState(false);
  const handleClick = () => {
    setOptions(!options);
  };
  const { countries, continents } = props;
  return (
    <div className="pb-20">
      <h1 className="text-2xl dark:text-white pb-7">Countries</h1>
      <div className="flex justify-between">
        <div>
          <input
            className="px-3 py-3 w-96 rounded-md text-sm transition focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:focus:border-gray-800 dark:border-opacity-20 focus:border-opacity-60 border border-gray-200 border-opacity-40 shadow-sm"
            type="text"
            placeholder="Search for a Country"
          />
        </div>
        <div class="relative inline-block text-left">
          <div>
            <button
              onClick={handleClick}
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none border-opacity-30 dark:bg-gray-800 dark:text-gray-400"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              Filter by Region
              <svg
                class="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div
            class="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white dark:bg-gray-800 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            {options && (
              <div class="py-1" role="none">
                {continents.map((item) => (
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm dark:bg-gray-800 dark:text-gray-400"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    {item.continent}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex w-full items-center gap-12 pt-8">
        {countries.slice(0, 1).map((country) => (
          <>
            <div className="w-96">
              <img src={country.countryInfo.flag} className="w-full " alt="" />
            </div>
            <div className="p-8">
              <h1 className="text-4xl dark:text-white">{country.country}</h1>
              <p>
                <span className="dark:text-white">Continent: </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {" "}
                  {country.continent}
                </span>
              </p>
              <div className="flex gap-28">
                <div>
                  <h1 className="pt-4 font-bold dark:text-gray-100">
                    Covid-19 Cases
                  </h1>
                  <p>
                    <span className="dark:text-white">Total Cases: </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {country.cases.toLocaleString()}
                    </span>
                  </p>
                  <p>
                    <div className="flex items-center gap-2">
                      <div className="bg-yellow-300 w-8 h-2"></div>
                      <span className="dark:text-white">
                        Total Active Cases:
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {country.active.toLocaleString()}
                      </span>
                    </div>
                  </p>
                  <p>
                    <div className="flex items-center gap-2">
                      <div className="bg-green-300 w-8 h-2"></div>
                      <span className="dark:text-white">
                        Total Recoveries:{" "}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {country.recovered.toLocaleString()}
                      </span>
                    </div>
                  </p>
                  <p>
                    <div className="flex items-center gap-2">
                      <div className="bg-red-300 w-8 h-2"></div>
                      <span className="dark:text-white">Total Deaths:</span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {country.deaths.toLocaleString()}
                      </span>
                    </div>
                  </p>
                </div>
                <div>
                  <h1 className="pt-4 font-bold dark:text-gray-100">
                    Today Cases
                  </h1>
                  <p>
                    <span className="dark:text-white">
                      Today Active Cases:{" "}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {country.todayCases.toLocaleString()}
                    </span>
                  </p>
                  <p>
                    <span className="dark:text-white">Today Recoveries: </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {country.todayRecovered.toLocaleString()}
                    </span>
                  </p>
                  <p>
                    <span className="dark:text-white">Today Deaths: </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {country.todayDeaths.toLocaleString()}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default SelectCountry;
