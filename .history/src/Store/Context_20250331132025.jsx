import React from "react";
const AppContext = React.createContext({
    isDarkMode: false,
    toggleTheme: () => {}
});
const Context = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const toggleTheme = () => {
    setIsDarkMode((pv) => !pv);
  };
  const ctxValue = {
    isDarkMode,
    toggleTheme,
  };
  return (
    <AppContext.Provider value={ctxValue}>
      {" "}
      <div className={`bg-[${}]`} >{children}</div>
    </AppContext.Provider>
  );
};

export default Context;

export function useAppContext() {
  const context = React.useContext(AppContext);
  if (!context) throw new Error("Context must be used between the provider");
  return context;
}
