import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex mx-6 xl:mx-64 py-5 lg:py-10 items-end bg-transparent">
      <motion.div
        initial={{ y: "-400%" }}
        animate={{
          y: ["-400%", "0%"],
          transition: {
            type: "spring",
            ease: "easeIn",
            duration: 1.7,
            delay: 0.5,
          },
        }}
        className="hidden xl:flex flex-1 overflow-y-hidden "
      >
        <ul className="flex flex-1 gap-6 text-base">
          <li className="hover:underline underline-offset-1">
            <a href="/shop">SHOP</a>
          </li>
          <li className="hover:underline underline-offset-1">
            <a href="/men">MEN</a>
          </li>
          <li className="hover:underline underline-offset-1">
            <a href="/women">WOMEN</a>
          </li>
          <li className="hover:underline underline-offset-1">
            <a href="/kids">KIDS</a>
          </li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ y: "-400%" }}
        animate={{
          y: ["-400%", "0%"],
          transition: {
            type: "spring",
            ease: "easeIn",
            duration: 1.7,
            delay: 0.5,
          },
        }}
      >
        <Link
          to="/"
          className="text-xl lg:text-3xl tracking-wide cursor-pointer "
        >
          MOXIE
        </Link>
      </motion.div>
      <motion.div
        initial={{ y: "-400%" }}
        animate={{
          y: ["-400%", "0%"],
          transition: {
            type: "spring",
            ease: "easeIn",
            duration: 1.7,
            delay: 0.5,
          },
        }}
        className="flex-1 flex "
      >
        <div className="hidden xl:flex flex-1">
          <ul className="flex flex-1 gap-4 text-base justify-end items-center">
            <li className="hover:underline underline-offset-1">
              <a href="/about">ABOUT</a>
            </li>
            <li className="hover:underline underline-offset-1">
              <a href="/contact">CONTACT</a>
            </li>
            <li className="cursor-pointer">
              <FaSearch size={"20px"} />
            </li>
            <li className="cursor-pointer">
              <Link to={"/shop"}>
                <FaShoppingBag size={"20px"} />
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
