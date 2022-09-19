import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Helen = require("../assets/Helen.png");
const BookingPage = () => {

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:5000/api/appointments').then(response => {
            console.log(response);
            setAppointments(response.data);
        })
    }, [])

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
                <div className='AppointmentListDiv'>
                    {appointments.map((appointment: any) => (
                        <div className='AppointmentList'>
                             <h6 key={appointment.id}>
                                {appointment.date}
                            </h6>
                            <h6 key={appointment.id}>
                                {appointment.name}
                            </h6>
                            <h6 key={appointment.id}>
                                {appointment.price}
                            </h6>
                            <h6 key={appointment.id}>
                                {appointment.stylist}
                            </h6>
                        </div>


                    ))}
                </div>

            </div>
        </div>

    )
}

export default BookingPage