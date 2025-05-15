import React from "react";

const ProductCard = (props) => {



const {id,price,title,image,description,category} = props

  return (
        <>
            <div key={id} >

                <h1> {id} </h1>
                <img src={image}/>
                <p>{title}</p>
                <mark>{category}</mark>
                <p>{description}</p>
                <h4>{price}</h4>
               


            </div>
        </>
  )
};

export default ProductCard;
