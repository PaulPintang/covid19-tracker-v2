import React from "react";
import virus from "../assets/images/virus-sm.png";

const Summary = () => {
  return (
    <div class="shadow-md p-4 mx-auto">
      <div className="flex items-center justify-between w-auto">
        <div className="flex items-center gap-3">
          <div className="w-12">
            <img src={virus} alt="" />
          </div>
          <div>
            <p>Status</p>
            <p>Global</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12">
            <img src={virus} alt="" />
          </div>
          <div>
            <p>Status</p>
            <p>Global</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12">
            <img src={virus} alt="" />
          </div>
          <div>
            <p>Status</p>
            <p>Global</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12">
            <img src={virus} alt="" />
          </div>
          <div>
            <p>Status</p>
            <p>Global</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
