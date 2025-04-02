
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  const [data, setData] = useState([])
  const fetchData = async () => {
    const cachedData = localStorage.getItem("quizData");
  
    if (cachedData) {
      setData(JSON.parse(cachedData)); // Load cached data
    } else {
      try {
        const response = await fetch("https://opentdb.com/api.php?amount=10");
        const res = await response.json();
        setData(res.results);
        localStorage.setItem("quizData", JSON.stringify(res.results)); // Save to cache
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };
  
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
