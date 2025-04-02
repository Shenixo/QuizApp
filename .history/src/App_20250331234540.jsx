import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Game from "./Pages/Game/Game"
import { useAppContext } from "./Store/Context";
import Progress from "./Pages/Progress/Progress";
import Question from "./Pages/Question/Question";

function App() {
  const { isDarkMode } = useAppContext();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Progress/>}/>
        <Route path="/game" element={<Game />} />
        <Route path="questions" element={Question}
      </Routes>
    
    </div>
  );
}

export default App;
