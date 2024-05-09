import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="min-h-[50vh] pt-32">
      <div className=" py-24 bg-blue-500 px-4 ">
        <div className="flex flex-col lg:flex-row gap-y-10 justify-between lg:mx-44">
          <div className="">
            <span className="text-white font-semibold text-2xl lg:text-4xl text-wrap">
              Sign up to our newsletter <br /> & get 20% off
            </span>
          </div>
          <div className="w-fit drop-shadow shadow-black">
            <motion.button
              animate={{
                y: ["+200%", "0%"],
                opacity: [0, 1],
                transition: {
                  type: "spring",
                  ease: "easeIn",
                  duration: 1.7,
                  delay: 0.5,
                },
              }}
              initial={{ background: "#ffffff" }}
              whileHover={{
                background: "#3b82f6",
                transition: { ease: "linear", duration: 0.3 },
              }}
              className="text-lg sm:text-2xl font-medium px-12 py-3 text-black"
            >
              SIGN UP FOR FREE
            </motion.button>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row gap-y-10 mx-10 sm:mx-0 justify-evenly flex-wrap items-start">
            <div className="flex flex-col gap-2">
              <span className="text-black font-medium tracking-wide text-2xl ">
                MOXIE
              </span>
              <span className="w-[80%] text-lg font-light">
                Your trusted fashion companion
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-black font-medium tracking-wide text-2xl ">
                Navigation
              </span>
              <div className="flex flex-col  text-lg font-light gap-1">
                <a href="/" className="hover:underline underline-offset-1">
                  Home
                </a>
                <a href="/shop" className="hover:underline underline-offset-1">
                  Shop
                </a>
                <a href="/about" className="hover:underline underline-offset-1">
                  About
                </a>
                <a
                  href="/contact"
                  className="hover:underline underline-offset-1"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-black font-medium tracking-wide text-2xl ">
                Categories
              </span>
              <div className="flex flex-col  text-lg font-light gap-1">
                <a
                  href="/category/men"
                  className="hover:underline underline-offset-1"
                >
                  Men
                </a>
                <a
                  href="/category/women"
                  className="hover:underline underline-offset-1"
                >
                  Women
                </a>
                <a
                  href="/category/kids"
                  className="hover:underline underline-offset-1"
                >
                  Kids
                </a>
              </div>
            </div>
            <div className="flex  gap-2">
              <a href="https://www.facebook.com/">
                <FaFacebook size={"30px"} className="cursor-pointer" />
              </a>

              <a href="https://www.instagram.com/">
                <FaInstagram size={"30px"} className="cursor-pointer" />
              </a>

              <a href="https://www.twitter.com/">
                <FaTwitter size={"30px"} className="cursor-pointer" />
              </a>
              <a className="#">
                {" "}
                <CiMail size={"30px"} className="cursor-pointer" />
              </a>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            All Rights Reserved By @Mo Shihab
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
