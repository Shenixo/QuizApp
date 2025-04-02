import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const AppContext = React.createContext({
  isDarkMode: false,
  toggleTheme: () => {},
  data: [],
  isLoading: false,
  isError: false,
});

const Context = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [category, setCategory] = React.useState([])
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

    return response.data;

    // const uniqueData = Array.from(
    //   new Map(response.data.map((q) => [q.id, q])).values()
    // );
    // return uniqueData;
  };
  const [questions, setQuestions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  // isLoading won't work extra logic
  const { data, isLoading, isError } = useQuery({
    queryKey: ["questions"],
    queryFn: fetchData,
    refetchInterval: questions.length < 250 ? 10000 : false,
    enabled: questions.length < 250,
  });
  React.useEffect(() => {
    if (data)
      setQuestions((prev) => {
        const merged = [...prev, ...data];
        const uniqueQuestions = Array.from(
          new Map(merged.map((q) => [q.id, q])).values()
        );
        return uniqueQuestions;
      });
  }, [data]);
  React.useEffect(() => {
    if (questions.length < 250) setLoading(true);
    else setLoading(false);
  }, [questions]);

  console.log(data);

  const ctxValue = {
    isDarkMode,
    toggleTheme,
    data: questions,
    loading,
    isError,
  };

  console.log({ data });
  console.log({ questions });
  console.log(loading);

  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
};

export default Context;

export function useAppContext() {
  const context = React.useContext(AppContext);
  if (!context) throw new Error("Context must be used within the provider");
  return context;
}
