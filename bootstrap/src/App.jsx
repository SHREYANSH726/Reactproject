import React from 'react';
import Navbars from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './Product';
import Cards from './card';
import Footer from './Footer';


function App() {
  return (
    <>
      <Navbars />
  
      <Product/>
    <Cards/>
    <Footer/>
    </>
  );
}

export default App;


