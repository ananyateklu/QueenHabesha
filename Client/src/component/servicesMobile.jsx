import React from "react";
const Braids = require("../assets/Braids.png");
const Afro = require("../assets/Afro.png");
const Curls = require("../assets/Curly.png");
const Straight = require("../assets/Straight.png");
const Locks = require("../assets/Locks.png");


const Service = () => {
  return (
    <div
      className="ServicesMobile"
    >
       <h1>SERVICES WE OFFER</h1>
        <div>
          <img src={Braids} alt="Braids"></img>
          <h2>BRAIDS</h2>
        </div>
        <div>
          {" "}
          <img src={Locks} alt="Locks"></img>
          <h2>LOCKS</h2>
        </div>
        <div>
          <img src={Afro} alt="Afro"></img>
          <h2>AFRO</h2>
        </div>
        <div>
          {" "}
          <img src={Curls} alt="Curls"></img>
          <h2>CURLS</h2>
        </div>
        <div>
          <img src={Straight} alt="Straight"></img>
          <h2>STRAIGHT</h2>
        </div>
        <ul>
          <li className='BookingButton'>BOOKING</li>
        </ul>
    </div>
  );
};

export default Service;