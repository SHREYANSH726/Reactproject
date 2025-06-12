import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Navbar from './Component/Navbar'
import Fetch from './Component/Fetch'

function App() {
  
  return (
    <>
     <Navbar/>
     <br />
     <hr />
   <Fetch/>
    </>
  )
}

export default App
