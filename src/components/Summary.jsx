import React from "react";
import CountUp from "react-countup";
import virus from "../assets/images/virus-sm.png";

const Summary = (props) => {
  // destructure props
  const {
    active,
    recovered,
    deaths,
    todayCases,
    todayRecovered,
    todayDeaths,
    continents,
  } = props;
  return (
    <div
      className="shadow-md rounded-md px-7 py-5 mx-auto mt-3 dark:bg-gray-800 bg-white relative bottom-14"
      style={{ maxWidth: 830 }}
    >
      <div className="flex items-center justify-between mx-auto ">
        <div className="flex items-center gap-3 ">
          <div className="w-12">
            <img src={virus} alt="" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Status</p>
            <select
              name=""
              id=""
              className="font-semiboldtext-gray-800 dark:text-gray-300 bg-white dark:bg-opacity-0 focus:outline-none cursor-pointer"
              style={{ paddingBottom: 2 }}
            >
              <option className="dark:bg-gray-800" value="">
                Global
              </option>
              {continents.map((item) => (
                <option
                  className="dark:bg-gray-800"
                  key={item.length}
                  value={item.continent}
                >
                  {item.continent}
                </option>
              ))}
            </select>
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
                end={active}
                duration={1}
                formattingFn={(total) => total.toLocaleString()}
              />
            </p>
            <small className="text-yellow-300 text-sm">
              + {todayCases} today
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
                end={recovered}
                duration={1}
                formattingFn={(total) => total.toLocaleString()}
              />
            </p>
            <small className="text-green-300 text-sm">
              + {todayRecovered} today
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
                end={deaths}
                duration={1}
                formattingFn={(total) => total.toLocaleString()}
              />
            </p>
            <small className="text-red-300 text-sm">
              + {todayDeaths} today
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
