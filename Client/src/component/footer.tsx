import React from 'react'
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'

const brandname_inv = require("../assets/BRANDNAME-INV.png")
const brandsmall_inv = require("../assets/BRANDSMALL-INV.png")
const logo_inv = require("../assets/logo-inverted.png")
const footer = () => {
  return (
    <div className='FooterDiv'>
      <div className='FooterLeft'>
      <div className="LogoDiv">
        <div className="logo-img">
          <img src={logo_inv} alt="logo"/>
        </div>
        <div className="BrandName">
            <img src={brandname_inv} alt="brand name"/>
        </div>
        <div className="BrandName-small">
        <img src={brandsmall_inv} alt="brandsmall"/>
        </div>
      </div>
        <h5>PHONE    +1(301) 433-1934</h5>
        <h5>EMAIL  Queenhabesha@gmail.com</h5>
        <h5>LOCATION   2917 Cliff Rd East Burnsville MN 55337 </h5>
        <ul>
          <li className='BookingButtonDark'>Book Appointment</li>
        </ul>
      </div>

      <div className='Links'>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/"><HashLink smooth to="/#services">
                SERVICES
            </HashLink></Link></li>
          <li><Link to="/">OURCREW</Link></li>
          <li><Link to="/contactus">CONTACT US</Link></li>
        </ul>
      </div>


    </div>
  )
}

export default footer