import React from "react";
import "./LineChartTP.css";
import { Line } from "react-chartjs-2"; //npm install react-chartjs-2 --save A npm install chart.js --save

function LineChartTP({ labels, data, data2 }) {
  const graf = (
    <Line
      data={{
        labels: labels,
        datasets: [
          {
            data: data,
            label: "pozitívni",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.3)",
            fill: true
          },
          {
            data: data2,
            label: "testy",
            borderColor: "blue",
            backgroundColor: "rgba(0, 0, 255, 0.3)",
            fill: true
          }
        ]
      }}
    />
  );

  return (
    <div>
      <h3>testy a pozitívni:</h3>
      {graf}
    </div>
  );
}

export default LineChartTP;
