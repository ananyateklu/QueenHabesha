import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { format, parseISO } from 'date-fns';

const Helen = require("../assets/Helen.png");
const Mekdes = require("../assets/Mekdes.jpg");
const BookingPage = () => {

    const [appointments, setAppointments] = useState<Appointment[] | undefined>([]);
    const [user, setUser] = useState<User>();
    const [users, setUsers] = useState<User[]>([]);
    const [showInput, setShowInput] = useState("");
    const [selectAppointment, setSelectAppointment] = useState<Appointment>();
    const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        if (user?.id !== '81e52375-2ed3-406c-bf89-08da9c129865' && user?.id !== '87f3e8ae-465e-4bb8-bf8b-08da9c129865') {
            axios.get<Appointment>(`https://localhost:5000/api/appointments/${showInput}`).then(response => {
                loginUser(selectedUser?.isStylist, appointments, response.data);
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
            loginUser(selectedUser?.isStylist, response.data, selectAppointment);
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

  
    function loginUser(isStylist: Boolean | undefined, appointments: Appointment[] | undefined, appointment: Appointment | undefined) {
        if (isStylist === true && appointments !== undefined) {
            setAppointments(appointments);
            setUser(selectedUser);
            setIsLoggedIn(true);
        }
        else if (isStylist === false) {
            setSelectAppointment(appointment);
            setUser(selectedUser);
            setIsLoggedIn(true);
        }
    }

    function handleLogOut() {
        setIsLoggedIn(false);
        setSelectedUser(undefined);
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
        isStylist: Boolean;

    }

    return (
        <div className='BookingPage'>
            <div className='HairStylistDiv'>

                <h3>MAKE APPOINTMENT</h3>
                {isLoggedIn === false &&
                    <h6>Login in to make an appointment or view your appointment.</h6>}
                {isLoggedIn === true &&
                    <div>
                        {user?.name === "Helen Hailu" &&
                            <img src={Helen} alt="Hair Styles" />}
                        {user?.name === "Mekdes Hailu" &&
                            <img src={Mekdes} alt="Hair Styles" />}
                        <h4>{user?.name}</h4>
                        {user?.name === "Helen Hailu" &&
                            <h6>Hello! This are the list of appointments you have</h6>}
                        {user?.name === "Mekdes Hailu" &&
                            <h6>Hello! This are the list of appointments you have</h6>}
                    </div>}

                {isLoggedIn === false &&
                    <div>
                        <input className='TestInput' onChange={e => handleChange(e)} ></input>
                        <button className='SignIn' onClick={() => handleSelectUser(showInput)}>Sign In</button>
                    </div>
                }
                {isLoggedIn === true &&
                    <button className='SignOut' onClick={() => handleLogOut()}>Sign Out</button>}
            </div>
            {isLoggedIn === true &&
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
                    {user?.isStylist && (
                        <div className='AppointmentListDiv'>
                            {appointments?.map((appointment: Appointment) => (
                                <div className='AppointmentMultiList' key={appointment.id}>
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
                    {!user?.isStylist && (
                        <div className='AppointmentListDiv'>

                            <div className='AppointmentList' key={selectAppointment?.id}>
                                <div className='Apptime'>
                                    {selectAppointment?.date !== undefined && format(parseISO(selectAppointment!.date), 'h:mm aa')}
                                </div>
                                <div className='Appdate'>
                                    {selectAppointment?.date !== undefined && format(parseISO(selectAppointment!.date), 'dd MMM yy')}
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
                </div>}
        </div>

    )
}

export default BookingPage