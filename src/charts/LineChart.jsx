import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ serverData }) => {
  // Extract dates and closing prices
  console.log(serverData)
  const stockData = serverData || [];
  const dates = stockData.map((data) => data.date).reverse(); // Reverse to show recent dates first
  const closingPrices = stockData.map((data) => parseFloat(data.close));

  // Create datasets for the chart
  const datasets = [{
    label: 'Closing Prices',
    data: closingPrices,
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }];

  return (
    <div style={{ height: "50vh" }}>
      <Line
        data={{
          labels: dates,
          datasets: datasets,
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        }}
        height={300}
      />
    </div>
  );
};

export default LineChart;
