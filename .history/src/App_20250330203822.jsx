
import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://opentdb.com/api.php?amount=10")
      const res = await data.json()
      return res
  }
  fetchData()
  }, [])
  return (
    <div>
      <pre>
        {JSON.stringify(fetchData(), null, 2)}
      </pre>
    </div>
  )
}

export default App
