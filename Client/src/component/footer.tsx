import React from 'react'
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
          <li>HOME</li>
          <li>SERVICES</li>
          <li>OURCREW</li>
          <li>CONTACT US</li>
        </ul>
      </div>


    </div>
  )
}

export default footer