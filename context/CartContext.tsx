"use client";

import { ProductType } from "@/components/products/ProductList";
import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

export type CartItemType = ProductType & { quantity: number };

export type CartContextType = {
  cartItems: CartItemType[];
  addToCart: (item: ProductType) => void;
  removeFromCart: (item: ProductType) => void;
  emptyCart: () => void;
  calculateCartTotalPrice: () => number;
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: (item: ProductType) => {},
  removeFromCart: (item: ProductType) => {},
  emptyCart: () => {},
  calculateCartTotalPrice: () => 0,
});

export const CartProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  const addToCart = (item: ProductType) => {
    const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (itemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    toast.success("Item added to cart");
  };

  const removeFromCart = (item: ProductType) => {
    const itemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (itemInCart?.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id === item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const calculateCartTotalPrice = () => {
    return cartItems.reduce(
      (totalPrice, item) => totalPrice + item.promotional_price * item.quantity,
      0
    );
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cart");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        emptyCart,
        calculateCartTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
