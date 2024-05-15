import { config } from "@/constants/url";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

interface ProductGroup {
  // Category name: Multiple products
  // Hashmap category as its key, 
  // Array of product as its value
  [key: string]: Product[];
}

const useProduct = () => {
  const [products, setProduct] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [productGroup, setProductGroup] = useState<ProductGroup>();

  useEffect(() => {
    const fetchData = async () => {
      // https://localhost:8080/products
      const response = await fetch(config.BASE_URL+config.endpoints.products);
      const data = await response.json() as Product[];

      const uniqueCategories = new Set(data.map(product => product.category));
      const categoriesArray = Array.from(uniqueCategories);
      const groupData: ProductGroup = {};

      console.log("Raw data: ", data);
      console.log("Categories: ", categoriesArray);
      
      categoriesArray.forEach(category => {
        const currentCategoryProducts = data.filter(product => product.category === category);
        groupData[category] = currentCategoryProducts;
      });

      setProductGroup(groupData);
      setCategories(categoriesArray);
      setProduct(data);
    }

    fetchData();
  }, []) 
  //empty depedency array so it wont be called every render
  // [] means that only called once

  return { products, productGroup, categories }
}

export default useProduct;