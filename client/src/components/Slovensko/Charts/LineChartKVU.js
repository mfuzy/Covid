import React from "react";
import "./LineChartKVU.css";
import { Line } from "react-chartjs-2"; //npm install react-chartjs-2 --save A npm install chart.js --save

function LineChartKVU({ labels, data, data2, data3 }) {
  const graf = (
    <Line
      data={{
        labels: labels,
        datasets: [
          {
            data: data,
            label: "kumulatív pozitívni",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.3)",
            fill: true
          },
          {
            data: data2,
            label: "vyliečení",
            borderColor: "green",
            backgroundColor: "rgba(0, 255, 0, 0.3)",
            fill: true
          },
          {
            data: data3,
            label: "úmrtia",
            borderColor: "black",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            fill: true
          }
        ]
      }}
    />
  );

  return (
    <div>
      <h3>kumulatív pozitívni, vyliečení a úmrtia:</h3>
      {graf}
    </div>
  );
}

export default LineChartKVU;
