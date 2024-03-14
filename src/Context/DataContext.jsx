import axios from 'axios';
import React, { createContext,useContext, useEffect, useState } from 'react'
// import {ApiClient, DefaultApi} from 'finnhub'; // Change import statement to es6 syntax

export const DataContext = createContext();

export const useData = () => useContext(DataContext); // Use context Functions for Consuming Data form DataContext

export const DataProvider = ({ children }) => {
    const [mainData, setMainData] = useState("");  // State for Main Data
    const [ChangeChart, setChangeChart] = useState("LineChart"); // State for Changing Chart
    const [search, setSearch] = useState(""); // State for Storing Search Data

  // Function for Reseting Filters
  const handleReset = async () => {
    try {
      const response = await axios.get("https://coffbackend.vercel.app");
      setMainData(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  // Function to Fetch Data from Backend
  const getDataFromDB = async () => {
    try {
      const response = await axios.get("https://coffbackend.vercel.app");
      setMainData(response.data.data);
    } catch (e) {
      console.log(e);
    }
    };
    
      // Function to get the Date filter  
      const handleSelect = (eventKey, event) => {
        getDataFromDBwithYear(event.target.innerText);
  };
  
  // function to get the Filted Data form Backend
      const getDataFromDBwithYear = async (year) => {
        try {
          const response = await axios.get(
            `https://coffbackend.vercel.app/year/${year}`
          );
          setMainData(response.data.data);
        } catch (e) {
          console.log(e);
        }
    };
    
       // Function for Searching Data
       const handleSearchResult = async (e) => {
         e.preventDefault();
         try {
           const response = await axios.get(
             `https://coffbackend.vercel.app/any/${search}`
           );
           setMainData(response.data.data);
           setSearch("");
         } catch (e) {
           console.log(e);
         }
       };
    //// 
    // const url = `https://nse-market.p.rapidapi.com/stock_metrics`;
    // const url1 = `https://nse-market.p.rapidapi.com/security_info`;
    // const url2 = `https://nse-market.p.rapidapi.com/corporate_actions`;
    // const url3 = `https://nse-market.p.rapidapi.com/stocks`;
    // const url4 = `https://nse-market.p.rapidapi.com/index_metrics`;
    const options = {
      method: 'GET',
      url: 'https://real-time-finance-data.p.rapidapi.com/search',
      params: {
        query: 'adani',
        language: 'en'
      },
      headers: {
        'X-RapidAPI-Key': '340d12db0cmsh90b456c8f7aa9a2p1c64bfjsna6caa8fe654a',
        'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
      }
    };
    
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
//     const api_key = ApiClient.instance.authentications['api_key'];
// api_key.apiKey = "cnot4lhr01qgia583770cnot4lhr01qgia58377g" // Replace this
// const finnhubClient = new DefaultApi()

// // Stock candles
// finnhubClient.stockCandles("AAPL", "D", 1590988249, 1591852249, (error, data, response) => {
//     console.log(data)
// });
  
    useEffect(() => {
      fetchData();
    }, []);

  useEffect(() => {
    getDataFromDB();
  }, []);

  useEffect(() => {
    console.log(mainData.length);
  }, [mainData]);

  return (
    <DataContext.Provider value={{ mainData, setMainData,handleReset,ChangeChart,setChangeChart,handleSelect,getDataFromDBwithYear,handleSearchResult,search,setSearch }}>
      {children}
    </DataContext.Provider>
  );
}
