import { useState } from "react";

export const useFetchSingleProduct = () => {
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);

  const fetchSingleProduct = async (itemName) => {
    setError(null);

    const response = await fetch(
      `http://localhost:4000/api/product/fetch/item`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemName),
      }
    );
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setError(null);
      setProduct(json);
    }
  };

  return { fetchSingleProduct, product, error };
};
