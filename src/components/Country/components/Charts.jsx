import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Charts = ({ countries, selectedCountry }) => {
  const [historicalData, setHistoricalData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://disease.sh/v3/covid-19/historical?lastdays=10")
  //     .then((res) => {
  //       setHistoricalData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const SelectedCountry = historicalData.filter(
    (country) => country.country === selectedCountry
  );
  //   const mapData = SelectedCountry.map(
  //     (item, i) => (
  //       {
  //         total: item.total,
  //       },
  //       {
  //         Active: item.active,
  //       }
  //     )
  //   );
  //   console.log(countries.country);
  return (
    <LineChart
      width={500}
      height={300}
      data={historicalData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={SelectedCountry} />
      <YAxis />
      <Tooltip />
      <Legend />
      {/* {historicalData.map((country) => (
        <Line
          type="monotone"
          dataKey={country.timeline}
          stroke="#FDE047"
          activeDot={{ r: 8 }}
        />
      ))} */}
    </LineChart>
  );
};

export default Charts;
