import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { format, parseISO } from 'date-fns';

const Helen = require("../assets/Helen.png");
const BookingPage = () => {

    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [user, setUser] = useState<User>();
    const [users, setUsers] = useState<User[]>([]);
    const [showInput, setShowInput] = useState("");
    const [selectAppointment, setSelectAppointment] = useState<Appointment>();
    const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
    const [isStylist, setIsStylist] = useState(false);

    useEffect(() => {
        if (user?.id !== '81e52375-2ed3-406c-bf89-08da9c129865' && user?.id !== '87f3e8ae-465e-4bb8-bf8b-08da9c129865'  ) {
            axios.get<Appointment>(`https://localhost:5000/api/appointments/${showInput}`).then(response => {
                console.log(response.data);
                loginUser(showInput, appointments, response.data);
            })
        }

    }, [user?.id])

    useEffect(() => {
        axios.get<User[]>('https://localhost:5000/api/User').then(response => {
            setUsers(response.data);
        })
    }, [])

    useEffect(() => {
        axios.get<Appointment[]>('https://localhost:5000/api/appointments').then(response => {
            loginUser(selectedUser?.id, response.data, selectAppointment);
        })
    }, [selectedUser?.id])

    const handleChange: any = (event: any): void => {
        event.preventDefault();
        handleSubmit(event);
    }

    const handleSubmit: any = (event: any): void => {
        setShowInput(event.target.value);
    }

    function handleSelectUser(id: string) {
        setSelectedUser(users.find(x => x.id === id));
    }


    function loginUser(id: string | undefined, appointments: Appointment[], appointment: Appointment | undefined) {
        if (id === "81e52375-2ed3-406c-bf89-08da9c129865" || id === "87f3e8ae-465e-4bb8-bf8b-08da9c129865") {
            setIsStylist(true);
            setAppointments(appointments);
            setUser(selectedUser);      
        }
        else {
            setIsStylist(false);
            setSelectAppointment(appointment);
            setUser(selectedUser);
        }
    }


    interface Appointment {
        id: string;
        name: string;
        date: string;
        price: BigInteger;
        stylist: string;

    }
    interface User {
        id: string | undefined;
        name: string;
        IsStylist: string;

    }

    return (
        <div className='BookingPage'>
            <div className='HairStylistDiv'>
                <img src={Helen} alt="Hair Styles" />
                <h3>MAKE APPOINTMENT</h3>
                <h4>{user?.name}</h4>
                <h6>Please choose a time that works best for you. I look forward to working with you!</h6>
                <input className='TestInput' onChange={e => handleChange(e)} ></input>
                <button className='SignIn' onClick={() => handleSelectUser(showInput)}>Sign In</button>
                
            </div>
            <div className='AppointmentDiv'>
                <div className='Title'>
                    <h2>Appointments</h2>
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
                {isStylist && (
                    <div className='AppointmentListDiv'>
                        {appointments.map((appointment: Appointment) => (
                            <div className='AppointmentList' key={appointment.id}>
                                <div className='Apptime'>
                                    {format(parseISO(appointment.date), 'h:mm aa')}
                                </div>
                                <div className='Appdate'>
                                    {format(parseISO(appointment.date), 'dd MMM yy')}
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
                )}
                {!isStylist && (
                    <div className='AppointmentListDiv'>

                        <div className='AppointmentList' key={selectAppointment?.id}>
                                <div className='Appdate'>
                                    {selectAppointment?.date.slice(2,10)}
                                </div>
                            <div className='Appname'>
                                {selectAppointment?.name}
                            </div>
                            <div className='Appprice'>
                                {selectAppointment?.price}
                            </div>
                            <div className='Appstylist'>
                                {selectAppointment?.stylist}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}

export default BookingPage