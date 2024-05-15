import { useEffect, useState } from "react";
import { Product } from "@/types/product";

const useProductDetail = (id: number) => {
  const [productDetails, setProductDetails] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (!id) {
        setError(new Error("No Product"));
        setLoading(false);
        return;
      }
      try {
        setLoading(true);

        const response = await fetch(`http://localhost:8080/products`);
        if (!response.ok) {
          throw new Error("Failed to fetch product details.");
        }
        const data = (await response.json()) as Product;
        setProductDetails(data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [id]);
  return { productDetails, loading, error };
};

export default useProductDetail;
