import React, { useState } from "react";
import "./components.css";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import {useRef} from 'react';
const logo = require("../assets/final-logo-trans.png");

const Header = () => {
  const [mobile, setMobile] = useState(true);
  const tab_class = mobile ? "none" : "block";

  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  function expandNav() {
    setMobile(!mobile);
  }

  


  return (
    <div className="head">
<div className="Deskhead">
      <div className="LogoDiv">
        <div className="logo-img">
          <img src={logo} alt="logo"/>
        </div>
        <div className="BrandName">
            QUEEN HABESHA
        </div>
        <div className="BrandName-small">
            HAIR BRAIDING
        </div>
      </div>

      <div className="LinkDiv">
        <ul>
          <li>
            <NavLink exact="true" className="linkoff" to="/">
              HOME
            </NavLink>
          </li>

          <li
            
          >
            <NavLink className="linkoff" to="/">
              SERVICES
            </NavLink>
          </li>

          <li onClick={handleClick}>
            <NavLink className="linkoff" to="/">
              OUR CREW
            </NavLink>
          </li>
          <li>
            <NavLink className="linkoff" to="/contactUs">
              CONTACT US
            </NavLink>{" "}
          </li>
          <li className="BookingButton">
            <NavLink to="/booking">BOOKING</NavLink>
          </li>
        </ul>
      </div>
      </div>

      <div className="LinkDivMobile">
        <div className="LogoDivMobile">
          <img className="LogoMobile" src={logo} alt="logo" />
        </div>
        <div className="Burger">
          <GiHamburgerMenu onClick={() => expandNav()} className="Bur" />
        </div>
        <div className="Burgerstuff" style={{ display: tab_class }}>
          <Link className="link" to="/" onClick={() => expandNav()}>
            HOME
          </Link>
          <Link className="link" to="/" onClick={() => expandNav()}>
            OUR CREW
          </Link>
          <Link className="link" to="/contactus" onClick={() => expandNav()}>
            CONTACT US
          </Link>
          <Link className="link" to="/booking" onClick={() => expandNav()}>
            BOOKING
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
