import React, { Component } from "react";
import Slider from "react-slick";


const Salon = require("../assets/QueenFront.png");

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
    autoplaySpeed: 3000,
            arrows: false,
           
            fade: true,
            speed: 2000,
            infinite: true,
            cssEase: 'ease-in-out',
            loop:true
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
        <div className="Desktop">
        <img className="Salon" src={Salon} alt="Salon" />
         </div>
          
          <div className="Desktop">
        <img className="Salon" src={Salon} alt="Salon" />
         </div>

         <div className="Desktop">
        <img className="Salon" src={Salon} alt="Salon" />
         </div>
        </Slider>
      </div>
    );
  }
}