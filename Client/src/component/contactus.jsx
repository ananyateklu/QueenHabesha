import React from "react";
import Gmap from "./googlemaps.component";
const Hair = require("../assets/Hair3.jpg");

export default class ContactUs extends React.Component {
  render() {
    return (
      <div className="ContactUs">
        <div className="Contact">
          <div className="ContactContent">
            <div className="ContactUsInfo">
              <h1>CONTACT US</h1>
              <h4>
                Reach out to us with our phone number. You can make
                appointment from our website as well.{" "}
              </h4>
              <h5>PHONE: +1(301) 433-1934</h5>
              <h5>LOCATION: 2917 Cliff Rd East Burnsville MN 55337 </h5>
              <div className="Divmap">
                {/* Google maps */}
                <Gmap layout="R" />
              </div>
              <ul>
                <li className="BookingButtonContact">Book Appointment</li>
              </ul>
            </div>

            <img src={Hair} alt="Contact Us"></img>
          </div>
        </div>
      </div>
    );
  }
}
