import { motion } from "framer-motion";
import { useRef, useEffect, useState, React } from "react";
import styleImages from "./styleImages";
const Salon = require("../assets/Salon.jpg");
const Braids = require("../assets/Braids.png");
const Afro = require("../assets/Afro.png");
const Curls = require("../assets/Curly.png");
const Straight = require("../assets/Straight.png");
const Locks = require("../assets/Locks.png");
const Helen = require("../assets/Helen.png");
const Mekdes = require("../assets/Mekdes.jpg");
const Facebook = require("../assets/facebook-logo.png");
const Instagram = require("../assets/instagram.png");

const Home = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <img className="Salon" src={Salon} alt="Salon" />
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
          className="inner-carousel"
        >
          {styleImages.map((styleImage, index) => {
            return (
              <motion.div
                className="item"
                key={styleImage}
                whileHover={{ scale: 1.2 }}
              >
                <img src={styleImage} alt="Hair Styles" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      <div className="ServicesHome" id="Services">
        <h1>SERVICES WE OFFER</h1>
        <div>
          <img src={Braids} alt="Braids"></img>
          <h2>BRAIDS</h2>
        </div>
        <div>
          {" "}
          <img src={Locks} alt="Locks"></img>
          <h2>LOCKS</h2>
        </div>
        <div>
          <img src={Afro} alt="Afro"></img>
          <h2>AFRO</h2>
        </div>
        <div>
          {" "}
          <img src={Curls} alt="Curls"></img>
          <h2>CURLS</h2>
        </div>
        <div>
          <img src={Straight} alt="Straight"></img>
          <h2>STRAIGHT</h2>
        </div>
        <ul>
          <li className="BookingButton">BOOKING</li>
        </ul>
      </div>
      <div className="OurCrew">
        <h1>OUR CREW</h1>
        <div>
          <img src={Helen} alt="Straight"></img>
          <h2>Helen Hailu</h2>
          <h3>Hair Stylist</h3>
          <img className="facebook" src={Facebook} alt="Curls"></img>
          <img className="instagram" src={Instagram} alt="Curls"></img>
        </div>
        <div>
          <img src={Mekdes} alt="Straight"></img>
          <h2>Mekdes</h2>
          <h3>Hair Stylist</h3>
          <img className="facebook" src={Facebook} alt="Curls"></img>
          <img className="instagram" src={Instagram} alt="Curls"></img>
        </div>
        <ul>
          <li className="BookingButton">CONTACT US</li>
        </ul>
      </div>
      <div className="Testimonials OurCrew">
        <h1>TESTIMONIALS</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <div className="face front-face">
                <img src={Mekdes} alt="Straight" className="profile"></img>
                <div className="pt-3 text-uppercase name">Hamelemal</div>
                <div className="designation">Customer One</div>
              </div>
              <div className="face back-face">
                <span className="fas fa-quote-left"></span>
                <div className="testimonial">
                  I made bacck the purchase price in just 48 hours! Thank you
                  for making it pain less, pleasant. The service was execellent.
                  I will refer everyone I know.
                </div>
                <span className="fas fa-quote-right"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="face front-face">
                <img src={Mekdes} alt="Straight" className="profile"></img>
                <div className="pt-3 text-uppercase name">Almaz</div>
                <div className="designation">Customer Two</div>
              </div>
              <div className="face back-face">
                <span className="fas fa-quote-left"></span>
                <div className="testimonial">
                  Really good, you have saved our business! I made bacck the
                  purchase price in just 48 hours! man, this thing is getting
                  better and better as I learn more about it.
                </div>
                <span className="fas fa-quote-right"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="face front-face">
                <img src={Mekdes} alt="Straight" className="profile"></img>
                <div className="pt-3 text-uppercase name">Hirut</div>
                <div className="designation">Customer Three</div>
              </div>
              <div className="face back-face">
                <span className="fas fa-quote-left"></span>
                <div className="testimonial">
                  Account keeper is the most valuable business research we have
                  EVER purchased. Without electrician, we would ahave gone
                  bankrupt by now.
                </div>
                <span className="fas fa-quote-right"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
