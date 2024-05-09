import Header from '../components/Header';

import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState, useRef } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
import logoipsum1 from '../assets/logoipsum/logoipsum-1.svg';
import logoipsum2 from '../assets/logoipsum/logoipsum-2.svg';
import logoipsum3 from '../assets/logoipsum/logoipsum-3.svg';
import logoipsum4 from '../assets/logoipsum/logoipsum-4.svg';
import logoipsum5 from '../assets/logoipsum/logoipsum-5.svg';
import logoipsum6 from '../assets/logoipsum/logoipsum-6.svg';

const slides = [
  {
    name: 'GET UPTO 65% OFF',
  },
  {
    name: 'FREE SHIPPING ON ORDERS £50+',
  },
  {
    name: 'GET YOUR £20 BONUS REWARD',
  },
];

const slides2 = [
  {
    name: 'SEE MORE BEST SELLER',
  },
  {
    name: 'SEE MORE BEST SELLER',
  },
  {
    name: 'SEE MORE BEST SELLER',
  },
  {
    name: 'SEE MORE BEST SELLER',
  },
];

const slides3 = [
  {
    name: 'SEE ALL FEATURED',
  },
  {
    name: 'SEE ALL FEATURED',
  },
  {
    name: 'SEE ALL FEATURED',
  },
  {
    name: 'SEE ALL FEATURED',
  },
];

const homeItems = [
  {
    imgUrl:
      'https://framerusercontent.com/images/Zy5cklUTR5TmgSoeykcfPkiDABI.jpg',
    discount: 15,
    name: 'OVERSIZED FIT COTTON T-SHIRT',
    price: 190,
  },
  {
    imgUrl: 'https://framerusercontent.com/images/6cKC0PWCp1QT4U3h4ddQ1bSE.jpg',
    discount: 20,
    name: 'BUTTON-DETAIL JACKET',
    price: 420,
  },
  {
    imgUrl:
      'https://framerusercontent.com/images/w8kz5mW7DXC8NmwdnFLaQMr9iXw.jpg',
    discount: null,
    name: 'WOMEN SOLID SLIM FIT BREASTED JACKET',
    price: 420,
  },
];

const featuredItems = [
  {
    imgUrl:
      'https://framerusercontent.com/images/a5PKH3GfBWrGHGtnPxjYossak.jpg',
    discount: 20,
    name: 'VISCOSE SHIRT DRESS',
    price: 340,
  },
  {
    imgUrl:
      'https://framerusercontent.com/images/zYi98oLKw7AmwbA02xbNH1D8BA.jpg',
    discount: 15,
    name: 'STRAIGHT REGULAR JEANS',
    price: 220,
  },
  {
    imgUrl:
      'https://framerusercontent.com/images/iJEVnMlteLamU5vBviExWGKPzdg.jpg',
    discount: 15,
    name: 'COTTON TWILL JACKET',
    price: 75,
  },
];

const alsoLikeItems = [
  {
    imgUrl:
      'https://framerusercontent.com/images/YBzhFpRBY9oxFjsmiYoIfpFpbrI.jpg',
    discount: null,
    name: 'LINEN-BLEND SHIRT',
    price: 340,
  },
  {
    imgUrl:
      'https://framerusercontent.com/images/V2f0rQG84lNfaVfTPvyXTJLCJY.jpg',
    discount: null,
    name: 'COTTON PIQUE POLO SHIRT',
    price: 65,
  },
  {
    imgUrl:
      'https://framerusercontent.com/images/wSnHST3A7kLB2sHtzs5zFsAhPvQ.jpg',
    discount: null,
    name: 'TERREX XPLORIC RAIN.RDY HIKING JACKET',
    price: 320,
  },
  {
    imgUrl:
      'https://framerusercontent.com/images/ahUuoZ1ym6E6cFYZSDkLFCJXM.jpg',
    discount: null,
    name: 'SHORT SLEEVE ESSENTIAL EMBROIDERED TEE',
    price: 50,
  },
  {
    imgUrl:
      'https://framerusercontent.com/images/12SXmzPKQhZ6qIGwa1y3f4NFCEY.jpg',
    discount: null,
    name: 'LINEN-BLEND SHIRT DRESS',
    price: 340,
  },
  {
    imgUrl:
      'https://framerusercontent.com/images/BVExmLNVKzIcoinXAaFlU32ylA.jpg',
    discount: 15,
    name: 'STRETCH WOVEN PANT',
    price: 60,
  },
  {
    imgUrl:
      'https://framerusercontent.com/images/3drmuaU6qR4QRHLNTtoYNf3eRas.jpg',
    discount: 20,
    name: 'Rust Color Ruffle Spread Shirt',
    price: 350,
  },
  {
    imgUrl:
      'https://framerusercontent.com/images/NP6LcQ5YJ3XTCf130U4B3B4Y6c.jpg',
    discount: null,
    name: 'WATER-REPELLENT PUFFER JACKET',
    price: 75,
  },
  {
    imgUrl:
      'https://framerusercontent.com/images/ysKEbEybHVUfub8JTmGadNTVbF0.jpg',
    discount: null,
    name: 'JOGGERS',
    price: 60,
  },
  {
    imgUrl:
      'https://framerusercontent.com/images/lblAz5zi9BZoLgvGgVWVWq2wbNs.jpg',
    discount: null,
    name: 'CITY ESCAPE PREMIUM CARGO PANTS',
    price: 220,
  },
];

