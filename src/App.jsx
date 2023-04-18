import { useState } from 'react'
import Heading from './Heading'
import Section from './Section'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello vitors</h1>
      <Heading/>
      <Section/>
      <div>
        <button onClick={() => setCount((count) => count +1)}>Click {count}</button>
      </div>
    </div>
  )
}

export default App
