import React, { useCallback } from "react";
import CountUp from "react-countup";
import virus from "../../../assets/images/virus-sm.png";

const Global = ({ total, continents, selectedContinent }) => {
  // CountUp: formattingFn
  const format = useCallback((total) => {
    return total.toLocaleString();
  }, []);
  return (
    <React.Fragment>
      <div className="flex items-center gap-3">
        <div className="w-12">
          <img src={virus} alt="" />
        </div>
        <div>
          <p className="text-gray-500 text-sm">Total Active Cases</p>
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-300">
              {/* <CountUp
                  end={total.active}
                  duration={1}
                  preserveValue={true}
                  formattingFn={format}
                /> */}
            </p>
            <small className="text-yellow-300 text-sm">
              +
              <span className="px-1">
                {/* {total.todayCases.toLocaleString()} */}
                {/* {total.todayCases} */}
              </span>
              today
            </small>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-12">
          <img src={virus} alt="" />
        </div>
        <div>
          <p className="text-gray-500 text-sm">Total Recovered</p>
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-300">
              {/* <CountUp
                end={total.recovered}
                duration={1}
                preserveValue={true}
                formattingFn={format}
              /> */}
            </p>
            <small className="text-yellow-300 text-sm">
              +
              <span className="px-1">
                {/* {total.todayRecovered.toLocaleString()} */}
                {/* {total.todayRecovered} */}
              </span>
              today
            </small>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-12">
          <img src={virus} alt="" />
        </div>
        <div>
          <p className="text-gray-500 text-sm">Total Deaths</p>
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-300">
              {/* <CountUp
                end={total.deaths}
                duration={1}
                preserveValue={true}
                formattingFn={format}
              /> */}
            </p>
            <small className="text-yellow-300 text-sm">
              +
              <span className="px-1">
                {/* {total.todayDeaths.toLocaleString()} */}
                {/* {total.todayDeaths} */}
              </span>
              today
            </small>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Global;
