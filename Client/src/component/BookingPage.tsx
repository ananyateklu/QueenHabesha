import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { format, parseISO } from 'date-fns';

const Helen = require("../assets/Helen.png");
const BookingPage = () => {

    const [appointments, setAppointments] = useState([] as any);

    useEffect(() => {
        axios.get<Appointment>('https://localhost:5000/api/appointments').then(response => {
            console.log(response);
            setAppointments(response.data);
        })
    }, [])

    interface Appointment {
        id: string;
        name: string;
        date: string;
        price: BigInteger;
        stylist: string;

    }

    return (
        <div className='BookingPage'>
            <div className='HairStylistDiv'>
                <img src={Helen} alt="Hair Styles" />
                <h3>MAKE APPOINTMENT</h3>
                <h4>HELEN HAILU </h4>
                <h6>Please choose a time that works best for you. I look forward to working with you!</h6>
                <input className='TestInput'></input>
                <button className='SignIn'>Sign In</button>
            </div>
            <div className='AppointmentDiv'>
                <div className='Title'>
                    <div className='Apptime'>
                        <p>Time</p>
                    </div>
                    <div className='Appdate'>
                        <p>Date</p>
                    </div>

                    <div className='Appname'>
                        <p>Name</p>
                    </div>
                    <div className='Appprice'>
                        <p>Price</p>
                    </div>
                    <div className='Appstylist'>
                        <p>Stylist</p>
                    </div>
                </div>
                <div className='AppointmentListDiv'>
                    {appointments.map((appointment: Appointment) => (
                        <div className='AppointmentList' key={appointment.id}>
                            <div className='Apptime'>
                                {format(parseISO(appointment.date), 'h:mm aa')}
                            </div>
                            <div className='Appdate'>
                                {format(parseISO(appointment.date), 'dd MMM yyyy')}
                            </div>

                            <div className='Appname'>
                                {appointment.name}
                            </div>
                            <div className='Appprice'>
                                {appointment.price}
                            </div>
                            <div className='Appstylist'>
                                {appointment.stylist}
                            </div>
                        </div>


                    ))}
                </div>

            </div>
        </div>

    )
}

export default BookingPage