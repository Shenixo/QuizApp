
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {
 
  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchData();
    }, 2000); // Wait for 2 seconds before making a request
  
    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, []);
  return (
    <div>
    
    </div>
  )
}

export default App
