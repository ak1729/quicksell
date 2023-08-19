import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const url = "https://api.quicksell.co/v1/internal/frontend-assignment";

const GlobalDataContext = createContext();

export const useGlobalData = () => useContext(GlobalDataContext);

export const GlobalDataProvider = ({ children }) => {
  const [data, setData] = useState({
    tickets: [], 
    users: []
  });

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <GlobalDataContext.Provider value={{ data, setData }}>
      {children}
    </GlobalDataContext.Provider>
  );
};
