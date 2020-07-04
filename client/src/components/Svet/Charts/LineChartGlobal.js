import React from "react";
import "./LineChartGlobal.css";
import { Line } from "react-chartjs-2"; //npm install react-chartjs-2 --save A npm install chart.js --save

function LineChartGlobal({ data }) {
  const graf = (
    <Line
      data={{
        labels: data.map((i, k) => {
          return i.datum;
        }),
        datasets: [
          {
            data: data.map((i, k) => {
              return i.pozitivni;
            }),
            label: "pozitívni",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true
          },
          {
            data: data.map((i, k) => {
              return i.umrtia;
            }),
            label: "úmrtia",
            borderColor: "black",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            fill: true
          }
        ]
      }}
    />
  );

  return (
    <div>
      <h3>pozitívni a úmrtia globálne:</h3>
      {graf}
    </div>
  );
}

export default LineChartGlobal;
