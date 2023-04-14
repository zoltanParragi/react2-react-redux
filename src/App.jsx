import { useState } from 'react'
import './App.css'
import Counter from './features/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>React Redux</h1>
      <div className="card">
        <Counter />
      </div>
      <img src="/summary.jpg" alt="" />
      <p>useSelector: returns the part of the state that you want</p>
    </div>
  )
}

export default App
