
import React, { createContext,useContext, useEffect, useState } from 'react'
// import {ApiClient, DefaultApi} from 'finnhub'; // Change import statement to es6 syntax

export const DataContext = createContext();

export const useData = () => useContext(DataContext); // Use context Functions for Consuming Data form DataContext

export const DataProvider = ({ children }) => {
    const [mainData, setMainData] = useState("");  // State for Main Data
    const [ChangeChart, setChangeChart] = useState("LineChart"); // State for Changing Chart
    const [search, setSearch] = useState(""); // State for Storing Search Data
    const [stock, setStockData] = useState([]);

    // const url = `https://nse-market.p.rapidapi.com/stock_metrics`;
    // const url1 = `https://nse-market.p.rapidapi.com/security_info`;
    // const url2 = `https://nse-market.p.rapidapi.com/corporate_actions`;
    // const url3 = `https://nse-market.p.rapidapi.com/stocks`;
    // const url4 = `https://nse-market.p.rapidapi.com/index_metrics`;
    function generateRandomString(length) {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
  }
  const randomString = generateRandomString(16);
    
  const fetchStockData = async (symbol) => {
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


  return (
    <DataContext.Provider value={{ stock,setStockData,mainData,setMainData,ChangeChart,setChangeChart,search,setSearch,randomString }}>
      {children}
    </DataContext.Provider>
  );
}
