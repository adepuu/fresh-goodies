import { addCartItem, getCart, removeCartItem, updateCart } from "@/api/getCart";
import { GET_CART } from "@/constants/queryKey";
import { CartItem, ProductCartMap, ShoppingCart } from "@/types/cart";
import { Product } from "@/types/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";

const useCart = (): ShoppingCart => {
  const queryClient = useQueryClient();

  const {
    data: cart,
    isLoading,
    error,
  } = useQuery({
    queryKey: [GET_CART],
    queryFn: async () => await getCart(),
  });

  const productCartMap: ProductCartMap = useMemo(() => {
    const newMap: ProductCartMap = {};
    if (!cart) return newMap;
    cart.forEach(item => {
      newMap[item.productId] = item;
    });
    return newMap;
  }, [cart]);

  const updateItemQuantityMutation = useMutation({
    mutationFn: updateCart,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [GET_CART] });
    },
  });

  const addNewItemMutation = useMutation({
    mutationFn: addCartItem,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [GET_CART] });
    },
  });

  const removeItemMutation = useMutation({
    mutationFn: removeCartItem,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [GET_CART] });
    },
  });

  const addItem = (product: Product, quantity: number) => {
    const newItem: CartItem = { id: product.id, productId: product.id, quantity: quantity }
    addNewItemMutation.mutate(newItem)
  }

  const removeItem = (productId: number) => {
    removeItemMutation.mutate(productId)
  }
  
  const updateItemQuantity = (productId: number, quantity: number) => {
    const updatedItem: CartItem = { id: productId, productId: productId, quantity: quantity }
    updateItemQuantityMutation.mutate(updatedItem)
  }
  const getTotalPrice = () => {
    return 0
  }

  return { cart, productCartMap, isLoading, error, addItem, removeItem, updateItemQuantity, getTotalPrice };
};

export default useCart;
