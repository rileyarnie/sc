"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const EmptyCart = (props: Props) => {
  const router = useRouter();

  return (
    <div className="space-y-4 grid place-items-center ">
      <p>Your cart is empty. Please add some items to continue</p>

      <button
        onClick={() => router.push("/")}
        className="bg-blue-500 px-4 py-2 rounded-md text-white"
      >
        Go back to home
      </button>
    </div>
  );
};

export default EmptyCart;
