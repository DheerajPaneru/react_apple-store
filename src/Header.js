import React from 'react'
import { Link } from 'react-router-dom'
import './header.css';
import Login from './Login';
import Signup from './Signup';
import Cartbtn from './cartbtn';
import apple from './apple.jpg';
import dp from './dp.jpg';
import Product from './Product';
const Header = (props) => {
  return (
    <>
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start mt-2 bg-dark">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
          <li className="bi me-2 lo" width="40" height="50" role="img" aria-label="Bootstrap"><img src={apple} alt=""></img> </li>
        </a>
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li>    <Link to="/" className="nav-link px-2 link-green fg text-info">Home</Link></li>
        <li>    <Link to="/products" className="nav-link px-2 link-green fg text-info">Product</Link></li>
        <li>    <Link to="/contact" className="nav-link px-2 link-green fg text-info">Contact</Link></li>
   <li>    <Link to="/about" className="nav-link px-2 link-green fg text-info">About</Link></li>
        </ul>



        <div class="nav col-12 col-lg-auto me-lg-auto justify-content-center mb-md-0">
         <li>  <Cartbtn/> </li>
        <li>   <Login/></li>
           <Signup/>
        </div>




        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control" placeholder="Search..." aria-label="Search" value={props.filter} onChange={ props.searchText} />
        </form>

        <div className="dropdown text-end">
          <a href="/" className="d-block link-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={dp} alt=" " width="38" height="38" className="rounded-circle" />
          </a>
          <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
            <li><a class="dropdown-item" href="/">New project...</a></li>
            <li><a class="dropdown-item" href="/">Settings</a></li>
            <li><a class="dropdown-item" href="/">Profile</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="/">Sign out</a></li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default Header