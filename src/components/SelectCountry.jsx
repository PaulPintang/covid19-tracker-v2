import React from "react";
// import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Select = () => {
  return (
    <div>
      <h1 className="text-2xl dark:text-white pb-7">Countries</h1>
      <div className="flex justify-between">
        <div>
          <input
            className="px-3 py-3 w-96 rounded-md text-sm focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:focus:border-gray-800 dark:border-opacity-20 focus:border-opacity-60 border border-gray-200 border-opacity-40 shadow-sm"
            type="text"
            placeholder="Search for a Country"
          />
        </div>
        <div>
          {/* <select
            className="px-4 text-gray-600 py-3 w-full rounded-md text-sm focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:focus:border-gray-800 dark:border-opacity-20 focus:border-opacity-60 border border-gray-200 border-opacity-40 shadow-sm bg-white"
            name=""
            id=""
          >
            <option className="bg-white shadow-sm" value="">
              Filter by Region
            </option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select> */}
          <Select options={options} />
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="selection">test</div>
        <div className="content">test</div>
      </div>
    </div>
  );
};

export default Select;
