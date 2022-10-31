import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const img1 = require("../assets/QueenFront.png");


export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
       autoplaySpeed: 3000,
        arrows: false,
           
            fade: true,
            speed: 1000,
            
            
            loop:true
      };
      return (
       
          
          <Slider {...settings}>
          <div class="single-img kenburns-top-right">
                <img src={img1} alt=""/>
                <h2>ONE</h2>
            </div>
            <div class="single-img kenburns-top-right">
            <img src={img1} alt=""/>
                <h2>TWO</h2>
            </div>
            <div class="single-img">
            <img src={img1} alt=""/>
                <h2>THREE</h2>
            </div>
            <div class="single-img">
            <img src={img1} alt=""/>
                <h2>FOUR</h2>
            </div>
          </Slider>
       
      );
    }
  }