import React, { use } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import PrivatePage from './PrivatePage'

const Navbar = () => {

    const {currentUser} = useSelector((state)=>state.Auth)
    console.log(currentUser)    

  return (
    <div>
        <div style={{display:'flex',justifyContent:'space-around',padding:'8px',backgroundColor:'cyan'}}>
            <div>
                <Link to={'/'}>Home</Link>
            </div>
            <div>
             { currentUser?.role == "Admin" && <Link to={'/add'}>Add Product</Link>}
            </div>
            <div>
              
                    <Link to={'/product'}>Product</Link>

            </div>
            <div>
                <Link to={'/signIn'}><button>SignIn</button></Link>
            </div>
            <div>
                <Link to={'/signUp'}><button>SignUp</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar