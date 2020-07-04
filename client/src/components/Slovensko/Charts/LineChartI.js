import React from "react";
import "./LineChartI.css";
import { Line } from "react-chartjs-2"; //npm install react-chartjs-2 --save A npm install chart.js --save

function LineChartI({ labels, data }) {
  const graf = (
    <Line
      data={{
        labels: labels,
        datasets: [
          {
            data: data,
            label: "aktuálne chorí",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.3)",
            fill: true
          }
        ]
      }}
    />
  );

  return (
    <div>
      <h3>chorí (pozitívni - vyliečení - úmrtia):</h3>
      {graf}
    </div>
  );
}

export default LineChartI;
