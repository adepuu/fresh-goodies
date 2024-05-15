"use client";

import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product";
import { CategoryContext } from "../context/CategoryContext";

const ProductShowcase = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { activeCategory, changeCategory } = useContext(CategoryContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filterProductsByCategory = (category: string): Product[] => {
    return category === "All"
      ? products
      : products.filter((product) => product.category === category);
  };

  return (
    <div className="grid grid-cols-2 gap-4 mt-4 mx-4">
      {filterProductsByCategory(activeCategory).map((product) => (
        <ProductCard
          key={product.id}
          image={product.imageUrl}
          price={product.price * product.weight}
          name={product.name}
        />
      ))}
    </div>
  );
};

export default ProductShowcase;
