import React from "react";
import axios from "axios";
import {
  useQuery,
  useMutation,
  useQueryClient,

} from "@tanstack/react-query";
const AppContext = React.createContext({
  isDarkMode: false,
    toggleTheme: () => { },
  data: []
});
const Context = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [data, setData] = React.useState([]);
  const toggleTheme = () => {
    setIsDarkMode((pv) => !pv);
    };
    
    const queryClient = useQueryClient()
    const query = useQuery({
        queryKey: ["questions"],
        queryFn: fetchData
    })
  const fetchData = async () => {
    try {
        const response = await axios.get("https://the-trivia-api.com/v2/questions", {
            params: {limit: 200}
        });
        if (response.status === 200) {
            console.log("Number of questions received:", response.data.length);
        setData(response.data);
    }
} catch (error) {
    console.error("Error in fetching data", error);
}
};

    // console.log(data.filter(quest => quest.category === "science"))
    console.log(data)

  const ctxValue = {
    isDarkMode,
      toggleTheme,
      data
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
