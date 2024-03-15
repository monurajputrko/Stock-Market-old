
import PolarChart from './PolarChart';
import DoughnutChart from './DoughnutChart';
import BarChart from './BarChart';
import LineChart from './LineChart';
import RadarChart from './RadarChart';
import PieChart from './PieChart';
import { useData } from '../Context/DataContext';
import { useEffect, useState } from 'react';
import { randomString } from './Candles/Constant';

export default function AllCharts() {

  const { ChangeChart,stock } = useData(); // Swithing Data Came from DataContext.jsx
 
  const chartStyle = {
    border: "2px solid black",
    padding: "10px",
    margin: "5px",
  };

  return (
    // Showing when Data is Loaded
    <div>
      {stock !== "" ? (
        <div>
         
          {ChangeChart === "BarChart" && ( // When Selecting Bar Chart
            <div style={chartStyle}>
              <BarChart serverData={stock} style={chartStyle} />
            </div>
          )}
          {ChangeChart === "LineChart" && ( // When Selecting Line Chart
            <div style={chartStyle}>
              <LineChart serverData={stock} style={chartStyle} />
            </div>
          )}
        
        </div>
      ) : (
        // Showing when Data is in Loading state
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "50px",
          }}
        >
          <h1>Loading....</h1>
        </div>
      )}
    </div>
  );
}
