import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Product from '../Pages/Product'
import SignIn from '../Pages/SignIn'
const PrivatePage = ({children}) => {

    const {isAuth} = useSelector((state)=>state.Auth)  

    if(!isAuth)
    {
        return <Navigate to={'/Signin'}></Navigate>
    }
    else 
    {
        return children
    }
}

export default PrivatePage