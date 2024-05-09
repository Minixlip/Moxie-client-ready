import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

const Carousel = ({ items }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag={'x'}
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="item"
            >
              <img src={item.imgUrl} />
              <div className="flex flex-col gap-1 mt-1">
                <span className="font-semibold hover:underline underline-offset-1">
                  <a> {item.name}</a>
                </span>
                <span className="font-semibold">£{item.price}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Carousel;
