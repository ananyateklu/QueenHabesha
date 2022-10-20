import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const Braids = require("../assets/Braids.png");
const Afro = require("../assets/Afro.png");
const Curls = require("../assets/Curly.png");
const Straight = require("../assets/Straight.png");
const Locks = require("../assets/Locks.png");

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 }
};

const Service = () => {

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="Services"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
       <h1>SERVICES WE OFFER</h1>
        <div className="ser-img">
          <img src={Braids} alt="Braids"></img>
          <h2>BRAIDS</h2>
        </div>
        <div className="ser-img">
          {" "}
          <img src={Locks} alt="Locks"></img>
          <h2>LOCKS</h2>
        </div>
        <div className="ser-img">
          <img src={Afro} alt="Afro"></img>
          <h2>AFRO</h2>
        </div>
        <div className="ser-img">
          {" "}
          <img src={Curls} alt="Curls"></img>
          <h2>CURLS</h2>
        </div>
        <div className="ser-img">
          <img src={Straight} alt="Straight"></img>
          <h2>STRAIGHT</h2>
        </div>
        <ul>
          <li className='BookingButton'>BOOKING</li>
        </ul>
    </motion.div>
  );
};

export default Service;