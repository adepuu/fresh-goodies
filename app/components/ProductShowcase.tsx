"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  price: number;
  weight: number;
  name: string;
  category: string;
  imageUrl: string;
  metadata: {
    unit: string;
    weight: number;
    calorie: number;
    proteins: number;
    fats: number;
    increment: number;
    carbs: number;
  };
}

const ProductShowcase = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 mt-4 mx-4">
      {products.map((product) => (
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
