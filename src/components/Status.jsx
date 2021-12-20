import React from "react";

const Status = () => {
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
                Active Status
              </th>
              <th
                scope="col"
                className=" hidden md:table-cell lg:table-cell px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-white shadow-sm"
              >
                Rules
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-white shadow-sm"
              ></th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-white shadow-sm"
              ></th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200 overflow-auto text-gray-700">
            <tr>
              <td className="md:px-2 lg:px-2 py-2 whitespace-nowrap">
                <div className="md:ml-4 lg:ml-4">
                  <p className="truncate text-sm w-44 md:w-80"></p>
                  dsa
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Online
                </span>
              </td>
              dsa
              <td className="hidden md:table-cell lg:table-cell px-6 py-2 whitespace-nowrap">
                <div className="flex flex-col">
                  <small>dsa</small>
                  <small>dsa</small>
                </div>
              </td>
              <td className="hidden md:table-cell lg:table-cell px-6 py-2 whitespace-nowrap">
                <div className="flex flex-col">
                  <small>dsa</small>
                  <small>dsa</small>
                </div>
              </td>
              <td className="hidden md:table-cell lg:table-cell px-6 py-2 whitespace-nowrap">
                dsa
              </td>
              <td className="text-right px-2 md:px-2 lg:px-2 py-2 whitespace-nowrap space-x-2">
                <a
                  href="#view<?php echo $row['id'];?>"
                  data-toggle="modal"
                  className="sm:hidden md:hidden lg:hidden"
                >
                  <i className="fas fa-info text-gray-400 cursor-pointer hover:text-blue-300 transition-all"></i>
                </a>
                <a
                  href="#viewE<?php echo $row['id'];?>"
                  data-toggle="modal"
                  className=" sm:hidden md:hidden lg:hidden text-blue-400 hover:text-white hover:bg-blue-400 w-full px-3 py-1 bg-blue-50 font-semibold rounded transition-colors text-xs"
                >
                  View
                </a>
                <a
                  href="#viewE<?php echo $row['id'];?>"
                  data-toggle="modal"
                  className="hidden sm:inline md:inline lg:inline text-blue-400 hover:text-white hover:bg-blue-400 w-full px-3 py-1 bg-blue-50 font-semibold rounded transition-colors text-xs"
                >
                  View More
                </a>
                <a href="#edit<?php echo $row['id'];?>" data-toggle="modal">
                  <i className="far fa-edit text-gray-400 cursor-pointer hover:text-blue-300 transition-all"></i>
                </a>
              </td>
              <td>dsa</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Status;
