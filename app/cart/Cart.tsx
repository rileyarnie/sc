"use client";

import { CartContext } from "@/context/CartContext";
import React, { useContext } from "react";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useRouter } from "next/navigation";

type Props = {};

const Cart = (props: Props) => {
  const {
    cartItems,
    emptyCart,
    calculateCartTotalPrice,
    addToCart,
    removeFromCart,
  } = useContext(CartContext);

  const router = useRouter();

  return (
    <div>
      {cartItems.length ? (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            cartItem={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))
      ) : (
        <EmptyCart />
      )}
      {cartItems.length >= 1 && (
        <>
          <div className="px-5 flex justify-between mt-4">
            <p className="capitalize font-semibold">total price</p>
            <p className="capitalize font-semibold">
              Ksh.{calculateCartTotalPrice()}
            </p>
          </div>
          <div className="mt-3 flex justify-between">
            <button
              className="px-4 py-1 bg-red-500 rounded-md"
              onClick={emptyCart}
            >
              Empty Cart
            </button>
            <button
              className="px-4 py-1 bg-green-500 rounded-md"
              onClick={() => router.push("/checkout")}
            >
              Check out
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
