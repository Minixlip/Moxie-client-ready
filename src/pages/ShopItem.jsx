import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useFetchSingleProduct } from "../hooks/FetchSingleProduct";

const ShopItem = () => {
  const { itemname } = useParams();

  const { product, error, fetchSingleProduct } = useFetchSingleProduct();

  useEffect(() => {
    const getItem = async () => {
      try {
        await fetchSingleProduct({ itemname });
      } catch (error) {
        console.error("Error fetching item:", error);
        // Handle error
      }
    };
    getItem();
  }, []);

  useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <div>
      <main>
        <div>
          <Header />
        </div>
        {product && (
          <div className="flex flex-col lg:flex-row xl:mx-48 gap-4 mx-2 min-h-screen">
            <div>
              <img src={product.item.img} />
            </div>
            <div className="flex flex-col">
              <div className="text-4xl font-semibold ml-1">
                <span>{product.item.name}</span>
              </div>
              <div className="mt-6 font-semibold text-xl">
                <span>£{product.item.price}</span>
              </div>
              <div className="mt-6 tracking-wider">
                <span>{product.item.description}</span>
              </div>
              <div className="mt-6">
                <motion.button
                  initial={{ background: "#4170E8" }}
                  whileHover={{
                    background: "#000000",
                    transition: { ease: "linear", duration: 0.3 },
                  }}
                  className="text-2xl font-semibold px-12 py-3 text-white"
                >
                  Buy now
                </motion.button>
              </div>
              <div className="flex flex-col gap-2 mt-6">
                <span className="text-lg font-semibold tracking-wide">
                  SIZE & FIT
                </span>
                <ul className="list-disc ml-4 tracking-wider flex flex-col gap-2">
                  <li>{product.item.size}</li>
                  <li>Chest: {product.item.chest}&#34;</li>
                  <li>Waist: {product.item.waist}&#34;</li>
                  <li>Hips: {product.item.hips}&#34;</li>
                  <li>Height: {product.item.height}&#34;</li>
                </ul>
              </div>
              <div className="mt-10 flex flex-col gap-2">
                <span className="text-lg font-semibold">MATERIAL & CARE</span>
                <ul className="flex list-disc ml-4 tracking-wider flex-col gap-2">
                  <li>{product.item.material}</li>
                </ul>
              </div>
              <div className="mt-8 flex flex-col gap-4">
                <span className="text-lg font-semibold">Specifications</span>
                <div>{product.item.description}</div>
              </div>
            </div>
          </div>
        )}
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
};

export default ShopItem;
