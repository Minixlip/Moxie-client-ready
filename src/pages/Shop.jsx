import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useFetchProduct } from "../hooks/FetchProducts";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import ErrorPopUp from "../components/Popups/ErrorPopUp";

const zoomIn = {
  initial: { scale: 1, WebkitFilter: "brightness(100%)" },
  animate: { scale: 1.1, WebkitFilter: "brightness(80%)" },
};

const revealbtn = {
  initial: { y: "-50%", opacity: 0 },
  animate: { y: "0%", opacity: 1 },
};

const Shop = () => {
  const [category, setCategory] = useState("ALL");
  const { fetchProduct, error, products } = useFetchProduct();

  useEffect(() => {
    fetchProduct({ category });
  }, [category]);

  return (
    <main>
      <div>
        <Header />
      </div>
      <div className="min-h-screen">
        <div className="flex justify-center items-center flex-col pt-28">
          <span className="text-7xl font-bold">SHOP</span>
          <div className="pt-10 flex gap-4 text-xl">
            <Link to={"/"} className="hover:underline">
              Home
            </Link>
            <span className="select-none">{">"}</span>
            <span className="text-blue-500">Shop</span>
          </div>
        </div>
        <div className="mx-4 xl:mx-64 pt-28">
          <div className="flex gap-4 text-xl font-semibold">
            <button
              onClick={() => setCategory("ALL")}
              disabled={category === "ALL"}
              className={category === "ALL" ? "text-gray-500" : null}
            >
              All
            </button>
            <button
              onClick={() => setCategory("MEN")}
              disabled={category === "MEN"}
              className={category === "MEN" ? "text-gray-500" : null}
            >
              MEN
            </button>
            <button
              onClick={() => setCategory("WOMEN")}
              disabled={category === "WOMEN"}
              className={category === "WOMEN" ? "text-gray-500" : null}
            >
              WOMEN
            </button>
            <button
              onClick={() => setCategory("KIDS")}
              disabled={category === "KIDS"}
              className={category === "KIDS" ? "text-gray-500" : null}
            >
              KIDS
            </button>
          </div>
          <div className="flex flex-wrap gap-8 xl:gap-4 mt-8">
            {products &&
              products.products.map((item, index) => (
                <motion.div
                  initial={"initial"}
                  whileHover={"animate"}
                  className="flex flex-col min-h-[500px] max-h-[500px] max-w-[320px] group "
                  key={index}
                >
                  <div className="relative overflow-hidden">
                    <motion.img
                      initial={{ WebkitFilter: "brightness(100%)" }}
                      variants={zoomIn}
                      transition={{
                        type: "spring",
                        ease: "easeIn",
                        duration: 0.4,
                      }}
                      src={item.img}
                      className="min-h-[500px] max-h-[500px] w-full "
                    />
                    {item.discount ? (
                      <span className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 font-semibold">
                        -{item.discount}%
                      </span>
                    ) : null}
                    <motion.button
                      variants={revealbtn}
                      transition={{
                        type: "spring",
                        ease: "easeIn",
                        duration: 0.5,
                      }}
                      className=" absolute bottom-14 right-1/4 text-xl font-semibold px-6 py-3 text-black bg-white "
                    >
                      BUY NOW
                    </motion.button>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <span className="font-semibold hover:underline underline-offset-1 overflow-hidden text-nowrap">
                      <Link to={{ pathname: `/item/${item.name}` }}>
                        {item.name}
                      </Link>
                    </span>
                    <span className="font-semibold">£{item.price}</span>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
      {error && <ErrorPopUp error={error} />}
    </main>
  );
};

export default Shop;
