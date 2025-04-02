
import './App.css'

function App() {
  const fetchData = async () => {
    const data = await fetch("https://opentdb.com/api.php?amount=10")
    const res = await data.json()
    return res
}
  return (
    <div>
      <pre>
        {JSON.strin}
      </pre>
    </div>
  )
}

export default App
