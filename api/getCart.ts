import { config } from "@/constants/url";
import { CartItem } from "@/types/cart";
import { Product } from "@/types/product";

async function getData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  let URL = config.BASE_URL + config.endpoints.cart

  const response = fetch(URL, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}

async function removeData(id: number) {
  const options = {
    method: "DELETE",
    headers: {
      accept: "application/json",
    },
  };

  let URL = config.BASE_URL + config.endpoints.cart + "/" + id

  const response = fetch(URL, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}

async function updateData(updatedData: CartItem) {
  const options = {
    method: "PUT",
    headers: {
      accept: "application/json",
    },
    body: JSON.stringify({ ...updatedData, id: updatedData.id.toString()})
  };

  let URL = config.BASE_URL + config.endpoints.cart + "/" + updatedData.id

  const response = fetch(URL, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}

async function addData(newData: CartItem) {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
    },
    body: JSON.stringify({ ...newData, id: newData.id.toString()})
  };

  let URL = config.BASE_URL + config.endpoints.cart

  const response = fetch(URL, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}

async function getRelatedProducts(productIds: number[]) {
  if (!productIds) return [];

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const mergedQuery = productIds.map((each, index) => index === 0 ? `id=${each}` : `&id=${each}`)
  let URL = `${config.BASE_URL}${config.endpoints.products}?${mergedQuery}`

  const response = fetch(URL, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
}

export async function getCart() {
  const Cart = await getData() as CartItem[];
  return Cart;
}

export async function updateCart(updatedData: CartItem) {
  const Cart = await updateData(updatedData) as boolean;
  return Cart;
}

export async function addCartItem(newData: CartItem) {
  const Cart = await addData(newData) as boolean;
  console.log(newData);
  return Cart;
}

export async function removeCartItem(id: number) {
  const Cart = await removeData(id) as boolean;
  return Cart;
}

export async function getRelatedCartProduct(productIds: number[]) {
  const Cart = await getRelatedProducts(productIds) as Product[];
  return Cart;
}
