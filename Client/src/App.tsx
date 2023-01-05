import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './component/home';
import ContactUs from './component/contactus';
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
        </Routes>

        <Footer />
      </Router>
     
    </div>
  );
}

export default App;
