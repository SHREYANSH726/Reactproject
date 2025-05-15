// Home.jsx
import React, { useState } from 'react'
import CreateProducts from './CreateProducts'
import Products from './Products'

const Home = () => {
    const [newProduct, setNewProduct] = useState(null);

    return (
        <div>
            <h1>Home Page</h1>
            <CreateProducts onProductAdded={setNewProduct} />
            <hr />
            <Products addedProduct={newProduct} />
        </div>
    )
}

export default Home
