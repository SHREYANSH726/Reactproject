// Products.jsx
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const Products = ({ addedProduct }) => {
    const [product, setProduct] = useState([])

    function fetchData() {
        fetch("http://localhost:3000/Products")
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchData();
    }, [])

    // Update DOM with newly added product
    useEffect(() => {
        if (addedProduct) {
            setProduct((prev) => [...prev, addedProduct]);
        }
    }, [addedProduct]);

    return (
        <div>
            Products
            {product.map((el) => (
                <ProductCard key={el.id} {...el} />
            ))}
        </div>
    )
}

export default Products
