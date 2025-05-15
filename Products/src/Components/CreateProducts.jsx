// CreateProducts.jsx
import React, { useState } from 'react'

const CreateProducts = ({ onProductAdded }) => {

    const initialState = {
        title: "",
        price: "",
        description: "",
        category: "",
        image: ""
    }

    const [formData, setFormData] = useState(initialState)

    function handleFormData(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch("http://localhost:3000/Products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                alert("Product added successfully!");
                onProductAdded(data); // update UI
                setFormData(initialState);
            })
            .catch((err) => {
                console.error("Error:", err);
                alert("Failed to add product.");
            });
    }

    const { title, price, description, category, image } = formData;

    function handleEdit(){
        console.log(handleEdit)
    }


    return (
        <legend>
           
        <div class='form'>
       
            <form onSubmit={handleSubmit}>
                <input type="text" name='title' value={title} placeholder='Enter title' onChange={handleFormData} /> 
                <input type="text" name='price' value={price} placeholder='Price' onChange={handleFormData} /> 
                <input type="text" name='description' value={description} placeholder='Description' onChange={handleFormData} /> 
                <select name="category" value={category} onChange={handleFormData}>
                    <option value="">Select category</option>
                    <option value="men's clothing">men's clothing</option>
                    <option value="jewelery">jewelery</option>
                    <option value="electronics">electronics</option>
                    <option value="women's clothing">women's clothing</option>
                </select> <br /><br />
                <input type="text" name='image' value={image} placeholder='Image URL' onChange={handleFormData} /> 
                <input type="submit" />
                <button onClick={()=>handleEdit(e)}>Edit</button>
                <button>Update Price</button>
            </form>
        </div>
        </legend>
    )
}

export default CreateProducts