const zoomIn = {
  initial: { scale: 1, WebkitFilter: 'brightness(100%)' },
  animate: { scale: 1.1, WebkitFilter: 'brightness(80%)' },
};

const revealbtn = {
  initial: { y: '-50%', opacity: 0 },
  animate: { y: '0%', opacity: 1 },
};

const moveTextUp = {
  initial: { y: '0%' },
  animate: { y: '-20%' },
};

const Home = () => {
  const duplicatedSlides = [...slides, ...slides];
  const duplicatedSlides2 = [...slides2, ...slides2];
  const duplicatedSlides3 = [...slides3, ...slides3];

  const [pastLanding, setPastLanding] = useState(true);

  const [ref, inView] = useInView({
    threshold: 0.9,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    // Update pastLanding state based on inView value
    if (inView) {
      setPastLanding(inView);
    }

    if (inView2) {
      setPastLanding(!inView2);
    }

    // Log the current value of pastLanding for debugging
    console.log(pastLanding);
  }, [inView, inView2]); // Listen for changes in the inView value

  return (
    <div className="pb-20">
      <section
        ref={ref2}
        className=" relative"
      >
        {!pastLanding ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: {
                type: 'spring',
                ease: 'ease',
                duration: 1.5,
              },
            }}
            className="fixed w-full bg-blue-600 z-50"
          >
            <div className=" lg:mx-[200px] overflow-hidden">
              {/* Wrapping div for seamless looping */}
              <motion.div
                className="flex"
                animate={{
                  x: ['-200%', '0%'],
                  transition: {
                    ease: 'linear',
                    duration: 20,
                    repeat: Infinity,
                  },
                }}
              >
                {/* Render duplicated slides */}
                {duplicatedSlides.map((slide, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{ width: `${150 / slides.length}%` }}
                  >
                    <div className="flex flex-col items-center justify-center h-full lg:w-[80%] text-[8px] text-nowrap  lg:text-sm text-white">
                      {slide.name}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ) : null}
        <motion.div
          initial={{ background: 'none', paddingTop: '10px' }}
          animate={{
            background: pastLanding ? '#ffffff' : 'transparent',
            paddingTop: pastLanding ? '-50px' : '10px',
            transition: {
              type: 'spring',
              ease: 'ease',
              duration: 2,
            },
          }}
          className="fixed w-full z-50"
        >
          <Header />
        </motion.div>
        <motion.div
          animate={{
            backgroundSize: ['130%', '100%'],
            opacity: [0, 1],
            transition: {
              type: 'spring',
              ease: 'easeIn',
              duration: 1.5,
            },
          }}
          className="lg:homeBg"
        >
          <div className="  lg:mx-44  ">
            <div className="min-h-[50vh] lg:min-h-screen flex items-center lg:pl-16 homeBg lg:bg-none  ">
              <div className="flex-1 flex items-center lg:items-start flex-col text-center lg:text-start xl:pt-52 lg:ml-10 overflow-y-hidden  ">
                <motion.h2
                  animate={{
                    y: ['+150%', '0%'],
                    opacity: [0, 1],
                    transition: {
                      type: 'spring',
                      ease: 'easeIn',
                      duration: 1.7,
                      delay: 0.5,
                    },
                  }}
                  className="text-3xl lg:text-8xl font-bold lg:w-[60%] text-white"
                >
                  WEAR CLOTHES THAT MATTER
                </motion.h2>
                <div className="mt-8 overflow-y-hidden">
                  <motion.button
                    animate={{
                      y: ['+200%', '0%'],
                      opacity: [0, 1],
                      transition: {
                        type: 'spring',
                        ease: 'easeIn',
                        duration: 1.7,
                        delay: 0.5,
                      },
                    }}
                    initial={{ background: '#4170E8' }}
                    whileHover={{
                      background: '#000000',
                      transition: { ease: 'linear', duration: 0.3 },
                    }}
                    className="text-2xl font-semibold px-12 py-3 text-white"
                  >
                    Shop Now
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <section
        ref={ref}
        className="lg:mx-44 min-h-screen"
      >
        <div className="flex py-20">
          <ul className="flex flex-1 justify-evenly flex-wrap gap-x-6 gap-y-20">
            <li>
              <img
                src={logoipsum1}
                className="h-[24px]"
              />
            </li>
            <li>
              <img
                src={logoipsum2}
                className="h-[24px]"
              />
            </li>
            <li>
              <img
                src={logoipsum3}
                className="h-[24px]"
              />
            </li>
            <li>
              <img
                src={logoipsum4}
                className="h-[24px]"
              />
            </li>
            <li>
              <img
                src={logoipsum5}
                className="h-[24px]"
              />
            </li>
            <li>
              <img
                src={logoipsum6}
                className="h-[24px]"
              />
            </li>
          </ul>
        </div>
        <div className="pt-20 px-10">
          <div>
            <span className="text-5xl font-bold text-black  italic">
              BEST SELLER
            </span>
          </div>
          <div className="pt-10">
            <div className="flex flex-col gap-10 lg:flex-row">
              {homeItems.map((item, index) => (
                <motion.div
                  initial={'initial'}
                  whileHover={'animate'}
                  className="flex flex-col max-w-[300px] lg:max-w-[500px] group "
                  key={index}
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      initial={{ WebkitFilter: 'brightness(100%)' }}
                      variants={zoomIn}
                      transition={{
                        type: 'spring',
                        ease: 'easeIn',
                        duration: 0.4,
                      }}
                      src={item.imgUrl}
                      className="max-h-[500px] w-full "
                    />
                    {item.discount ? (
                      <span className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 font-semibold">
                        -{item.discount}%
                      </span>
                    ) : null}
                    <motion.button
                      variants={revealbtn}
                      transition={{
                        type: 'spring',
                        ease: 'easeIn',
                        duration: 0.5,
                      }}
                      className=" absolute bottom-14 right-1/4 text-xl font-semibold px-6 py-3 text-black bg-white "
                    >
                      BUY NOW
                    </motion.button>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <span className="font-semibold hover:underline underline-offset-1">
                      <a href="/shop">{item.name}</a>
                    </span>
                    <span className="font-semibold">£{item.price}</span>
                  </div>
                </motion.div>
              ))}
              <div className="flex flex-col max-w-[300px] lg:max-w-[600px] cursor-pointer">
                <div className="relative overflow-hidden">
                  <motion.img
                    initial={{ WebkitFilter: 'brightness(60%)' }}
                    variants={zoomIn}
                    transition={{
                      type: 'spring',
                      ease: 'easeIn',
                      duration: 0.4,
                    }}
                    src={
                      'https://framerusercontent.com/images/fGGdZvb7EzGR1bQmw3Qsv45WJs.jpg?scale-down-to=1024'
                    }
                    className="max-h-[600px] w-full "
                  />
                  <div>
                    <motion.div className="absolute bottom-2 w-full bg-transparent z-50">
                      <div className=" overflow-hidden">
                        {/* Wrapping div for seamless looping */}
                        <motion.div
                          className="flex"
                          animate={{
                            x: ['-200%', '0%'],
                            transition: {
                              ease: 'linear',
                              duration: 12,
                              repeat: Infinity,
                            },
                          }}
                        >
                          {/* Render duplicated slides */}
                          {duplicatedSlides2.map((slide, index) => (
                            <div
                              key={index}
                              className="flex-shrink-0"
                              style={{ width: `${300 / slides.length}%` }}
                            >
                              <div className="flex flex-col items-center justify-center h-full lg:w-[80%] text-[16px] text-nowrap  xl:text-lg text-white">
                                {slide.name}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:mx-44 pb-10 sm:min-h-[70vh] xl:min-h-screen">
        <div className="lg:py-60 py-32">
          <div className="relative ">
            <motion.video
              initial={{ WebkitFilter: 'brightness(60%)' }}
              className="absolute top-0 w-full max-h-[600px] object-cover z-10"
              autoPlay
              muted
              loop
            >
              <source
                src="https://framerusercontent.com/assets/tr8elm3Uf4tD94tKpOyJIQFGI.mp4"
                type="video/mp4"
              />
            </motion.video>
            <div className="absolute xl:top-[300px] lg:top-[70px] top-5 left-20 z-50 flex flex-col gap-3 justify-start items-start">
              <span className=" text-2xl xl:text-3xl text-white font-semibold tracking-wide">
                Moxie Exclusive Deal
              </span>
              <p className="hidden sm:inline-flex text-white xl:w-1/3">
                Discover the epitome of style with Moxie Exclusives. Elevate
                your wardrobe with premium brands, where luxury meets fashion.
                Immerse yourself in a world of unparalleled elegance. Explore
                now!
              </p>
              <motion.button
                initial={{
                  background:
                    'linear-gradient(currentColor 0 0) 0 100% /var(--d, 0) 3px no-repeat',
                }}
                whileHover={{
                  '--d': '100%',
                  transition: {
                    type: 'spring',
                    ease: 'easeIn',
                    duration: 1.5,
                  },
                }}
                className="text-white flex items-center gap-3 text-2xl mt-5"
              >
                Visit Shop <FaArrowRightLong />
              </motion.button>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:mx-44 min-h-screen ">
        <div className="flex py-20">
          <div className=" pt-20 px-10 flex flex-col flex-1 items-start ">
            <div>
              <span className="text-5xl font-bold text-black  italic">
                FEATURED
              </span>
            </div>
            <div className="pt-10 flex">
              <div className="flex-1 flex flex-col gap-10 lg:flex-row">
                {featuredItems.map((item, index) => (
                  <motion.div
                    initial={'initial'}
                    whileHover={'animate'}
                    className="flex flex-col max-w-[300px] lg:max-w-[500px] group "
                    key={index}
                  >
                    <div className="relative overflow-hidden">
                      <motion.img
                        initial={{ WebkitFilter: 'brightness(100%)' }}
                        variants={zoomIn}
                        transition={{
                          type: 'spring',
                          ease: 'easeIn',
                          duration: 0.4,
                        }}
                        src={item.imgUrl}
                        className="max-h-[500px] w-full "
                      />
                      {item.discount ? (
                        <span className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 font-semibold">
                          -{item.discount}%
                        </span>
                      ) : null}
                      <motion.button
                        variants={revealbtn}
                        transition={{
                          type: 'spring',
                          ease: 'easeIn',
                          duration: 0.5,
                        }}
                        className=" absolute bottom-14 right-1/4 text-xl font-semibold px-6 py-3 text-black bg-white "
                      >
                        BUY NOW
                      </motion.button>
                    </div>
                    <div className="flex flex-col gap-y-2">
                      <span className="font-semibold hover:underline underline-offset-1">
                        <a href="/shop">{item.name}</a>
                      </span>
                      <span className="font-semibold">£{item.price}</span>
                    </div>
                  </motion.div>
                ))}
                <div className="flex flex-col max-w-[300px] lg:max-w-[600px] cursor-pointer">
                  <div className="relative overflow-hidden">
                    <motion.img
                      initial={{ WebkitFilter: 'brightness(60%)' }}
                      variants={zoomIn}
                      transition={{
                        type: 'spring',
                        ease: 'easeIn',
                        duration: 0.4,
                      }}
                      src={
                        'https://framerusercontent.com/images/9SazqeFTnXrYVlCuTm8R7IBsboU.jpg?scale-down-to=1024'
                      }
                      className="max-h-[600px] w-full "
                    />
                    <div>
                      <motion.div className="absolute bottom-2 w-full bg-transparent z-50">
                        <div className=" overflow-hidden">
                          {/* Wrapping div for seamless looping */}
                          <motion.div
                            className="flex"
                            animate={{
                              x: ['-200%', '0%'],
                              transition: {
                                ease: 'linear',
                                duration: 12,
                                repeat: Infinity,
                              },
                            }}
                          >
                            {/* Render duplicated slides */}
                            {duplicatedSlides3.map((slide, index) => (
                              <div
                                key={index}
                                className="flex-shrink-0"
                                style={{ width: `${300 / slides.length}%` }}
                              >
                                <div className="flex flex-col items-center justify-center h-full lg:w-[80%] text-[16px] text-nowrap  xl:text-lg text-white">
                                  {slide.name}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:mx-44 min-h-screen">
        <div className="flex px-10 flex-col">
          <div className="flex flex-col gap-y-4 sm:flex-row justify-between w-full">
            <div>
              <span className="text-5xl font-bold tracking-wide italic">
                SHOP
              </span>
            </div>
            <div className=" overflow-y-hidden shadow-md w-fit ">
              <motion.button
                initial={{ background: '#4170E8' }}
                whileHover={{
                  background: '#000000',
                  transition: { ease: 'linear', duration: 0.3 },
                }}
                className="text-2xl font-semibold px-12 py-3 text-white  "
              >
                VISIT SHOP
              </motion.button>
            </div>
          </div>
          <div className=" flex flex-col lg:flex-row py-20">
            <div className="flex-1 mx-2 my-4 lg:my-0">
              {' '}
              <motion.div
                initial={'initial'}
                whileHover={'animate'}
                className="relative flex justify-end  max-h-[550px] max-w-[550px] lg:max-w-none overflow-hidden cursor-pointer"
              >
                <motion.img
                  initial={{ WebkitFilter: 'brightness(100%)' }}
                  variants={zoomIn}
                  transition={{
                    type: 'spring',
                    ease: 'easeIn',
                    duration: 0.4,
                  }}
                  className="flex-1"
                  src="https://framerusercontent.com/images/rZ7ujBaa5BAzdp5fwhNvyZFLAnc.jpg"
                />
                <motion.span
                  variants={moveTextUp}
                  transition={{
                    type: 'spring',
                    ease: 'ease',
                    duration: 0.4,
                  }}
                  className=" absolute bottom-1 left-1 text-4xl font-semibold px-6 py-3 text-white  "
                >
                  Men
                </motion.span>
              </motion.div>
            </div>
            <div className="flex-1 xl:mx-2">
              {' '}
              <motion.div
                initial={'initial'}
                whileHover={'animate'}
                className="relative flex justify-end  max-h-[480px] max-w-[550px] lg:max-w-none overflow-hidden cursor-pointer"
              >
                <motion.img
                  initial={{ WebkitFilter: 'brightness(100%)' }}
                  variants={zoomIn}
                  transition={{
                    type: 'spring',
                    ease: 'easeIn',
                    duration: 0.4,
                  }}
                  className="flex-1"
                  src="https://framerusercontent.com/images/cv9pTkCGUsKJxFT7RCuwQTwcs8.jpg"
                />
                <motion.span
                  variants={moveTextUp}
                  transition={{
                    type: 'spring',
                    ease: 'ease',
                    duration: 0.4,
                  }}
                  className=" absolute bottom-1 left-1 text-4xl font-semibold px-6 py-3 text-white  "
                >
                  Women
                </motion.span>
              </motion.div>
            </div>
          </div>
          <div className="pt-36">
            <div>
              <span className="text-5xl font-bold italic">
                YOU MAY ALSO LIKE
              </span>
            </div>
            <div className="flex pt-14 items-center">
              <div className="overflow-hidden">
                <Carousel items={alsoLikeItems} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
