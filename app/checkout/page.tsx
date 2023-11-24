"use client";

import { CartContext } from "@/context/CartContext";
import { prisma } from "@/db";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import toast from "react-hot-toast";

type Props = {};

const CheckoutPage = (props: Props) => {
  const { cartItems, calculateCartTotalPrice, emptyCart } =
    useContext(CartContext);
  const router = useRouter();
  const { data } = useSession();

  const handleClick = async () => {
    try {
      await axios.post("/api/order", {
        total_price: calculateCartTotalPrice(),
        customerId: data?.user?.name,
        customer: data?.user,
        orderItems: JSON.stringify(cartItems),
      });

      toast.success("order created. Thanks for shopping with us.");
      emptyCart();

      router.push("/");
    } catch (error) {
      toast.error("Failed to place order. Please try again");
    }
  };

  return (
    <div className="p-4">
      <p className="text-center">Your Order Summary</p>
      <div className=" mt-5">
        {cartItems.map((item) => (
          <div className="flex items-center justify-between pr-5" key={item.id}>
            <div className=" flex mb-3 align-middle items-center space-x-10">
              <Image
                src={item.image_url}
                alt={item.product_name}
                height={80}
                width={80}
              />
              <div className=" flex space-x-2">
                <p>{item.quantity} x</p>
                <p>{item.product_name}</p>
              </div>
            </div>
            <p>{item.promotional_price * item.quantity}</p>
          </div>
        ))}
      </div>
      {cartItems.length >= 1 && (
        <>
          <p className="font-medium text-xl text-right pr-5 mt-4">
            Total Price: {calculateCartTotalPrice()}
          </p>
          <div className=" mt-4 space-x-6">
            <button
              onClick={handleClick}
              className="bg-blue-500 px-4 py-2 rounded-md text-white"
            >
              Method 1
            </button>
            <button
              onClick={handleClick}
              className="bg-blue-500 px-4 py-2 rounded-md text-white"
            >
              Method 2
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
