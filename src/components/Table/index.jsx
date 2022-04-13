import React, { useState } from "react";
import Continents from "./components/Continents";
import Global from "./components/Global";

const Table = (props) => {
  const { countries, continents } = props;
  const [showInfos, setShowInfos] = useState();
  const [showContinent, setShowContinent] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filterBy, setFilterBy] = useState(5);
  const [filterByContinent, setFilterByContinent] = useState("Global");
  let getTotal = countries.filter(
    (country) => country.continent === filterByContinent
  );
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between pb-2">
        <div className="flex  gap-3 w-full md:w-auto lg:w-auto justify-between">
          <div className="relative inline-block text-left w-full">
            <div>
              <button
                onClick={() => {
                  setShowFilter(!showFilter);
                  setShowInfos(false);
                }}
                type="button"
                className="flex justify-between md:w-44  w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none border-opacity-30 dark:bg-gray-800 dark:text-gray-400"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                Top {filterBy}
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
                className="transition-all w-full overflow-auto origin-top-right absolute right-0 mt-2 z-50 rounded-md shadow-lg bg-white dark:bg-gray-800 focus:outline-none py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  {[5, 10, 50, 100].map((i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        setFilterBy(e.target.value);
                        setShowFilter(false);
                      }}
                      href="#"
                      className="w-full text-left text-gray-700 px-4 py-2 text-sm dark:bg-gray-800 dark:text-gray-400 hover:dark:bg-gray-600 transition-all hover:bg-gray-200"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                      value={i}
                    >
                      Top {i} Countries
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative inline-block text-left w-full">
            <div>
              <button
                onClick={() => {
                  setShowContinent(!showContinent);
                  setShowInfos(false);
                }}
                type="button"
                className="flex justify-between md:w-[180px] lg:w-[180px] w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none border-opacity-30 dark:bg-gray-800 dark:text-gray-400"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                {filterByContinent}
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
                className="transition-all h-56 w-full overflow-auto z-50 origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white dark:bg-gray-800 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
                id="scrollbar"
              >
                <div className="py-1" role="none">
                  <button
                    onClick={(e) => {
                      setFilterByContinent(e.target.value);
                      setShowContinent(false);
                    }}
                    href="#"
                    className="w-full text-left text-gray-700 px-4 py-2 text-sm dark:bg-gray-800 dark:text-gray-400 hover:dark:bg-gray-600 transition-all hover:bg-gray-200"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-0"
                    value="Global"
                  >
                    Global
                  </button>
                  {continents.map((continent, i) => (
                    <button
                      onClick={(e) => {
                        setFilterByContinent(e.target.value);
                        setShowContinent(false);
                      }}
                      href="#"
                      className="w-full text-left text-gray-700 px-4 py-2 text-sm dark:bg-gray-800 dark:text-gray-400 hover:dark:bg-gray-600 transition-all hover:bg-gray-200"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                      key={i}
                      value={continent.continent}
                    >
                      {continent.continent}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className=" dark:bg-gray-800 bg-gray-300 px-4 rounded-md w-full mt-3 text-center py-1 md:w-auto md:mt-0">
          <p
            className=" dark:text-gray-300 text-gray-800 text-sm"
            style={{ textOverflow: "hidden" }}
          >
            <span className="uppercase">{filterByContinent} </span> : Total of
            <span className="font-semibold">
              <span className="px-1">
                {filterByContinent === "Global"
                  ? countries.length
                  : getTotal.length}
              </span>
              Countries
            </span>
          </p>
        </div>
      </div>
      <div className="bg-white shadow-md dark:bg-gray-800 mb-8 rounded-md p-2">
        <div
          // onScroll={() => setShowInfos(false)}
          className="overflow-y-scroll max-h-[440px] scrollbar-hidden"
          id="scroll bar-table"
        >
          <table className="min-w-full  border-collapse w-full border-none ">
            <thead
              className="sticky top-0 z-30"
              style={{ background: "#2D3746" }}
            >
              <tr>
                <th
                  scope="col"
                  className="md:px-3 lg:px-3 pl-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm rounded-tl-md"
                >
                  Top {filterBy} Countries
                </th>
                <th
                  scope="col"
                  className=" rounded-tr-md md:rounded-none lg:rounded-none py-3 md:pr-3 lg:pr-3 text-left text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
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
              {filterByContinent === "Global" ? (
                <Global
                  countries={countries}
                  filterBy={filterBy}
                  setShowInfos={setShowInfos}
                  showInfos={showInfos}
                  // setId={setId}
                  // id={id}
                />
              ) : (
                <Continents
                  countries={countries}
                  filterByContinent={filterByContinent}
                  filterBy={filterBy}
                  setShowInfos={setShowInfos}
                  showInfos={showInfos}
                  // setId={setId}
                  // id={id}
                />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
