import React from "react";
// import Charts from "./Charts";
const SelectedCountry = ({ selectedCountry, countries, search }) => {
  console.log(search);
  return (
    <div>
      <div className="flex w-full items-center gap-12 pt-8">
        {countries
          .filter((country) => country.country === selectedCountry)
          .map((country, i) => (
            <React.Fragment key={i}>
              <div className="w-96">
                <img
                  key={i}
                  src={country.countryInfo.flag}
                  className="w-full "
                  alt=""
                />
              </div>
              <div className="p-8">
                <h1 className="text-4xl dark:text-white">{country.country}</h1>
                <p>
                  <span className="dark:text-white">Continent: </span>
                  <span className="text-gray-600 dark:text-gray-400">
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
                      <span className="dark:text-white">
                        Today Recoveries:{" "}
                      </span>
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
            </React.Fragment>
          ))}
      </div>
      {/* <Charts countries={countries} selectedCountry={selectedCountry} /> */}
    </div>
  );
};

export default SelectedCountry;
