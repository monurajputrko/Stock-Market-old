import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ serverData }) => {
  // Extract dates, opening prices, and closing prices
  console.log(serverData)
  const stockData = serverData || [];
  const dates = stockData.map((data) => data.date).reverse(); // Reverse to show recent dates first
  const openingPrices = stockData.map((data) => parseFloat(data.open));
  const closingPrices = stockData.map((data) => parseFloat(data.close));
  const HighestPrices = stockData.map((data) => parseFloat(data.high));
  const LowestPrices = stockData.map((data) => parseFloat(data.low));

  // Create datasets for the chart
  const datasets = [
    {
      label: 'Opening Prices',
      data: openingPrices,
      backgroundColor: '#198754',
      borderColor: '#198754',
      borderWidth: 1,
    },
    {
      label: 'Closing Prices',
      data: closingPrices,
      backgroundColor: '#DC3545',
      borderColor: '#DC3545',
      borderWidth: 3,
    },
    {
      label: 'Lowest Prices',
      data: LowestPrices,
      backgroundColor: 'yellow',
      borderColor: 'yellow',
      borderWidth: 3,
    },
    {
      label: 'Highest Prices',
      data: HighestPrices,
      backgroundColor: '#31D2F2',
      borderColor: '#31D2F2',
      borderWidth: 3,
    },
  ];

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
