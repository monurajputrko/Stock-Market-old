

import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { randomString } from './Constant';

const CandlestickChart = () => {
  const [data, setStockData] = useState([]);

  const fetchStockData = async (symbol) => {
    // https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&
            try {
              const response = await fetch(`${process.env.REACT_APP_API}query?function=FX_DAILY&from_symbol=USD&to_symbol=INR&apikey=${randomString}`)
              const data = await response.json()
              
              const weeklyTimeSeries = data['Time Series FX (Daily)'];
              const dates = Object.keys(weeklyTimeSeries);
              const datesData = [];
              dates.forEach((date) => {
                  const weeklyData = weeklyTimeSeries[date];
                  const dateData = {
                    date: date,
                    open: weeklyData['1. open'],
                    high: weeklyData['2. high'],
                    low: weeklyData['3. low'],
                    close: weeklyData['4. close'],
                    volume: weeklyData['5. volume']
                  };
                  datesData.push(dateData);
                });
              console.log(data," And ",datesData)
              setStockData(datesData)
            } catch (error) {
              console.log("Error = ",error)
            }
          }
      
          useEffect(() => {
            fetchStockData(); 
          }, [])
  const [chartOptions, setChartOptions] = useState({
    series: [{
      data: data.map(({ date, open, high, low, close }) => ({
        x: new Date(date).getTime(),
        y: [open, high, low, close]
      }))
    }],
    options: {
      chart: {
        type: 'candlestick',
        height: '100%',
        toolbar: {
          show: false
        }
      },
      title: {
        text: 'Candlestick Chart',
        align: 'left'
      },
      xaxis: {
        type: 'datetime',
        labels: {
          formatter: function(value) {
            return new Date(value).toLocaleDateString();
          }
        }
      },
      yaxis: {
        tooltip: {
          enabled: true
        }
      },
      tooltip: {
        x: {
          formatter: function(value) {
            return new Date(value).toLocaleDateString();
          }
        }
      }
    }
  });

  useEffect(() => {
    setChartOptions((prevOptions) => ({
      ...prevOptions,
      series: [{
        data: data.map(({ date, open, high, low, close }) => ({
          x: new Date(date).getTime(),
          y: [open, high, low, close]
        }))
      }]
    }));
  }, [data]);

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <ReactApexChart
        options={chartOptions.options}
        series={chartOptions.series}
        type="candlestick"
        height="100%"
      />
    </div>
  );
};

export default CandlestickChart;
