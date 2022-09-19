import React from 'react'
import Gmap from './googlemaps.component';
const Hair = require("../assets/Hair10.jpg");

export default class ContactUs extends React.Component {
  render() {

  
  return (
    <div className='ContactUs'>
        <div className='ContactUsInfo'>
        <h1>CONTACT US</h1>
        <h3>Reach out to us with our phone number or email. You can make appointment from our website as well. </h3>
        <h4>PHONE    +1(301) 433-1934</h4>
        <h4>EMAIL  Queenhabesha@gmail.com</h4>
        <h4>LOCATION   2917 Cliff Rd East Burnsville MN 55337 </h4>
        <div className="Divmap">
            {/* Google maps */}
            <Gmap layout='R' />
          </div>
          <ul>
          <li className='BookingButtonContact'>Book Appointment</li>
        </ul>
      </div>
      
      <img src={Hair} alt='Contact Us'></img>
    </div>

  )
}
}
