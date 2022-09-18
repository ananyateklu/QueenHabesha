import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './component/home';
import ContactUs from './component/contactus';
import Booking from './component/BookingPage';
import Header from './component/header';
import Footer from './component/footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>


      </Router>
      <Footer />
    </div>
  );
}

export default App;
