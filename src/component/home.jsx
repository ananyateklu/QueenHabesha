import { motion } from 'framer-motion';
import { useRef, useEffect, useState, React } from 'react';
import styleImages from './styleImages'
const Salon = require('../assets/Salon.jpg');


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
      <motion.div ref={carousel} className='carousel' whileTap={{cursor:'grabbing'}}>
        <motion.div drag = 'x' dragConstraints={{right: 0, left: - width}} dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }} className='inner-carousel'>
          {styleImages.map((styleImage, index) => {
            return(
              <motion.div className='item' key={styleImage} whileHover={{ scale: 1.2 }}>
                <img src={styleImage} alt='Hair Styles'/>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Home