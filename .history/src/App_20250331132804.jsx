import './App.css'
import Home from './Components/Home/Home'
import { useAppContext } from './Store/Context'

function App() {
  const {isDarkMode} = useAppContext()
  return (
    <div  className={`relative min-h-screen bg-cover bg-center bg-no-repeat w-full #f4f6fa ${
      isDarkMode
        ? "bg-[url('/pattern-background-desktop-dark.svg')]"
        : "bg-[url('/pattern-background-desktop-light.svg')]"
    }`}>
    <Home/>
    </div>
  )
}

export default App
