import React, { useState, useEffect } from "react";
import axios from "axios";
import Highcharts from "highcharts";
import Exporting from "highcharts/modules/exporting";
Exporting(Highcharts);

const WeeklyChart = () => {
  const [weekly, setWeekly] = useState([]);
  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/historical/India?lastdays=7")
      .then((res) => {
        setWeekly(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    new Highcharts.chart("weekly", {
      title: {
        text: `${weekly.country} Weekly Covid-19 Cases`,
      },

      subtitle: {
        text: "Source: thesolarfoundation.com",
      },

      yAxis: {
        title: {
          text: "Covid-19 Cases",
        },
      },

      xAxis: {
        accessibility: {
          rangeDescription: "",
        },
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
          pointStart: 2022,
        },
      },

      series: [
        {
          name: "New",
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
        },
        {
          name: "Active",
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
        },
        {
          name: "Recovered",
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
        },
        {
          name: "Deaths",
          data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
        },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom",
              },
            },
          },
        ],
      },
    });
  }, []);

  return (
    <div>
      <div id="weekly"></div>
    </div>
  );
};

export default WeeklyChart;
