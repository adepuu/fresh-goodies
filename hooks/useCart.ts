import {
  addCartItem,
  getCart,
  getRelatedCartProduct,
  removeCartItem,
  updateCart,
} from "@/api/getCart";
import { GET_CART, GET_CART_PRODUCTS } from "@/constants/queryKey";
import { CartItem, ProductCartMap, ShoppingCart } from "@/types/cart";
import { Product } from "@/types/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";

const useCart = (): ShoppingCart => {
  const queryClient = useQueryClient();

  const {
    data: cart,
    isLoading: cartLoading,
    error: cartError,
  } = useQuery({
    queryKey: [GET_CART],
    queryFn: async () => await getCart(),
  });

  const {
    data: cartRelatedProducts,
    isLoading: cartRelatedProductsLoading,
    error: cartRelatedProductsError,
  } = useQuery({
    queryKey: [GET_CART_PRODUCTS, cart?.map((item) => item.productId)],
    queryFn: async () => {
      const productIds = cart?.map((item) => item.productId) || [];
      return await getRelatedCartProduct(productIds);
    },
    enabled: !!cart,
  });

  const productCartMap: ProductCartMap = useMemo(() => {
    const newMap: ProductCartMap = {};
    if (!cart) return newMap;
    cart.forEach((item) => {
      newMap[item.productId] = item;
    });
    return newMap;
  }, [cart]);

  const updateItemQuantityMutation = useMutation({
    mutationFn: updateCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_CART] });
      queryClient.invalidateQueries({ queryKey: [GET_CART_PRODUCTS] });
    },
  });

  const addNewItemMutation = useMutation({
    mutationFn: addCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_CART] });
      queryClient.invalidateQueries({ queryKey: [GET_CART_PRODUCTS] });
    },
  });

  const removeItemMutation = useMutation({
    mutationFn: removeCartItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_CART] });
      queryClient.invalidateQueries({ queryKey: [GET_CART_PRODUCTS] });
    },
  });

  const addItem = (product: Product, quantity: number) => {
    const newItem: CartItem = {
      id: product.id,
      productId: product.id,
      quantity: quantity,
    };
    addNewItemMutation.mutate(newItem);
  };

  const removeItem = (productId: number) => {
    removeItemMutation.mutate(productId);
  };

  const updateItemQuantity = (productId: number, quantity: number) => {
    const updatedItem: CartItem = {
      id: productId,
      productId: productId,
      quantity: quantity,
    };
    updateItemQuantityMutation.mutate(updatedItem);
  };

  const getTotalPrice = () => {
    if (!cartRelatedProducts) return 0;
    return cartRelatedProducts.reduce((total, product) => {
      const cartItem = productCartMap[product.id];
      if (!cartItem) return total;
      return total + product.price * cartItem.quantity;
    }, 0);
  };

  const lastTwoItems = useMemo(() => {
    if (!cart || !cartRelatedProducts) return undefined;
    const lastTwoCartItems = cart.slice(-2);
    const lastTwoProducts = lastTwoCartItems
      .map((cartItem) =>
        cartRelatedProducts.find((product) => product.id === cartItem.productId)
      )
      .filter((product): product is Product => product !== undefined);
    return lastTwoProducts.length > 0 ? lastTwoProducts : undefined;
  }, [cart, cartRelatedProducts]);

  return {
    addItem,
    cart,
    error: cartError || cartRelatedProductsError,
    getTotalPrice,
    isLoading: cartLoading || cartRelatedProductsLoading,
    lastTwoItems,
    productCartMap,
    removeItem,
    updateItemQuantity,
  };
};

export default useCart;
