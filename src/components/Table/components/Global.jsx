import React from "react";

const Global = ({
  countries,
  filterBy,
  setShowInfos,
  showInfos,
  setId,
  id,
}) => {
  return countries
    .sort((a, b) => b.cases - a.cases)
    .slice(0, filterBy)
    .map((country, index) => (
      <tr key={index} className="border-none ">
        <td className="py-2 pl-2  border-none">
          <div className="flex items-center gap-3">
            <p>#{index + 1}</p>
            <div className="w-7">
              <img
                src={country.countryInfo.flag}
                alt=""
                className="w-full rounded-md"
              />
            </div>
            <p className="font-medium uppercase text-sm dark:text-gray-300 max-w-[100px]">
              {country.country}
            </p>
          </div>
        </td>
        <td className="dark:text-gray-400 py-2 relative ">
          <div className="flex items-center justify-between ">
            <span>{country.cases.toLocaleString()}</span>
            <i
              onClick={() => {
                // console.log(i);
                // setId(index);
                setShowInfos(index);
              }}
              className="fa-solid fa-circle-info text-gray-400  text-sm pr-3 pt-[2px] md:hidden lg:hidden cursor-pointer"
            ></i>
          </div>
          {/* other info's */}
          {showInfos === index ? (
            <div
              onClick={() => setShowInfos(false)}
              className="transition-all p-2 absolute z-20  right-[28px] mt-[-28px] w-24 rounded-md shadow-2xl bg-white dark:bg-gray-800 focus:outline-none"
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
          ) : (
            ""
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
    ));
};

export default Global;
