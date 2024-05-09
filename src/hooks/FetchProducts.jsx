import { useState } from "react";
import { baseUrl } from "../../Urls";

export const useFetchProduct = () => {
  const [error, setError] = useState(null);
  const [products, setProducts] = useState(null);

  const fetchProduct = async (category) => {
    setError(null);

    const response = await fetch(`${baseUrl}api/product/fetch`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setError(null);
      setProducts(json);
    }
  };

  return { fetchProduct, products, error };
};
