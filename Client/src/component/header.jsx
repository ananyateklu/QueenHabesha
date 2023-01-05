import React, { useState } from "react";
import "./components.css";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { HashLink } from "react-router-hash-link";

const logo = require("../assets/final-logo-trans.png");
const brand = require("../assets/BRANDNAME.png");
const brandsmall = require("../assets/BRANDSMALL.png");

const Header = () => {
  const [mobile, setMobile] = useState(true);
  const tab_class = mobile ? "none" : "block";

  function expandNav() {
    setMobile(!mobile);
  }

  return (
    <div className="head">
      <div className="Deskhead">
        <div className="LogoDiv">
          <div className="logo-img">
            <img src={logo} alt="logo" />
          </div>
          <div className="BrandName">
            <img src={brand} alt="brand name" />
          </div>
          <div className="BrandName-small">
            <img src={brandsmall} alt="brandsmall" />
          </div>
        </div>

        <div className="LinkDiv">
          <ul>
            <li>
              <NavLink exact="true" className="linkoff" to="/">
                <HashLink smooth to="/#Home">
                  HOME
                </HashLink>
              </NavLink>
            </li>

            <li>
              <NavLink className="linkoff" to="#service">
                <HashLink smooth to="/#services">
                  SERVICES
                </HashLink>
              </NavLink>
            </li>

            <li>
              <NavLink className="linkoff" to="/">
                <HashLink smooth to="/#ourcrew">
                  OUR CREW
                </HashLink>
              </NavLink>
            </li>
            <li>
              <NavLink className="linkoff" to="/">
                <HashLink smooth to="/#testimonial">
                  TESTIMONIAL
                </HashLink>
              </NavLink>
            </li>
            <li>
              <NavLink className="linkoff" to="/contactUs">
                CONTACT US
              </NavLink>{" "}
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
            <HashLink className="link" smooth to="/#Home">
              HOME
            </HashLink>
          </Link>
          <Link className="link" to="/" onClick={() => expandNav()}>
            <HashLink className="link" smooth to="/#services">
              SERVICES
            </HashLink>
          </Link>
          <Link className="link" to="/" onClick={() => expandNav()}>
            <HashLink className="link" smooth to="/#ourcrew">
              OUR CREW
            </HashLink>
          </Link>
          <Link className="link" to="/" onClick={() => expandNav()}>
            <HashLink className="link" smooth to="/#testimonial">
              TESTIMONIAL
            </HashLink>
          </Link>
          <Link
            className="linkContact"
            to="/contactus"
            onClick={() => expandNav()}
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
