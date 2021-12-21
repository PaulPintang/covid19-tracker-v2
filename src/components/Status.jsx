import React from "react";

const Status = (props) => {
  const { countries } = props;
  return (
    <div className="bg-white dark:bg-gray-800 mb-20 rounded-md">
      {/* <div className="flex justify-between items-center pb-2">
        <h1 className="font-medium text-gray-700  " styke="top:40px">
          BUPC <span className="text-yellow-400">Events</span>
        </h1>
        <a
          href="#add"
          data-toggle="modal"
          className="py-1 px-3 bg-yellow-400 rounded text-white hover:bg-yellow-300 transition-all"
        >
          <div className="flex items-center gap-2">
            <div>
              <i className="fas fa-plus"></i>
            </div>
            <div>
              <span>Add event</span>
            </div>
          </div>
        </a>
      </div> */}
      <div className="overflow-y-auto example">
        <table className="min-w-full divide-y dark:divide-gray-800 border-collapse w-full border-none">
          <thead className="sticky top-0 ">
            <tr>
              <th
                scope="col"
                className="md:px-3 lg:px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm rounded-tl-md"
              >
                Countries
              </th>
              <th
                scope="col"
                className="hidden md:table-cell lg:table-cell py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
              >
                Total Cases
              </th>
              <th
                scope="col"
                className="hidden md:table-cell lg:table-cell px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
              >
                Active Cases
              </th>
              <th
                scope="col"
                className=" hidden md:table-cell lg:table-cell px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
              >
                Recovered
              </th>
              <th
                scope="col"
                className=" hidden md:table-cell lg:table-cell px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
              >
                Today Recovered
              </th>
              <th
                scope="col"
                className=" hidden md:table-cell lg:table-cell px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
              >
                Deaths
              </th>
              <th
                scope="col"
                className="hidden md:table-cell lg:table-cell px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm rounded-tr-md"
              >
                Today Deaths
              </th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200 overflow-auto text-gray-700">
            {countries
              .sort((a, b) => b.cases - a.cases)
              .slice(0, 5)
              .map((country) => (
                <tr className="border-none">
                  <td className="py-2 pl-3  border-none">
                    <div className="flex items-center gap-3">
                      <div class="w-7">
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
                  <td className="dark:text-gray-400 py-2 pl-3">
                    {country.cases}
                  </td>
                  <td className="dark:text-gray-400 py-2 pl-3">
                    {country.active}
                  </td>
                  <td className="dark:text-gray-400 py-2 pl-3">
                    {country.recovered}
                  </td>
                  <td className="dark:text-gray-400 py-2 pl-3">
                    {country.todayRecovered}
                  </td>
                  <td className="dark:text-gray-400 py-2 pl-3">
                    {country.deaths}
                  </td>
                  <td className="dark:text-gray-400 py-2 pl-3">
                    {country.todayDeaths}
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
