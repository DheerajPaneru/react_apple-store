import React from 'react'
import cart from './cart.jpg'
import { useSelector } from 'react-redux'
import './App.css'
import { Link } from 'react-router-dom'
const Cartbtn = () => {
  const state=useSelector((state)=> state.addItem)
  return (
    <>
    
    
    
<Link to="/cart" class="btn btn-outline-primary th">
      Cart ({state.length})
      <img src={cart}  alt=" "/>  
      </Link>

    
    </>
  )
}

export default Cartbtn