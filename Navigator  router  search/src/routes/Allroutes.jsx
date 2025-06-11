import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Component/Home'
import Product from '../Component/Product'   
import Addproduct from '../Component/Addproduct'
import Login from '../Component/Login'
import './Allroutes.css'  

const Allroutes = () => {
  return (
    <div className="routes-container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/Addproduct' element={<Addproduct />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default Allroutes