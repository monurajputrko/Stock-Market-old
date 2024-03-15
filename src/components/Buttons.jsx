import React from 'react'
import { Button } from 'react-bootstrap';
import { useData } from '../Context/DataContext';

export default function Buttons() {

     const { setChangeChart } = useData(); // Data Came from DataContext

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap:"5px",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/*  When Selecting Line Chart */}
        <Button
          variant="info"
          onClick={() => {
            setChangeChart("LineChart");
          }}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Line Chart
        </Button>

        {/*  When Selecting Radar Chart */}
        {/* <Button
          variant="info"
          onClick={() => {
            setChangeChart("RadarChart");
          }}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Radar chart
        </Button> */}

        {/*  When Selecting Bar Chart */}
        <Button
          variant="info"
          onClick={() => {
            setChangeChart("BarChart");
          }}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Bar Chart
        </Button>

        {/*  When Selecting Doughnut Chart */}
        {/* <Button
          variant="info"
          onClick={() => {
            setChangeChart("DoughnutChart");
          }}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Doughnut
        </Button> */}

        {/*  When Selecting Polar Chart */}
        {/* <Button
          variant="info"
          onClick={() => {
            setChangeChart("PolarChart");
          }}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Polar Chart
        </Button> */}

        {/*  When Selecting Pie Chart */}
        {/* <Button
          variant="info"
          onClick={() => {
            setChangeChart("PieChart");
          }}
          style={{ marginLeft: "1vw", width: "10rem" }}
        >
          Pie Chart
        </Button> */}
      </div>
    </div>
  );
}
