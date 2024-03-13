import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ serverData }) => {
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
    backgroundColor: getColors(index, item.data.length)
  }));

  // Create labels for the chart
  const labels =
    data.length > 0 ? data[0].data.map((entry) => entry.label) : [];
  
  console.log(labels);
  console.log(datasets);

  return (
    <div style={{ height: "50vh" }}>
      <Bar
        data={{
          labels: labels,
          datasets: datasets,
        }}
        options={{
          maintainAspectRatio: false,
          scales: {
            x: {
                display: true,
            }
          },
        }}
      />
    </div>
  );
};

const getColors = (index, length) => {
  const strongColors = [
    "rgba(255, 69, 0, 0.6)", // Orange Red
    "rgba(0, 191, 255, 0.6)", // Deep Sky Blue
    "rgba(255, 215, 0, 0.6)", // Gold
    "rgba(72, 209, 204, 0.6)", // Medium Turquoise
    "rgba(255, 165, 0, 0.6)", // Orange
    "rgba(147, 112, 219, 0.6)", // Medium Purple
    "rgba(255, 105, 180, 0.6)", // Hot Pink
    "rgba(70, 130, 180, 0.6)", // Steel Blue
    "rgba(85, 107, 47, 0.6)", // Dark Olive Green
    "rgba(255, 0, 255, 0.6)", // Fuchsia
  ];

  const backgroundColors = [];
  for (let i = 0; i < length; i++) {
    backgroundColors.push(strongColors[(index + i) % strongColors.length]);
  }

  return backgroundColors;
};


export default BarChart;
