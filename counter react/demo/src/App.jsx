import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    <div className='card'>
<h3>COUNTER</h3>

     <h2>{count}</h2>
     <button onClick={() => setCount(count - 1)}>decriment</button>
     
     <button onClick={() => setCount(0)}>reset</button>
     
     <button onClick={() => setCount(count + 1)}>increment</button>
     </div>
    </>
  )
}

export default App
