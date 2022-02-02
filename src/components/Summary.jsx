import React, { useState } from "react";
import CountUp from "react-countup";
import virus from "../assets/images/virus-sm.png";

const Summary = (props) => {
  // destructure array as props
  const { continents, total } = props;
  // state
  const [continentData, setContinentData] = useState(0);
  // {
  //   id: 1,
  //   name: "Joe",
  //   type: "admin",
  // },

  const handler = (e) => {
    setContinentData(e.target.value);
  };
  console.log(continentData);
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
              multiple={false}
              className="font-semiboldtext-gray-800 dark:text-gray-300 bg-white dark:bg-opacity-0 focus:outline-none cursor-pointer"
              style={{ paddingBottom: 2 }}
              value={continentData}
              onChange={handler}
            >
              <option className="dark:bg-gray-800" value="Global">
                Global
              </option>
              {continents.map((item) => (
                <option
                  className="dark:bg-gray-800"
                  value={(item.active, item.recovered, item.deaths)}
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
                end={total.active}
                duration={1}
                formattingFn={(total) => total.toLocaleString()}
              />
              {/* {continentData.map((data) => (
                <div key={data.id}>
                  <p>{data.active}</p>
                  <p>{data.recovered}</p>
                  <p>{data.deaths}</p>
                </div>
              ))} */}
              {/* {continentData} */}
            </p>
            <small className="text-yellow-300 text-sm">
              + {total.todayCases} today
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
                end={total.recovered}
                duration={1}
                formattingFn={(total) => total.toLocaleString()}
              />
            </p>
            <small className="text-green-300 text-sm">
              + {total.todayRecovered} today
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
                end={total.deaths}
                duration={1}
                formattingFn={(total) => total.toLocaleString()}
              />
            </p>
            <small className="text-red-300 text-sm">
              + {total.todayDeaths} today
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
