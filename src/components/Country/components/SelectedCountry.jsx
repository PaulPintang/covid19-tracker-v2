import React from "react";
import MonthlyChart from "./Charts/MonthlyChart";
// import Charts from "./Charts";
const SelectedCountry = ({ selectedCountry, countries }) => {
  return (
    <div>
      <div className="md:flex lg:flex w-full items-center gap-12 pt-8">
        {countries
          .filter((country) => country.country === selectedCountry)
          .map((country, i) => (
            <React.Fragment key={i}>
              <div className="md:w-96 lg:w-96 w-full">
                <img
                  key={i}
                  src={country.countryInfo.flag}
                  className="w-full "
                  alt=""
                />
              </div>
              <div className="md:p-8 lg:p-8 py-8">
                <h1 className="text-4xl dark:text-white">{country.country}</h1>
                <span className="dark:text-white">Continent: </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {country.continent}
                </span>
                <div className="md:flex lg:flex gap-28">
                  <div>
                    <h1 className="pt-4 font-bold dark:text-gray-100">
                      Covid-19 Cases
                    </h1>

                    <div className="flex gap-1">
                      <p className="dark:text-white">Total Cases: </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {country.cases.toLocaleString()}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="bg-yellow-300 w-8 h-2"></div>
                      <p className="dark:text-white">Total Active Cases: </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {country.active.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-green-300 w-8 h-2"></div>
                      <p className="dark:text-white">Total Recoveries: </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {country.recovered.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-red-300 w-8 h-2"></div>
                      <p className="dark:text-white">Total Deaths:</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {country.deaths.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h1 className="pt-4 font-bold dark:text-gray-100">
                      Today Cases
                    </h1>
                    <div className="flex items-center gap-2">
                      <span className="dark:text-white">
                        Today Active Cases:
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {country.todayCases.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="dark:text-white">
                        Today Recoveries:{" "}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {country.todayRecovered.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="dark:text-white">Today Deaths: </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {country.todayDeaths.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
      </div>
      <MonthlyChart />
      {/* <Charts countries={countries} selectedCountry={selectedCountry} /> */}
    </div>
  );
};

export default SelectedCountry;
