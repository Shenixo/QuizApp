import './App.css'
import Home from './Components/Home/Home'
import { useAppContext } from './Store/Context'

function App() {
  const {} = useAppContext()
  return (
    <div className="relative min-h-screen  bg-[url('/pattern-background-desktop-light.svg')] bg-cover bg-center bg-no-repeat w-full bg-[#f4f6fa]">
    <Home/>
    </div>
  )
}

export default App
