import React from "react";
const ChartCard = ({ title, description, chart }) => {
  return (
    <div className="card">
      <h1 className="heading">{title}</h1>
      <p className="description">{description}</p>
      <div>{chart}</div>
    </div>
  );
};

export default ChartCard;
