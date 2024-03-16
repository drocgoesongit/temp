import React from "react";
import "./App.css";
import ChartCard from "./ChartCard";
import { Chart, ArcElement } from "chart.js";
import PieChart from "./PieChart";
Chart.register(ArcElement);

function App() {
  return (
    <div className="App">
      <div className="charts-container">
        <ChartCard
          title="Sub-Category"
          description="The assets are ditributed between equity and cash & equivalents"
          chart={<PieChart />}
        />
        <ChartCard
          title="Sub-Category"
          description="The assets are ditributed between equity and cash & equivalents"
          chart={<PieChart />}
        />
        <ChartCard
          title="Sub-Category"
          description="The assets are ditributed between equity and cash & equivalents"
          chart={<PieChart />}
        />
      </div>
    </div>
  );
}

export default App;
