import { Route, Routes } from "react-router-dom";
import "./App.css";
import Game from "./Pages/Game/Game"
import { useAppContext } from "./Store/Context";
import Progress from "./Pages/Progress/Progress";

function App() {
  const { isDarkMode } = useAppContext();
const []
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
      <Routes>
        <Route index element={<Progress/>}/>
        <Route path="/game" element={  <Game />}/>
      </Routes>
    
    </div>
  );
}

export default App;
