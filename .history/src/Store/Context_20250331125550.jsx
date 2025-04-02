import React from "react";
const AppContext = React.createContext();
const Context = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const themeToggle = () => {
    setIsDarkMode((pv) => !pv);
  };
  const ctxValue = {
    isDarkMode,
    themeToggle,
  };
  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>;
};

export default Context;

export function useAppContext() {
    const context = React.useContext(AppContext)
    if (!context) throw new Error("Context must be used between the provider")
    return context
}