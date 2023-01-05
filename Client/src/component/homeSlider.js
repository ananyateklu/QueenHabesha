import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const img1 = require("../assets/HomeQB.png");

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
       autoplaySpeed: 1000,
        arrows: false,
           
            fade: true,
            speed: 1000,
            
            
            loop:true
      };
      return (
       
          
          <Slider {...settings}>
          <div class="single-img">
                <img src={img1} alt=""/>
            </div>
          </Slider>
       
      );
    }
  }