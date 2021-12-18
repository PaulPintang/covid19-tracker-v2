import React from "react";
import CountUp from "react-countup";
import virus from "../assets/images/virus-sm.png";

const Summary = (props) => {
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
                end={props.active}
                duration={1}
                formattingFn={(total) => total.toLocaleString()}
              />
            </p>
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
                end={props.recovered}
                duration={1}
                formattingFn={(total) => total.toLocaleString()}
              />
            </p>
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
                end={props.deaths}
                duration={1}
                formattingFn={(total) => total.toLocaleString()}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
