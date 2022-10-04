import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import jwt_decode from 'jwt-decode';

declare const google: any;
const Helen = require("../assets/Helen.png");
const Mekdes = require("../assets/Mekdes.jpg");
const LoginPic = require("../assets/Hair17.jpg");
const BookingPage = () => {

    const [appointments, setAppointments] = useState<Appointment[] | undefined>([]);
    const [user, setUser] = useState<User>();
    const [users, setUsers] = useState<User[]>([]);
    const [showInput, setShowInput] = useState("");
    const [selectAppointment, setSelectAppointment] = useState<Appointment>();
    const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [googleUser, setGoogleUser] = useState<googleUser | undefined>();

    const handleCallbackResponse = async (response: any) => {
        
        console.log("Encoded JWT ID Token:" + response.credential);
        var userObject = jwt_decode<googleUser | undefined>(response.credential);
        console.log(userObject);
        setGoogleUser(userObject);
        setIsLoggedIn(true);
        // store the user in localStorage
        localStorage.setItem('userObject', response.credential);
    }

    useEffect(() => {
        const loggedInUser = localStorage.getItem("userObject");
        if (loggedInUser) {
          var userObject = jwt_decode<googleUser | undefined>(loggedInUser);
          setGoogleUser(userObject);
          setIsLoggedIn(true);
        }
      }, []);

    useEffect(() => {
        /*global google */
        google.accounts.id.initialize({
            client_id: "121288548848-7h61a32lpelv8k3hiaj52lsum47njhui.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            {theme: "outline", size: "large"}
        )
    }, [])

    useEffect(() => {

        axios.get<Appointment>(`http://localhost:5000/api/appointments/${showInput}`).then(response => {
            if (user?.id !== '81e52375-2ed3-406c-bf89-08da9c129865' && user?.id !== '87f3e8ae-465e-4bb8-bf8b-08da9c129865') {
                loginUser(selectedUser?.isStylist, appointments, response.data);
            }
        })


    }, [user?.id])

    useEffect(() => {
        axios.get<User[]>('http://localhost:5000/api/User').then(response => {
            setUsers(response.data);
        })
    }, [])

    useEffect(() => {
        axios.get<Appointment[]>('http://localhost:5000/api/appointments').then(response => {
            loginUser(selectedUser?.isStylist, response.data, selectAppointment);
        })
    }, [selectedUser?.id])

    // const handleChange: any = (event: any): void => {
    //     event.preventDefault();
    //     handleSubmit(event);
    // }

    // const handleSubmit: any = (event: any): void => {
    //     setShowInput(event.target.value);
    // }

    // function handleSelectUser(id: string) {
    //     setSelectedUser(users.find(x => x.id === id));
    // }


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
        localStorage.removeItem('userObject');
        window.location.reload();
        setIsLoggedIn(false);
        setGoogleUser(undefined);
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

    interface googleUser {
        id: string | undefined;
        name: string;
        picture: string;

    }

    return (
        <div className='BookingPage'>
            <div className='Booking'>


                {isLoggedIn === false &&
                    <div className='HairStylistDiv'>
                        <div className='LoginDiv'>
                            <h3>MAKE APPOINTMENT</h3>
                            <h6>Login in to make an appointment or view your appointment.</h6>
                            <div>
                                {/* <input className='TestInput' onChange={e => handleChange(e)} ></input>
                                <button className='SignIn' onClick={() => handleSelectUser(showInput)}>Sign In</button> */}
                                <button id='signInDiv'></button>
                            </div>
                        </div>
                        <img className='LoginPic' src={LoginPic} alt='LoginPic'></img>
                    </div>
                }
                {isLoggedIn === true &&
                    <div className='BookingAppointmentDiv' >
                        {user?.name === "Helen Hailu" &&
                            <img src={Helen} alt="Hair Styles" />}
                        {user?.name === "Mekdes Hailu" &&
                            <img src={Mekdes} alt="Hair Styles" />}
                        {user?.name === "Helen Hailu" &&
                            <h6>Hello! This are the list of appointments you have</h6>}
                        {user?.name === "Mekdes Hailu" &&
                            <h6>Hello! This are the list of appointments you have</h6>}
                            <h4>{googleUser?.name}</h4>
                            <img src={googleUser?.picture} alt="test"></img>
                            <button className='SignOut' onClick={() => handleLogOut()}>Sign Out</button>
                    </div>}
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