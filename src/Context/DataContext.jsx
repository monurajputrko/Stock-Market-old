import axios from 'axios';
import React, { createContext,useContext, useEffect, useState } from 'react'


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

