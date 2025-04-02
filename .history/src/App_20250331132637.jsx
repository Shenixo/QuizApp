import './App.css'
import Home from './Components/Home/Home'
import { useAppContext } from './Store/Context'

function App() {
  const {isDarkMode} = useAppContext()
  return (
    div
    <Home/>
    </div>
  )
}

export default App
