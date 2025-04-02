import "./App.css";
import Home from "./Components/Home/Home";
import { useAppContext } from "./Store/Context";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
function App() {
  const { isDarkMode } = useAppContext();
  const queryClient = new QueryClient();
  return (
    <div
      className={`relative min-h-screen bg-cover bg-center bg-no-repeat w-full transition-all duration-500 ease-in-out ${
        isDarkMode ? "bg-[#313e51]" : "bg-[#f4f6fa]"
      } ${
        isDarkMode
          ? "bg-[url('/pattern-background-desktop-dark.svg')]"
          : "bg-[url('/pattern-background-desktop-light.svg')]"
      }`}
    >
      <QueryClientProvider >
        <Home />
      </QueryClientProvider>
    </div>
  );
}

export default App;
