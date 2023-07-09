import { createContext, useContext } from "react";
import { data } from "../Data";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
