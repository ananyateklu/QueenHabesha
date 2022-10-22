import React, { useState } from "react";
import "./components.css";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
const logo = require("../assets/Logo.png");

const Header = () => {
  const [mobile, setMobile] = useState(true);
  const tab_class = mobile ? "none" : "block";

  function expandNav() {
    setMobile(!mobile);
  }

  return (
    <div className="head">
      <div className="LogoDiv">
        <img className="Logo" src={logo} alt="logo" />
      </div>

      <div className="LinkDiv">
        <ul>
          <li>
            <NavLink exact="true" className="linkoff" to="/">
              HOME
            </NavLink>
          </li>

          <li
            onClick={(e) => {
              e.preventDefault();
              window.location.replace("/#Services");
            }}
          >
            <NavLink className="linkoff" to="/">
              SERVICES
            </NavLink>
          </li>

          <li>
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
