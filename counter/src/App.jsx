import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    <div class='app-container'>
    <div class='card'>
     <h2>{count}</h2>
     <button class="decriment" onClick={() => setCount(count - 1)}>decriment</button>
     
     <button class="reset" onClick={() => setCount(0)}>reset</button>
     
     <button class="increment" onClick={() => setCount(count + 1)}>increment</button>
     </div>
     </div>
    </>
  )
}

export default App