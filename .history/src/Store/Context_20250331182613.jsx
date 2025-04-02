import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const AppContext = React.createContext({
  isDarkMode: false,
  toggleTheme: () => {},
  data: [],
  isLoading: false,
  isError: false,
});

const Context = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
const [questions, setQuestions] = React.useState([])
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const fetchData = async () => {
    const response = await axios.get(
      "https://the-trivia-api.com/v2/questions",
      {
        params: { limit: 200 },
      }
      );
      
      setQuestions(prev => {
          prev.map(q => [])
          return [...prev, newQuestions ]
      })

    // const uniqueData = Array.from(
    //   new Map(response.data.map((q) => [q.id, q])).values()
    // ); 
    // return uniqueData;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["questions"],
      queryFn: fetchData,
    refetchInterval: 10000
  });

  const ctxValue = {
    isDarkMode,
    toggleTheme,
    data: data || [],
    isLoading,
    isError,
  };

  console.log({ data });

  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
};

export default Context;

export function useAppContext() {
  const context = React.useContext(AppContext);
  if (!context) throw new Error("Context must be used within the provider");
  return context;
}
