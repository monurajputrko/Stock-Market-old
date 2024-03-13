// import React, { useEffect, useMemo, useState } from 'react'
// // import { fetchStockData } from './Service'
// import { formatStockData } from './Utils'
// import ReactApexChart from 'react-apexcharts'
// import { candleStickOptions } from './Constant'

// const LiveChart = ({ symbol }) => {
//     
//     // 5GOBW4O5PCAITOW9
//     // FC0JNOBG5PUO0599
//     // FC0JNOBG5PUO0599

   
//     // const seriesData = useMemo(() => formatStockData(stockData), [stockData])

//     // const formattedData = []

//     // if (stockData['Weekly Adjusted Time Series']) {
//     //     Object.entries(
//     //         stockData['Weekly Adjusted Time Series']
//     //     ).map(
//     //         ([key, value]) => {
//     //             formattedData.push({
//     //                 x: key,
//     //                 y: [
//     //                     value['1. open'],
//     //                     value['2. high'],
//     //                     value['3. low'],
//     //                     value['4. close'],
//     //                 ]
//     //             })
//     //         }
//     //     )
//     // }
 
//     // console.log(formattedData);
//     return (
//         <ReactApexChart
//             series={
//                 [
//                     {
//                         data: stockData
//                     }
//                 ]
//             }
//             options={candleStickOptions}
//             type="candlestick"
//         />
//     )
// }

// export default LiveChart


// import React, { useEffect, useState } from 'react';
// import ReactApexChart from 'react-apexcharts';

// const CandlestickChart = () => {
//     const [data, setStockData] = useState([]);
//     const fetchStockData = async (symbol) => {
//         try {
//           const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=3A3Y63R9YQSXN4BS`)
//           const data = await response.json()
          
//           const weeklyTimeSeries = data['Weekly Time Series'];
//           const dates = Object.keys(weeklyTimeSeries);
//           const datesData = [];
//           dates.forEach((date) => {
//               const weeklyData = weeklyTimeSeries[date];
//               const dateData = {
//                 date: date,
//                 open: weeklyData['1. open'],
//                 high: weeklyData['2. high'],
//                 low: weeklyData['3. low'],
//                 close: weeklyData['4. close'],
//                 volume: weeklyData['5. volume']
//               };
//               datesData.push(dateData);
//             });
//           console.log(datesData)
//           setStockData(datesData)
//         } catch (error) {
//           console.log("Error = ",error)
//         }
//       }
  
//       useEffect(() => {
//         fetchStockData(); 
//       }, [])
//   const [chartOptions, setChartOptions] = useState({
//     series: [{
//       data: data.map(({ date, open, high, low, close }) => ({
//         x: new Date(date).getTime(),
//         y: [open, high, low, close]
//       }))
//     }],
//     options: {
//       chart: {
//         type: 'candlestick',
//         height: 350
//       },
//       title: {
//         text: 'Candlestick Chart',
//         align: 'left'
//       },
//       xaxis: {
//         type: 'datetime'
//       },
//       yaxis: {
//         tooltip: {
//           enabled: true
//         }
//       }
//     }
//   });

//   useEffect(() => {
//     setChartOptions((prevOptions) => ({
//       ...prevOptions,
//       series: [{
//         data: data.map(({ date, open, high, low, close }) => ({
//           x: new Date(date).getTime(),
//           y: [open, high, low, close]
//         }))
//       }]
//     }));
//   }, [data]);

//   return (
//     <ReactApexChart
//       options={chartOptions.options}
//       series={chartOptions.series}
//       type="candlestick"
//       height={350}
//     />
//   );
// };

// export default CandlestickChart;

import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const CandlestickChart = () => {
  const [data, setStockData] = useState([]);
  const fetchStockData = async (symbol) => {
    // https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&
            try {
              const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=3A3Y63R9YQSXN4BS`)
              const data = await response.json()
              
              const weeklyTimeSeries = data['Time Series (5min)'];
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
              console.log(datesData)
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
