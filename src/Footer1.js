
import React from 'react'
import Facebook from './Facebook.jpg'
import instagram from './instagram.jpg'
import Twitter from './Twitter.jpg'
import './App.css';

const Footer1 = () => {
  return (
    <>
    <div className='nj'>
      
    <div class="d-flex flex-column flex-sm-row justify-content-center py-3 border-top ms-5">
      <p className='text-info'>© 2022 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex ms-3">
        <li class="ms-3"><a className="link-dark ms-3" href="/"> <img src={Facebook} alt=" "></img></a></li>
        <li class="ms-3"><a className="link-dark ms-3" href="/"> <img src={instagram} alt=" "></img></a></li>
        <li class="ms-3"><a className="link-dark ms-3" href="/"><img src={Twitter} alt=" "></img></a></li>
      </ul>
    </div>
    </div>
    </>
  )
}

export default Footer1