
import React from 'react'
import { Route,Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import'./App.css'
import Product from './Product';
import Productdetail from './Productdetail';
import Carts from './Carts';
import Checkout from './Checkout';
const App = () => {
  return (
    <>
<Header/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/products" element={<Product/>}/>
<Route path="/products/:id" element={<Productdetail/>}/>
<Route path="/products/:id" element={<Productdetail/>}/>
<Route path="/cart" element={<Carts/>}/>
<Route path="/checkout" element={<Checkout/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>




</Routes>
    </>
  )
}

export default App