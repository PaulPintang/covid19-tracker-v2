import React from "react";

const SelectCountry = (props) => {
  const { countries } = props;
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
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none border-opacity-30 dark:bg-gray-800 dark:text-gray-400"
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
            class="hidden origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabindex="-1"
          >
            <div class="py-1" role="none">
              <a
                href="#"
                class="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabindex="-1"
                id="menu-item-0"
              >
                Account settings
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center gap-9 pt-8">
        {countries.slice(0, 1).map((country) => (
          <>
            <div className="w-96">
              <img src={country.countryInfo.flag} className="w-full " alt="" />
            </div>
            <div className="space-y-1">
              <h1>{country.country}</h1>
              <p>Continent: {country.continent}</p>
              <h1>Summary of Covid-19 Cases</h1>
              <div>
                <p>Total Cases: {country.cases}</p>
                <p>Total Active Cases: {country.active}</p>
                <p>Total Recoveries: {country.recovered}</p>
                <p>Total Deaths: {country.deaths}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default SelectCountry;
