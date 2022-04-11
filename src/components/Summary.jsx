import React, { useState, useCallback } from "react";
import CountUp from "react-countup";
import virus from "../assets/images/virus-sm.png";

const Summary = ({ continents, total }) => {
  // state
  const [select, setSelect] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState("Global");

  // destructure
  let [active, todayActive, recovered, todayRecovered, deaths, todayDeaths] =
    "";

  // get details based on selected continent
  continents
    .filter((region) => region.continent === selectedContinent)
    .map(
      (region) => (
        (active = region.active),
        (todayActive = region.todayCases),
        (recovered = region.recovered),
        (todayRecovered = region.todayRecovered),
        (deaths = region.deaths),
        (todayDeaths = region.todayDeaths)
      )
    );

  return (
    <div className="shadow-md rounded-md px-7 py-5  md:mx-auto lg:mx-auto mt-3 dark:bg-gray-800 bg-white relative  bottom-14 h-full w-[87%] mx-auto md:w-[830px] lg:w-[830px]">
      <div className="md:flex lg:flex items-center justify-between mx- ">
        <div className="flex items-center gap-3 ">
          <div className="w-12">
            <img src={virus} alt="" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Status</p>
            <div className="relative inline-block text-left w-full">
              {/* Dropdown */}
              <div>
                <button
                  type="button"
                  className="flex justify-between w-44 md:w-36 lg:w-36 rounded-md py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none border-opacity-30 dark:bg-gray-800 dark:text-gray-400"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => setSelect(!select)}
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
              {/* selection/map the continents */}
              {select && (
                <div
                  className="transition-all h-auto py-2 overflow-auto origin-top-right absolute z-50 right-0 mt-2 w-full rounded-md shadow-lg bg-white dark:bg-gray-800 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex="-1"
                >
                  <div className="py-1" role="none">
                    <button
                      href="#"
                      className="w-full text-left text-gray-700 block px-4 py-1 text-sm dark:bg-gray-800 dark:text-gray-400 hover:dark:bg-gray-600 transition-all hover:bg-gray-200"
                      role="menuitem"
                      tabIndex="-1"
                      id="menu-item-0"
                      onClick={() => {
                        setSelect(!select);
                        setSelectedContinent("Global");
                      }}
                    >
                      Global
                    </button>
                    {continents.map((item, i) => (
                      <button
                        href="#"
                        className="w-full text-left text-gray-700 block px-4 py-1 text-sm dark:bg-gray-800 dark:text-gray-400 hover:dark:bg-gray-600 transition-all hover:bg-gray-200"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                        key={i}
                        value={item.continent}
                        onClick={() => {
                          setSelect(!select);
                          setSelectedContinent(item.continent);
                        }}
                      >
                        {item.continent}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-12">
            <img src={virus} alt="" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Active Cases</p>
            <p className="font-semibold text-gray-800 dark:text-gray-300">
              <CountUp
                end={selectedContinent === "Global" ? total.active : active}
                duration={1}
                preserveValue={true}
                formattingFn={useCallback(
                  (total) => total.toLocaleString(),
                  []
                )}
              />
            </p>
            <small className="text-yellow-300 text-sm">
              +
              <span className="px-1">
                {selectedContinent === "Global"
                  ? total.todayCases.toLocaleString()
                  : todayActive.toLocaleString()}
              </span>
              today
            </small>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-12">
            <img src={virus} alt="" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Recovered</p>
            <p className="font-semibold text-gray-800 dark:text-gray-300">
              <CountUp
                end={
                  selectedContinent === "Global" ? total.recovered : recovered
                }
                duration={1}
                formattingFn={useCallback(
                  (total) => total.toLocaleString(),
                  []
                )}
              />
            </p>
            <small className="text-green-300 text-sm">
              +{" "}
              <span className="px-1">
                {selectedContinent === "Global"
                  ? total.todayRecovered.toLocaleString()
                  : todayRecovered.toLocaleString()}
              </span>{" "}
              today
            </small>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-12">
            <img src={virus} alt="" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Deaths</p>
            <p className="font-semibold text-gray-800 dark:text-gray-300">
              <CountUp
                end={selectedContinent === "Global" ? total.deaths : deaths}
                duration={1}
                formattingFn={useCallback(
                  (total) => total.toLocaleString(),
                  []
                )}
              />
            </p>
            <small className="text-red-300 text-sm">
              +{" "}
              <span className="px-1">
                {selectedContinent === "Global"
                  ? total.todayDeaths.toLocaleString()
                  : todayDeaths.toLocaleString()}
              </span>{" "}
              today
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
