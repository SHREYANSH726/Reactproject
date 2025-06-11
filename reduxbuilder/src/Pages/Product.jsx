import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REJECT, REQUEST, SUCCESS } from '../redux/actionType'
import { toast } from 'react-toastify'
import ProductCard from '../Components/ProductCard'




const Product = () => {

  const {isLoading, isError, data} = useSelector((state)=>state.Product)
  // console.log(datafromApi)


  const dispatch = useDispatch()

  function fetchData()
  {
    dispatch({type:REQUEST})
    axios.get('http://localhost:3000/Products')
    .then((res)=>{console.log(res.data)
      dispatch({type:SUCCESS,payload:res.data})
      toast.success("Data Added Successfully")
    })
    .catch((err)=>{
      console.log(err)
      dispatch({type:REJECT})
      toast.error("ERROR")
    })
  }

  useEffect(()=>{

    fetchData()
  },[])


  return (
    <div>
        <h1>Product Page
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)', gap:'10px'}}>
          {
           data.length > 0 && data.map((el)=> {

            return  (
              <ProductCard {...el}/>
              
            )

           }
            )

          }
        </div>

        </h1>
         
    </div>
  )
}

export default Product