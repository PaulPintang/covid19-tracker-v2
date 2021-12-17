import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div class="flex items-center gap-2">
        <p>img</p>
        <div>
          <h1>Covid-19 TRacker</h1>
          <p>Covid-19 data source from Worldometers(disease.sh)</p>
        </div>
      </div>
      <div>toggle</div>
    </div>
  );
};

export default Header;
