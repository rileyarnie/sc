import { ProductType } from "@/components/products/ProductList";
import { CartItemType } from "@/context/CartContext";
import Image from "next/image";
import React from "react";

type Props = {
  cartItem: CartItemType;
  addToCart: (item: ProductType) => void;
  removeFromCart: (item: ProductType) => void;
};

const CartItem = ({ cartItem, addToCart, removeFromCart }: Props) => {
  return (
    <div className=" flex w-[30rem] border max-h-20 border-gray-500 rounded-md mb-2 justify-between pr-5">
      <div className=" flex my-2 space-x-8 align-middle ">
        <Image
          className="h-full object-contain"
          src={cartItem.image_url}
          alt={cartItem.product_name}
          width={100}
          height={100}
        />
        <div className="flex flex-col items-start">
          <p className="font-medium mb-4">{cartItem.product_name}</p>
          <div className="flex align-middle justify-center space-x-4">
            <button
              className="bg-red-500 px-3 rounded-md text-white"
              onClick={() => removeFromCart(cartItem)}
            >
              {" "}
              -{" "}
            </button>
            <p>{cartItem.quantity}</p>
            <button
              className="bg-blue-500 grid place-items-center px-3 rounded-md text-white"
              onClick={() => addToCart(cartItem)}
            >
              {" "}
              +{" "}
            </button>
          </div>
        </div>
      </div>
      <p className="my-auto">
        {cartItem.promotional_price * cartItem.quantity}/=
      </p>
    </div>
  );
};

export default CartItem;
