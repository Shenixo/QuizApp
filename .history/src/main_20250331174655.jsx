import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Context from "./Store/Context.jsx";
import { QueryClient } from "@tanstack/react-query";

createRoot(document.getElementById("root")).render(
 const  QueryClient()
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      
    <Context>
      <App />
    </Context>
        </QueryClientProvider>
  </StrictMode>
);
