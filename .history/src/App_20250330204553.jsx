
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  const [data, setData] = useState([])
 
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
