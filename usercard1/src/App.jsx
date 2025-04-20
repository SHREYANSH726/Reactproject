import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [followers, setCount] = useState(2330)
  const[value,valueset] = useState(true);


  function follow()
  {
    setCount(followers+1)


    valueset(!value)

    if(!value){
      setCount(followers-1)
      
    }
  }
console.log(value);
  return (
    <>
    <h1> user display</h1>
   <div className='card'>
    <div className='card-container'>
    <div className='card-img'>
      <img src='https://t3.ftcdn.net/jpg/06/00/90/26/360_F_600902628_KXmKOlA1J4OTL5XuNiHLnGXQYD6YBIaS.jpg'/>
     
    </div>
    <div className='card-content'>
      <h3>Shreyansh Jain</h3>
       <p>Hustling hard, staying humble.</p>
      <button onClick={follow}>{value ? "follow":"unfollow"}</button>
     
     <div className='two'>
      <div className='con-1'>
      <h5>posts </h5> 
      <p>500</p>
      </div>

     <div className='con-2'>
     <h4>followers</h4>
     <p>{followers} </p>
     </div>
     </div>
    </div>
    </div>
   </div>
   </>
  )
}

export default App