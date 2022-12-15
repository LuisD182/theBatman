import { useState } from 'react'
import './App.css'


import CardUno from './assets/components/CardUno'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className="App">
      
      {/* <h1>Vite + React</h1> */}
      <div>
        <CardUno/>
      </div>
    </div>
  )
}

export default App
