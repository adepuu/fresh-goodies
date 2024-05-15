// import { Product } from "@/types/product";
// import { useEffect, useState } from "react";

// const useProduct = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [categories, setCategories] = useState<string[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch("http://localhost:8080");
//       const data = (await response.json()) as Product[];

//       const uniqueCategories = new Set(data.map))

//       setProducts(data);
//     };
//     fetchData();
//   }, []);
//   // [] only called once, jd ga render terus2an

//   return { products };
// };

// export default useProduct;




// useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/products");
//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const filterProductsByCategory = (category: string): Product[] => {
//     return category === "All"
//       ? products
//       : products.filter((product) => product.category === category);
//   };