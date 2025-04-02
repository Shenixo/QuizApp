import React from "react";
import axios from "axios";
const AppContext = React.createContext({
  isDarkMode: false,
    toggleTheme: () => { },
  data: []
});
const fetchData = async () => {
    try {
        const allQuestions = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
            const response = await axios.get("https://the-trivia-api.com/v2/questions", {
                params: { limit: 50, page }
            });

            if (response.status === 200) {
                allQuestions.push(...response.data);
                if (response.data.length < 50) {
                    hasMore = false;
                }
                page++;
            } else {
                console.error("Error fetching data on page:", page);
                hasMore = false;
            }
        }

        setData(allQuestions);
    } catch (error) {
        console.error("Error in fetching data", error);
    }
};

React.useEffect(() => {
    fetchData();
}, []);

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
