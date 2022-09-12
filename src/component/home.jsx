import { motion } from "framer-motion";
import { useRef, useEffect, useState, React } from "react";
import styleImages from "./styleImages";
const Salon = require("../assets/Salon.jpg");
const Braids = require("../assets/Braids.png");
const Afro = require("../assets/Afro.png");
const Curls = require("../assets/Curly.png");
const Straight = require("../assets/Straight.png");
const Locks = require("../assets/Locks.png");

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
      <div className="ServicesHome">
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
          <li className='BookingButton'>BOOKING</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
