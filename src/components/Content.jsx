import React, { useState, useEffect } from "react";
import axios from "axios";
import virusLg from "../assets/images/virus-lg.svg";

const Content = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/all")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div
      className="flex items-center justify-between"
      style={{ height: "calc(100vh - 7rem)" }}
    >
      <div className="space-y-3">
        <div className="dark:text-gray-300 space-y-3">
          <h1 class="text-5xl">Total Cases: 172,344,534</h1>
          <div>
            <p className="text-3xl font-light">Covid-19 Worldwide Status</p>
            <p className="font-medium italic text-gray-500">
              As of December 17, 2021
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-3xl font-light dark:text-gray-300">
            What is Covid-19 ?
          </p>
          <p className="max-w-md text-gray-600">
            Coronavirus disease (Covid-19) is an infectious disease caused by a
            newly discovered coronavirus. Most people who fall sick with
            COVID-19 will experience mild to moderate symptoms and recover
            without special treatment.
          </p>
        </div>
      </div>
      <div style={{ width: 380 }}>
        <img src={virusLg} alt="" className="w-full rotate" />
      </div>
    </div>
  );
};

export default Content;
