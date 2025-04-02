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
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const fetchData = async () => {
    const response = await axios.get("https://the-trivia-api.com/v2/questions", {
      params: { limit: 200 },
    });
    return response.data;
  };

  const [questions, setQuestions] = React.useState([]);
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["questions"],
    queryFn: fetchData,
    refetchInterval: questions.length < 250 ? 10000 : false,
    enabled: questions.length < 250,
  });

  React.useEffect(() => {
    if (!data) return;
    setQuestions((prev) => {
      const newQuestions = data.filter((q) => !prev.some((p) => p.id === q.id));
      return [...prev, ...newQuestions];
    });
  }, [data]);

  React.useEffect(() => {
    if (questions.length >= 250) navigate("/game");
  }, [questions.length, navigate]);

  const ctxValue = {
    isDarkMode,
    toggleTheme,
    data: questions,
    isLoading,
    isError,
    navigateTo: navigate,
  };

  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
};

export default Context;

export function useAppContext() {
  const context = React.useContext(AppContext);
  if (!context) throw new Error("Context must be used within the provider");
  return context;
}
