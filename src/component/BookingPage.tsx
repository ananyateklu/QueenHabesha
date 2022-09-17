import React from 'react'
const Helen = require("../assets/Helen.png");
const BookingPage = () => {
    return (
        <div className='BookingPage'>
            <div className='HairStylistDiv'>
            <img src={Helen} alt="Hair Styles" />
            <h3>MAKE APPOINTMENT</h3>
            <h4>HELEN HAILU </h4>
            <h6>Please choose a time that works best for you. I look forward to working with you!</h6>
            </div>
            <div className='AppointmentDiv'>
                <input className='TestInput'></input>
                <button className='SignIn'>Sign In</button>
            </div>
        </div>

    )
}

export default BookingPage