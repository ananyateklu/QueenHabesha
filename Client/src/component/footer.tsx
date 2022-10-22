import React from 'react'
import { Link } from "react-router-dom"
const FooterLogo = require("../assets/FooterLogo.png")

const footer = () => {
  return (
    <div className='FooterDiv'>
      <div className='FooterLeft'>
        <img className="FooterLogo" src={FooterLogo} alt="logo" />
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
          <li><Link to="/">SERVICES</Link></li>
          <li><Link to="/">OURCREW</Link></li>
          <li><Link to="/contactus">CONTACT US</Link></li>
        </ul>
      </div>


    </div>
  )
}

export default footer