import React, { useEffect } from 'react'
import { PolarArea } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const PolarChart = ({ serverData }) => {
  // Get unique values for each field
  const uniqueValues = {
    sector: [],
    country: [],
    region: [],
    source: [],
    topic: [],
    pestle: [],
    intensity: [],
    likelihood: [],
    relevance: [],
    year: [],
    city: [],
  };

  serverData.forEach((item) => {
    Object.keys(uniqueValues).forEach((field) => {
      if (!uniqueValues[field].includes(item[field]) && item[field] !== "") {
        uniqueValues[field].push(item[field]);
      }
    });
  });

  // Count the number of projects for each unique value
  const data = Object.keys(uniqueValues).map((field) => ({
    label: field,
    data: uniqueValues[field].map((value) => ({
      label: value,
      count: serverData.filter((item) => item[field] === value).length,
    })),
  }));

  // Create datasets for the chart
  const datasets = data.map((item, index) => ({
    label: item.label,
    data: item.data.map((entry) => entry.count),
  }));

  // Create labels for the chart
  const labels =
    data.length > 0 ? data[0].data.map((entry) => entry.label) : [];

  return (
    <div style={{ height: "50vh", width: "45vw" }}>
      <PolarArea
        data={{
          labels: labels,
          datasets: datasets,
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              type: "linear",
              beginAtZero: true,
            },
          },
        }}
        height={300}
      />
    </div>
  );
}

export default PolarChart