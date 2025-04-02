import React from "react";
import 
const AppContext = React.createContext({
    isDarkMode: false,
    toggleTheme: () => {}
});
const Context = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = React.useState(false);
    const [data, setData] = React.useState([])
  const toggleTheme = () => {
    setIsDarkMode((pv) => !pv);
    };
    
    const fetchData = async () => {
        const data = await axios
    }

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
