import React, { useState } from "react";

const Status = (props) => {
  const { countries } = props;
  const [showInfos, setShowInfos] = useState(false);
  const [showContinent, setShowContinent] = useState(false);
  const [showFilter, setShowFilter] = useState(true);
  const [filter, setFilter] = useState(5);
  countries.push();
  return (
    <div>
      <div className="flex items-center justify-between pb-4">
        <div className="flex gap-3 w-full md:w-auto lg:w-auto justify-between">
          <div className="relative inline-block text-left w-full">
            <div>
              <button
                onClick={() => setShowFilter(!showFilter)}
                type="button"
                className="flex justify-between  w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none border-opacity-30 dark:bg-gray-800 dark:text-gray-400"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Top {filter} Countries
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
            {showFilter && (
              <div
                className="transition-all w-full overflow-auto origin-top-right absolute right-0 mt-2 z-0 rounded-md shadow-lg bg-white dark:bg-gray-800 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                {[5, 10, 50, 100].map((i) => (
                  <div className="py-" role="none">
                    <button
                      onClick={(e) => setFilter(e.target.value)}
                      href="#"
                      className="w-full text-left text-gray-700 px-4 py-2 text-sm dark:bg-gray-800 dark:text-gray-400 hover:dark:bg-gray-600 transition-all hover:bg-gray-200"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                      value={i}
                    >
                      Top {i} Countries
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="relative inline-block text-left w-full">
            <div>
              <button
                onClick={() => setShowContinent(!showContinent)}
                type="button"
                className="flex justify-between md:w-[180px] lg:w-[180px] w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none border-opacity-30 dark:bg-gray-800 dark:text-gray-400"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
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
            {showContinent && (
              <div
                className="transition-all h-56 w-full overflow-auto origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white dark:bg-gray-800 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <button
                    href="#"
                    className="w-full text-left text-gray-700 px-4 py-2 text-sm dark:bg-gray-800 dark:text-gray-400 hover:dark:bg-gray-600 transition-all hover:bg-gray-200"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                  ></button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md dark:bg-gray-800 mb-8 rounded-md p-2 ">
        <div className="overflow-y-auto ">
          <table className="min-w-full  border-collapse w-full border-none">
            <thead className="stic ky top-0 z-100 ">
              <tr>
                <th
                  scope="col"
                  className="z-0 md:px-3 lg:px-3 pl-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm rounded-tl-md"
                >
                  Top 5 Countries
                </th>
                <th
                  scope="col"
                  className="rounded-tr-md md:rounded-none lg:rounded-none py-3 md:pr-3 lg:pr-3 text-left text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
                >
                  Total Cases
                </th>
                <th
                  scope="col"
                  className="hidden md:table-cell lg:table-cell  py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
                >
                  Active Cases
                </th>
                <th
                  scope="col"
                  className="hidden md:table-cell lg:table-cell py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
                >
                  Today Cases
                </th>
                <th
                  scope="col"
                  className=" hidden md:table-cell lg:table-cell py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
                >
                  Recovered
                </th>
                <th
                  scope="col"
                  className=" hidden md:table-cell lg:table-cell  py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
                >
                  Today Recovered
                </th>
                <th
                  scope="col"
                  className=" hidden md:table-cell lg:table-cell  py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
                >
                  Deaths
                </th>
                <th
                  scope="col"
                  className=" hidden md:table-cell lg:table-cell py-3 text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm rounded-tr-md"
                >
                  Today Deaths
                </th>
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-200 overflow-auto text-gray-700">
              {countries
                .sort((a, b) => b.cases - a.cases)
                .slice(0, 5)
                .map((country, i) => (
                  <tr key={i} className="border-none">
                    <td className="py-2 pl-2  border-none">
                      <div className="flex items-center gap-3">
                        <p>#{i + 1}</p>
                        <div className="w-7">
                          <img
                            src={country.countryInfo.flag}
                            alt=""
                            className="w-full rounded-md"
                          />
                        </div>
                        <p className="font-medium uppercase text-sm dark:text-gray-300">
                          {country.country}
                        </p>
                      </div>
                    </td>
                    <td className="dark:text-gray-400 py-2">
                      <div className="flex items-center justify-between">
                        <span>{country.cases.toLocaleString()}</span>
                        <i
                          onClick={() => {
                            console.log(i);
                            setShowInfos(!showInfos);
                          }}
                          className="fa-solid fa-circle-info text-gray-400  text-sm pr-3 pt-[2px] md:hidden lg:hidden cursor-pointer"
                        ></i>
                      </div>
                      {/* other info's */}
                      {showInfos && (
                        <div
                          className="transition-all p-2 absolute right-[40px] mt-[-20px] w-24 rounded-md shadow-2xl bg-white dark:bg-gray-800 focus:outline-none"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="menu-button"
                          tabIndex="-1"
                        >
                          <div>
                            <img
                              src={country.countryInfo.flag}
                              alt=""
                              className="w-full rounded-md"
                            />
                          </div>
                          <div className="pt-1">
                            <div className="flex items-center gap-1">
                              <div className="bg-yellow-300 w-5 h-[6px]"></div>
                              <p className="text-[12px]">
                                {country.active.toLocaleString()}
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="bg-green-300 w-5 h-[6px]"></div>
                              <p className="text-[12px]">
                                {country.recovered.toLocaleString()}
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="bg-red-300 w-5 h-[6px]"></div>
                              <p className="text-[12px]">
                                {country.deaths.toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell">
                      {country.active.toLocaleString()}
                    </td>
                    <td className="text-yellow-300  py-2 hidden md:table-cell lg:table-cell">
                      + {country.todayCases.toLocaleString()}
                    </td>
                    <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell ">
                      {country.recovered.toLocaleString()}
                    </td>
                    <td className="text-green-300 py-2 pl-3 hidden md:table-cell lg:table-cell">
                      + {country.todayRecovered.toLocaleString()}
                    </td>
                    <td className="dark:text-gray-400 py-2 hidden md:table-cell lg:table-cell">
                      {country.deaths.toLocaleString()}
                    </td>
                    <td className=" text-red-300 py-2 pl-6 hidden md:table-cell lg:table-cell">
                      + {country.todayDeaths.toLocaleString()}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Status;
