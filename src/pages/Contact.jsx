import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { FaHouse } from "react-icons/fa6";

const Contact = () => {
  const [faq, setFaq] = useState(0);

  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="min-h-screen flex flex-col">
        <div className="flex justify-center items-center flex-col pt-28">
          <span className="text-3xl lg:text-7xl font-bold">CONTACT US</span>
          <div className="pt-10 flex gap-4 text-xl">
            <Link to={"/"} className="hover:underline">
              Home
            </Link>
            <span className="select-none">{">"}</span>
            <span className="text-blue-500">Contact Us</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:mx-48 mx-2 pt-10">
          <div className="flex flex-col flex-1 ">
            <div className="flex flex-col gap-2 text-3xl font-semibold tracking-wide">
              <span className="">Need any help?</span>
              <span>we&#39;re here for you</span>
            </div>
            <div className="flex flex-col pt-10 gap-4 tracking-wide">
              <span className="text-xl font-semibold ">CALL US</span>
              <span>+96746737637</span>
              <span>+96746737637</span>
            </div>
            <div className="flex flex-col pt-10 gap-4 tracking-wide">
              <span className="text-xl font-semibold ">MAIL</span>
              <span>hello@moxie.com</span>
            </div>
          </div>
          <form className="flex flex-col flex-1 gap-4 pt-10 lg:pt-0">
            <div>
              <input
                type="text"
                className="bg-[#EBEBEB] rounded-md px-4 py-2 outline-none  w-3/5"
                placeholder="Name"
                required
                id="name"
                name="name"
                autoComplete="additional-name"
              />
            </div>
            <div>
              <input
                type="email"
                className="bg-[#EBEBEB] rounded-md px-4 py-2 outline-none w-3/5"
                placeholder="Email"
                required
                id="email"
                name="email"
                autoComplete="email"
              />
            </div>
            <div>
              <textarea
                type="text"
                className="bg-[#EBEBEB] rounded-md px-4 py-2 outline-none w-3/5 h-60"
                placeholder="Message"
                required
                id="message"
                name="message"
              />
            </div>
            <div>
              <motion.button
                initial={{ background: "#000000" }}
                whileHover={{
                  background: "#3b3b3b",
                  transition: { ease: "linear", duration: 0.6 },
                }}
                type="submit"
                className="text-2xl font-semibold px-12 py-3 text-white rounded-md lg:w-3/5"
              >
                Shop Now
              </motion.button>
            </div>
          </form>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center items-center pt-32">
            <h2 className="text-3xl font-bold tracking-wide">
              FREQUENTLY ASKED
            </h2>
          </div>
          <div className="flex flex-col mx-2 lg:mx-56 pt-16">
            <motion.div
              whileTap={{
                transition: { ease: "linear", duration: 0.6 },
              }}
              onClick={() => setFaq(1)}
              className="cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">
                  How often do you introduce new collections?
                </span>
                <span>
                  <FaHouse size={"20px"} />
                </span>
              </div>
              {faq === 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 100,
                    transition: { ease: "linear", duration: 0.6 },
                  }}
                  className="pt-6"
                >
                  <span className="tracking-wide text-xl">
                    We regularly refresh our collections to keep up with the
                    latest trends and deliver a diverse range of styles. New
                    arrivals are introduced seasonally, ensuring you have access
                    to the latest fashion statements.
                  </span>
                </motion.div>
              )}
              <motion.div
                animate={{ transition: { ease: "linear", duration: 0.6 } }}
                className="pt-2"
              >
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              </motion.div>
            </motion.div>
            <motion.div
              whileTap={{
                transition: { ease: "linear", duration: 0.6 },
              }}
              onClick={() => setFaq(2)}
              className="cursor-pointer"
            >
              <div className="flex justify-between">
                <span className="text-2xl font-bold">
                  Do you offer international shipping?
                </span>
                <span>
                  <FaHouse size={"20px"} />
                </span>
              </div>
              {faq === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 100,
                    transition: { ease: "linear", duration: 0.6 },
                  }}
                  className="pt-6"
                >
                  <span className="tracking-wide text-xl">
                    Yes, we provide international shipping to bring Moxies
                    exclusive styles to customers around the world. Shipping
                    fees and delivery times may vary based on the destination.
                  </span>
                </motion.div>
              )}
              <motion.div
                animate={{ transition: { ease: "linear", duration: 0.6 } }}
                className="pt-2"
              >
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              </motion.div>
            </motion.div>
            <motion.div
              whileTap={{
                transition: { ease: "linear", duration: 0.6 },
              }}
              onClick={() => setFaq(3)}
              className="cursor-pointer"
            >
              <div className="flex justify-between">
                <span className="text-2xl font-bold">
                  Are gift cards available?
                </span>
                <span>
                  <FaHouse size={"20px"} />
                </span>
              </div>
              {faq === 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 100,
                    transition: { ease: "linear", duration: 0.6 },
                  }}
                  className="pt-6"
                >
                  <span className="tracking-wide text-xl">
                    Absolutely! Moxie offers gift cards of various
                    denominations, making them a perfect choice for those who
                    want to share the gift of premium fashion with their loved
                    ones.
                  </span>
                </motion.div>
              )}
              <motion.div
                animate={{ transition: { ease: "linear", duration: 0.6 } }}
                className="pt-2"
              >
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Contact;
