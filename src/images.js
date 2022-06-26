
import React, { Component } from "react";
import Slider from "react-slick";
import phone1 from './phone1.jpg'
import iphone2 from './iphone2.jpg'
import iphone3 from './iphone3.jpg'
import iphone4 from './iphone4.jpg'
import iphone5 from './iphone5.jpg'
import iphone6 from './iphone6.jpg'
import iphone7 from './iphone7.jpg'
import iphone8 from './iphone8.jpg'
import'./images.css';

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 700,
      autoplaySpeed: 700,
      cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings} className="mt-4">
          <div className="slide1">
            <img src={phone1} alt=""></img>
          </div>
          <div className="slide1">
            <img src={iphone2} alt=""></img>
          </div>
          <div className="slide1">
            <img src={iphone3} alt=""></img>
          </div>
          <div className="slide1">
            <img src={iphone7} alt=""></img>
          </div>
          <div className="slide1">
            <img src={iphone5} alt=""></img>
          </div>
          <div className="slide1">
            <img src={iphone6} alt=""></img>
          </div>
        </Slider>
      </div>
    );
  }
}