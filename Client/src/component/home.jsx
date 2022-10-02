import { motion } from "framer-motion";
import { useRef, useEffect, useState, React } from "react";
import styleImages from "./styleImages";

import Service from "./services";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";



// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const Salon = require("../assets/Salon.jpg");
const Braids = require("../assets/Braids.png");
const Afro = require("../assets/Afro.png");
const Curls = require("../assets/Curly.png");
const Straight = require("../assets/Straight.png");
const Locks = require("../assets/Locks.png");
const Helen = require("../assets/Helen.png");
const Mekdes = require("../assets/Mekdes.jpg");
const quote = require("../assets/quote.png")
const user1 = require("../assets/user1.jpg")
const user2 = require("../assets/user2.jpg")
const user3 = require("../assets/user3.jpg")



function Home() {
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
        <Service />
      </div>
      <div className="OurCrew">
        <h1>OUR CREW</h1>
        <div>
          <img src={Helen} alt="Straight"></img>
          <h2>HELEN HAILU</h2>
          <h3>HAIR STYLIST</h3>
        </div>
        <div>
          <img src={Mekdes} alt="Straight"></img>
          <h2>MEKDES</h2>
          <h3>HAIR STYLIST</h3>
        </div>
        <ul>
          <li className='BookingButton'>CONTACT US</li>
        </ul>
      </div>
      <div className="Testimonials OurCrew">
        <h1>TESTIMONIALS</h1>
      </div>
      <div className="container">



        
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{delay:5000}}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
        <div className="testimonialBox">
                    <img src={quote.png} className="quote" alt=""></img>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus, dui vel rhoncus elementum,
                             lorem velit posuere nulla, nec accumsan leo felis eget tellus. Sed laoreet ipsum suscipit, dapibus 
                             sapien a, dignissim elit. Sed odio felis, condimentum nec augue at, iaculis feugiat massa. Duis a 
                             sollicitudin ipsum, sed blandit magna.</p>
                            </div> 
                             <div className="details">
                      <div className="imgBx">
                        <img src={user1.jpg} alt=""></img >
                      </div>
                      <h3>Someone Famous<br/><span>
                        Creative Designer
                      </span></h3>
                    </div> 
                  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="testimonialBox">
                    <img src={quote.png} className="quote" alt=""></img>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus, dui vel rhoncus elementum,
                             lorem velit posuere nulla, nec accumsan leo felis eget tellus. Sed laoreet ipsum suscipit, dapibus 
                             sapien a, dignissim elit. Sed odio felis, condimentum nec augue at, iaculis feugiat massa. Duis a 
                             sollicitudin ipsum, sed blandit magna.</p>
                            </div> 
                             <div className="details">
                      <div className="imgBx">
                        <img src={user2.jpg} alt=""></img >
                      </div>
                      <h3>Someone Famous<br/><span>
                        Creative Designer
                      </span></h3>
                    </div> 
                  </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="testimonialBox">
                    <img src={quote.png} className="quote" alt=""></img>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin faucibus, dui vel rhoncus elementum,
                             lorem velit posuere nulla, nec accumsan leo felis eget tellus. Sed laoreet ipsum suscipit, dapibus 
                             sapien a, dignissim elit. Sed odio felis, condimentum nec augue at, iaculis feugiat massa. Duis a 
                             sollicitudin ipsum, sed blandit magna.</p>
                            </div> 
                             <div className="details">
                      <div className="imgBx">
                        <img src={user3.jpg} alt=""></img >
                      </div>
                      <h3>Someone Famous<br/><span>
                        Creative Designer
                      </span></h3>
                    </div> 
                  </div>
        </SwiperSlide>
        
        
      </Swiper>



      </div>
    </div>
  );
}

export default Home;
