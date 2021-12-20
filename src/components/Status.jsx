import React from "react";

const Status = (props) => {
  const { countries } = props;
  return (
    <div className="bg-white mb-20">
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
        <table className="min-w-full divide-y divide-gray-200 border-collapse w-full">
          <thead className="sticky top-0">
            <tr>
              <th
                scope="col"
                className="md:px-6 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-white shadow-sm"
              >
                Countries
              </th>
              <th
                scope="col"
                className="hidden md:table-cell lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-white shadow-sm"
              >
                Total Cases
              </th>
              <th
                scope="col"
                className="hidden md:table-cell lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-white shadow-sm"
              >
                Active Cases
              </th>
              <th
                scope="col"
                className=" hidden md:table-cell lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-white shadow-sm"
              >
                Recovered
              </th>
              <th
                scope="col"
                className=" hidden md:table-cell lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-white shadow-sm"
              >
                Today Recovered
              </th>
              <th
                scope="col"
                className=" hidden md:table-cell lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-white shadow-sm"
              >
                Deaths
              </th>
              <th
                scope="col"
                className=" hidden md:table-cell lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-white shadow-sm"
              >
                Today Deaths
              </th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200 overflow-auto text-gray-700">
            {countries.map((country) => (
              <tr>
                <td class="py-2 px-6 uppercase">{country.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Status;
