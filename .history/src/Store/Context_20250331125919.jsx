import React from "react";
const AppContext = React.createContext({
    isDarkMode: false,
    toggleTh
});
const Context = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const themeToggle = () => {
    setIsDarkMode((pv) => !pv);
  };
  const ctxValue = {
    isDarkMode,
    themeToggle,
  };
  return (
    <AppContext.Provider value={ctxValue}>
      {" "}
      <div className={isDarkMode ? "dark" : "light"}>{children}</div>
    </AppContext.Provider>
  );
};

export default Context;

export function useAppContext() {
  const context = React.useContext(AppContext);
  if (!context) throw new Error("Context must be used between the provider");
  return context;
}
