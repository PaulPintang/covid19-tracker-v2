import React from "react";

const Status = (props) => {
  const { countries } = props;
  return (
    <div className="bg-white shadow-md dark:bg-gray-800 mb-8 rounded-md p-2">
      <div className="overflow-y-auto ">
        <table className="min-w-full  border-collapse w-full border-none">
          <thead className="sticky top-0 z-100 ">
            <tr>
              <th
                scope="col"
                className="md:px-3 lg:px-3 pl-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm rounded-tl-md"
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
              .slice(0, 1)
              .map((country, i) => (
                <tr key={i} className="border-none">
                  <td className="py-2 pl-3  border-none">
                    <div className="flex items-center gap-3">
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
                      <i className="fa-solid fa-circle-info text-gray-400  text-sm pr-3 pt-[2px] md:hidden lg:hidden cursor-pointer"></i>
                    </div>
                    <div
                      className="transition-all p-2 absolute right-[60px] mt-[-2px] w-24 rounded-md shadow-lg bg-white dark:bg-gray-800 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex="-1"
                    >
                      <div className="w-">
                        <img
                          src={country.countryInfo.flag}
                          alt=""
                          className="w-full rounded-md"
                        />
                      </div>
                      {/* <p className="text-[12px]">{country.country}</p> */}
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
  );
};

export default Status;
