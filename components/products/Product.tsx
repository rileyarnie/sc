"use client";

import React, { useContext } from "react";
import { ProductType } from "./ProductList";
import Image from "next/image";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CartContext } from "@/context/CartContext";

type Props = {
  product: ProductType;
};

const Product = ({ product }: Props) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border-[0.5px] rounded-md cursor-pointer hover:scale-105 ease-in-out duration-300  ">
      <div className=" max-h-[500px] h-[50]px bg-white border-b-[0.5px] border-gray-300">
        <Image
          className="object-contain h-[400px] max-h-[400px]"
          src={product.image_url}
          alt={product.product_name}
          height={1000}
          width={1000}
        />
      </div>
      <div className="p-4">
        <div className="space-y-2">
          <p className="font-semibold text-lg">{product.product_name}</p>
          <p className="font-semibold text-2xl">${product.promotional_price}</p>
          <div className="flex space-x-2 text-lg">
            <p className=" text-red-600 line-through">
              ${product.original_price}
            </p>
            <p>{product.percentage_savings.toFixed(2)}% off</p>
          </div>
          <p>Size: {product.size}</p>
        </div>
        <button
          className="border-2 border-blue-600 hover:border-green-600 px-4 py-2 mt-3 text-white bg-blue-600 hover:bg-green-600 duration-200 hover:scale-105"
          onClick={() => addToCart(product)}
        >
          Add to cart <AddShoppingCartIcon sx={{ fontSize: 16 }} />
        </button>
      </div>
    </div>
  );
};

export default Product;
