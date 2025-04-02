import React from "react";
import axios from "axios";
const AppContext = React.createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});
const Context = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [data, setData] = React.useState([]);
  const toggleTheme = () => {
    setIsDarkMode((pv) => !pv);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://the-trivia-api.com/v2/questions"
        );
      if (response.status === 200) {
        setData(response.datas);
      }
    } catch (error) {
      console.error("Error in fetching data", error);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  const ctxValue = {
    isDarkMode,
    toggleTheme,
  };
  return (
    <AppContext.Provider value={ctxValue}>
      {" "}
      <div>{children}</div>
    </AppContext.Provider>
  );
};

export default Context;

export function useAppContext() {
  const context = React.useContext(AppContext);
  if (!context) throw new Error("Context must be used between the provider");
  return context;
}
