import React from 'react';
import {Chart, ArcElement} from 'chart.js'
import { Pie } from 'react-chartjs-2';
import { pieChartData } from './Data';
Chart.register(ArcElement);
const PieChart = () => {
  // Calculate chart height based on screen height
  const screenHeight = window.innerHeight;
  const chartHeight = screenHeight * 0.25; // Adjust the percentage as needed

  // Style object for chart container
  const chartContainerStyle = {
    height: `${chartHeight}px`, // Set chart container height
    marginBottom: '20px' // Add margin at the bottom
  };

  return (
    <div className="card">
      <div className="card-content">
        <h1 className="heading">Asset Allocation</h1>
        <p className="subheading">The assets are distributed between equity & cash</p>
        <div className="chart-container" style={chartContainerStyle}>
          <Pie data={pieChartData} />
        </div>
        <div className="grid-container">
          <h2>Asset Allocation Details</h2>
          <div className="grid">
            {pieChartData.labels.map((label, index) => (
              <div key={label} className="grid-item">
                <div className="color-box" style={{ backgroundColor: pieChartData.datasets[0].backgroundColor[index] }}></div>
                <span>{label}: {pieChartData.datasets[0].data[index]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;