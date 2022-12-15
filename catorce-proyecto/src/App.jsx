import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Batman from './assets/components/Batman'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <Batman/>
      </div>
        
    </div>
  )
}

export default App
