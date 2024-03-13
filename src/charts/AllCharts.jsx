
import PolarChart from './PolarChart';
import DoughnutChart from './DoughnutChart';
import BarChart from './BarChart';
import LineChart from './LineChart';
import RadarChart from './RadarChart';
import PieChart from './PieChart';
import { useData } from '../Context/DataContext';

export default function AllCharts() {

  const { mainData, ChangeChart } = useData(); // Swithing Data Came from DataContext.jsx

  const chartStyle = {
    border: "2px solid black",
    padding: "10px",
    margin: "5px",
  };

  return (
    // Showing when Data is Loaded
    <div>
      {mainData !== "" ? (
        <div>
          {ChangeChart === "PolarChart" && ( // When Selecting Doughnut Chart
            <div
              style={
                (chartStyle, { display: "flex", justifyContent: "center" })
              }
            >
              <PolarChart serverData={mainData} style={chartStyle} />
            </div>
          )}
          {ChangeChart === "DoughnutChart" && ( // When Selecting Doughnut Chart
            <div style={{ display: "flex", justifyContent: "center" }}>
              <DoughnutChart serverData={mainData} style={chartStyle} />
            </div>
          )}
          {ChangeChart === "BarChart" && ( // When Selecting Bar Chart
            <div style={chartStyle}>
              <BarChart serverData={mainData} style={chartStyle} />
            </div>
          )}
          {ChangeChart === "LineChart" && ( // When Selecting Line Chart
            <div style={chartStyle}>
              <LineChart serverData={mainData} style={chartStyle} />
            </div>
          )}
          {ChangeChart === "RadarChart" && ( // When Selecting Radar Chart
            <div style={{ display: "flex", justifyContent: "center" }}>
              <RadarChart serverData={mainData} style={chartStyle} />
            </div>
          )}
          {ChangeChart === "PieChart" && ( // When Selecting Pie Chart
            <div style={{ display: "flex", justifyContent: "center" }}>
              <PieChart serverData={mainData} style={chartStyle} />
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
