import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/Navbar/navbar.js'
import { Banner } from './components/Banner/banner.js';
import Categories from './components/Categories/index.js';
import Product  from './components/Product/index.js';
import ProductList from './components/ProductList.js';
import Data from "./data.json";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      const fetchProducts = async () => {
          const response = await fetch('http://localhost:5000/api/products');
          const data = await response.json();
          setProducts(data);
      };
      fetchProducts();
  }, []);  
  
  return (
    <div>
      <header>
        <NavBar /> 
        <Banner /> 
        </header>
      <main>
        <Categories/>
        <ProductList heading= "Top Deals Now" products= {Data.deals} />
        <ProductList heading= "All Products" products= {Data.allProducts} />

      </main>
    </div>
  );
}

export default App;
