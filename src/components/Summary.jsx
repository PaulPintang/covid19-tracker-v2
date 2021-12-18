import React from "react";
import CountUp from "react-countup";
import virus from "../assets/images/virus-sm.png";

const Summary = (props) => {
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
            <p>Total Active Cases</p>
            <p>
              <CountUp
                end={props.active}
                duration={1}
                formattingFn={(total) => total.toLocaleString()}
              />
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12">
            <img src={virus} alt="" />
          </div>
          <div>
            <p>Total Recovered</p>
            <p>
              <CountUp
                end={props.recovered}
                duration={1}
                formattingFn={(total) => total.toLocaleString()}
              />
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12">
            <img src={virus} alt="" />
          </div>
          <div>
            <p>Total Deaths</p>
            <p>
              <CountUp
                end={props.deaths}
                duration={1}
                formattingFn={(total) => total.toLocaleString()}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
