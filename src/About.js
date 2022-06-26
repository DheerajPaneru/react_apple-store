import React from 'react'
import{Link} from 'react-router-dom'
import dheeraj from './dheeraj.jpg'
import'./App.css';
const About = () => {
  return (
    <>
<div className='container py-5 my-5'>
  <div className='row'>
    <div className='col-md-6'>
<h1 className='text-primary fw-bold mb-4'>About Us</h1>
<p className='lead mb-4'>
  I am dheeraj currently i am doing b-tech from college of technology pantnagar
</p>
<Link to="/contact" className="text-black btn btn-outline-primary"><h4>
  Contact Us </h4></Link>
    </div>
<div className='col-md-6 py mt-2 d-flex justify-content-center'>
  <img src={dheeraj} alt=""></img>
</div>

</div>
  </div>
    </>
  )
}

export default About