import React from "react";
import "./BarChartCountry.css";
import { Bar } from "react-chartjs-2"; //npm install react-chartjs-2 --save A npm install chart.js --save

function BarChartCountry({ data, country }) {
  const graf = (
    <Bar
      data={{
        labels: ["pozitívni", "vyliečení", "úmrtia"],
        datasets: [
          {
            label: "ľudia",
            backgroundColor: ["red", "green", "black"],
            data: [data.pozitivni, data.vylieceni, data.umrtia]
          }
        ]
      }}
      options={{
        legend: { display: false },
        title: {
          display: true,
          text: `aktuálny stav pre ${country} k ${new Date(
            data.datum
          ).toLocaleDateString()}`
        }
      }}
    />
  );

  return <div>{graf}</div>;
}

export default BarChartCountry;
