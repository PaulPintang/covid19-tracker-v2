import React from "react";
import CountUp from "react-countup";
import virus from "../assets/images/virus-sm.png";

const Summary = (props) => {
  // destructure props
  const { active, recovered, deaths, todayCases, todayRecovered, todayDeaths } =
    props;
  return (
    <div
      class="shadow-md rounded-sm p-7 mx-auto mt-3"
      style={{ maxWidth: 830 }}
    >
      <div className="flex items-center justify-between mx-auto ">
        <div className="flex items-center gap-3 ">
          <div className="w-12">
            <img src={virus} alt="" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Status</p>
            <p className="font-semiboldtext-gray-800 dark:text-gray-300">
              Global
            </p>
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
