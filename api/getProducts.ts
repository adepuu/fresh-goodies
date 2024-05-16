import { config } from "@/constants/url";
import { Product } from "@/types/product";

async function getData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  let URL = config.BASE_URL + config.endpoints.products

  const response = fetch(config.BASE_URL + config.endpoints.products, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}

export async function getProducts() {
  const Products = await getData() as Product[];
  return Products;
}
