import React from "react";
import { Chart, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";
import { pieChartData } from "./Data";
Chart.register(ArcElement);

const PieChart = () => {
  return (
    <>
      <Pie data={pieChartData} />
      <div className="legends">
        {pieChartData.labels.map((label, index) => (
          <div key={label} className="legend">
            <div
              className="color-box"
              style={{
                backgroundColor:
                  pieChartData.datasets[0].backgroundColor[index],
              }}
            ></div>
            <p>
              {label}: <span>{pieChartData.datasets[0].data[index]}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PieChart;
