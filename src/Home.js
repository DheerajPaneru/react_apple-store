import React from 'react'
import { Carousel } from 'react-bootstrap'
import phone1 from './phone1.jpg';
import iphone2 from './iphone2.jpg';
import iphone3 from './iphone3.jpg';
import iphone4 from './iphone4.jpg';
import './App.css'
import Images, { SimpleSlider } from './images';
import Product from './Product';
import AutoPlay from './images';

const Home = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100  im"
            src={phone1}
            alt=""
          />
          
                 </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 im"
            src={iphone2}
            alt="" 
          />

          
                 </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 im "
            src={iphone3}
            alt=""
          />

          
                 </Carousel.Item>
                 <Carousel.Item>
          <img
            className="d-block w-100 im"
            src={iphone4}
            alt="" 
          />

          
                 </Carousel.Item>
      </Carousel>
      <AutoPlay/>
      <Product/>
      
      </>
  )
}

export default Home