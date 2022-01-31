import React from "react";

const Select = () => {
  return (
    <div>
      <h1 className="text-2xl dark:text-white pb-7">Countries</h1>
      <div className="flex justify-between">
        <div>
          <input type="text" />
        </div>
        <div>
          <select name="" id="">
            <option value="">Filter by Region</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
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
