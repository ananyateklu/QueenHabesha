import React from 'react'
import "./components.css";
import { NavLink } from "react-router-dom"
const logo = require('../assets/Logo.png')

const Header = () => {
    return (
        <div>
            <div className='LogoDiv'>
                <img className="Logo" src={logo} alt="logo" />
            </div>

            <div className='LinkDiv'>
                <ul>
                    <li><NavLink to="/">HOME</NavLink></li>
                    <li><NavLink to="/">SERVICES</NavLink></li>
                    <li><NavLink to="/">OUR CREW</NavLink></li>
                    <li><NavLink to="/contactUs">CONTACT US</NavLink> </li>
                    <li className='BookingButton'><NavLink to="/booking">BOOKING</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Header