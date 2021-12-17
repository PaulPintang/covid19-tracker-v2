import React from "react";
import virus from "../assets/images/virus-sm.png";
import Toggle from "./theme/Toggle";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-28">
      <div class="flex items-center gap-2 h-full">
        <div className="w-11">
          <img src={virus} alt="" className="w-full" />
        </div>
        <div>
          <h1 className="text-gray-800 text-2xl font-medium">
            Covid-19 Tracker
          </h1>
          <small className="italic">
            Covid-19 data source from Worldometers(disease.sh)
          </small>
        </div>
      </div>
      <div>
        <Toggle />
      </div>
    </div>
  );
};

export default Header;
