import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import logoipsum1 from '../assets/logoipsum/logoipsum-1.svg';
import logoipsum2 from '../assets/logoipsum/logoipsum-2.svg';
import logoipsum3 from '../assets/logoipsum/logoipsum-3.svg';
import logoipsum4 from '../assets/logoipsum/logoipsum-4.svg';
import logoipsum5 from '../assets/logoipsum/logoipsum-5.svg';
import logoipsum6 from '../assets/logoipsum/logoipsum-6.svg';

import { FaInstagram } from 'react-icons/fa';

const About = () => {
  return (
    <main className="min-h-screen">
      <div>
        <Header />
      </div>
      <div className="flex justify-center items-center pt-28">
        <span className="font-bold text-7xl">ABOUT US</span>
      </div>
      <div className="pt-10 flex gap-4 text-xl justify-center items-center">
        <Link
          to={'/'}
          className="hover:underline"
        >
          Home
        </Link>
        <span className="select-none">{'>'}</span>
        <span className="text-blue-500">About us</span>
      </div>
      <div className="mt-24 xl:mx-36 cardBg h-[400px] mx-2"></div>
      <div className="flex justify-center items-start pt-20 gap-10 flex-wrap">
        <div className="flex flex-col gap-4">
          <span className="font-bold tracking-wider text-xl">SHOP ONLINE</span>
          <p className="w-[260px] text-xl">
            Explore a vast collection of premium clothing from the comfort of
            your home.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold tracking-wider text-xl">
            FREE SHIPPING
          </span>
          <p className="w-[260px] text-xl">
            Enjoy the convenience of free shipping on all orders, nationwide.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold tracking-wider text-xl">
            RETURN POLICY
          </span>
          <p className="w-[260px] text-xl">
            Your satisfaction is our priority. Return any product you are not
            satisfied with.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold tracking-wider text-xl">
            PAYMENT METHODS
          </span>
          <p className="w-[260px] text-xl">
            Choose from a variety of secure payment methods to complete your
            transactions with ease.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center text-center xl:mx-96 pt-28 flex-col">
        <p className="font-bold italic text-2xl tracking-wider leading-10">
          At the heart of Moxie lies a distinctive philosophy that transcends
          trends and embraces the essence of enduring style. Our collections are
          a harmonious blend of sophistication, versatility, and modernity,
          carefully curated to enhance your personal expression. We believe that
          fashion should empower, inspire, and reflect the unique narrative of
          every individual. Moxie is not just about clothing; it&#39;s about
          embracing a lifestyle that embraces the artistry of fashion and the
          poetry of self-expression.
        </p>
        <div className="flex pt-20">
          <ul className="flex flex-1 justify-evenly flex-wrap gap-x-6 gap-y-20 ">
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
      </div>
      <div className="pt-28 xl:mx-64 mx-2">
        <span className="text-5xl font-semibold tracking-wider">
          FOLLOW @MOXIE
        </span>
        <div className="pt-28 flex gap-4">
          <div className="instaCardBG h-[350px] w-[350px] relative rounded-lg">
            <div className="absolute bottom-2 right-2 z-40">
              <FaInstagram
                color="white"
                size={'40px'}
              />
            </div>
          </div>
          <div className="instaCardBG2 h-[350px] w-[350px] relative rounded-lg">
            <div className="absolute bottom-2 right-2 z-40">
              <FaInstagram
                color="white"
                size={'40px'}
              />
            </div>
          </div>
          <div className="instaCardBG3 h-[350px] w-[350px] relative rounded-lg">
            <div className="absolute bottom-2 right-2 z-40">
              <FaInstagram
                color="white"
                size={'40px'}
              />
            </div>
          </div>
          <div className="instaCardBG4 h-[350px] w-[350px] relative rounded-lg">
            <div className="absolute bottom-2 right-2 z-40">
              <FaInstagram
                color="white"
                size={'40px'}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default About;
