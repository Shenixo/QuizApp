
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  const [data, setData] = useState([])
  const fetchData = async () => {
    try {
      const response = await fetch("");
      const res = await response.json();
      setData(res.results); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
