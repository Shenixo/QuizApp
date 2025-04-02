
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  const [data, setData] = useState([])
  const fetchData = async () => {
    const data = await fetch("https://opentdb.com/api.php?amount=10")
    const res = await data.json()
    setData(res)
  }
  useEffect(() => {
  fetchData()
  }, [])
  return (
    <div>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}

export default App
