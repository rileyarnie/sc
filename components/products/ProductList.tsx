import React from "react";
import Product from "./Product";

type Props = {};

export type ProductType = {
  id: string;
  original_price: number;
  promotional_price: number;
  percentage_savings: number;
  image_url: string;
  product_name: string;
  weight: number;
  size: string;
};

const products: ProductType[] = [
  {
    id: "a1e6f4ab-4f29-4bcf-b1a3-9a3a6a81d583",
    original_price: 50,
    promotional_price: 40,
    image_url:
      "https://threadheads.com/cdn/shop/products/Black_Ringer-Back_61460641-3882-4915-8458-30d0cf716df0.jpg?v=1688009029&width=800",
    product_name: "Classic T-Shirt",
    weight: 200,
    size: "Medium",
    percentage_savings: 20,
  },
  {
    id: "90a2e8f1-674b-43f7-8b85-d5a48e1c5c89",
    original_price: 120,
    promotional_price: 95,
    image_url:
      "https://threadheads.com/cdn/shop/products/Black_Ringer-Back_61460641-3882-4915-8458-30d0cf716df0.jpg?v=1688009029&width=800",
    product_name: "Leather Handbag",
    weight: 800,
    size: "Large",
    percentage_savings: 20.833333333333336,
  },
  {
    id: "c605df0a-dc7d-4d3c-a8f3-8f75fcf97ed2",
    original_price: 30,
    promotional_price: 25,
    image_url:
      "https://threadheads.com/cdn/shop/products/Black_Ringer-Back_61460641-3882-4915-8458-30d0cf716df0.jpg?v=1688009029&width=800",
    product_name: "Stainless Steel Water Bottle",
    weight: 300,
    size: "Small",
    percentage_savings: 16.666666666666664,
  },
  {
    id: "6b8c79c5-7744-45b7-b047-0a7d31db6503",
    original_price: 80,
    promotional_price: 70,
    image_url:
      "https://threadheads.com/cdn/shop/products/Black_Ringer-Back_61460641-3882-4915-8458-30d0cf716df0.jpg?v=1688009029&width=800",
    product_name: "Bluetooth Headphones",
    weight: 150,
    size: "One Size Fits All",
    percentage_savings: 12.5,
  },
  {
    id: "a1e6f4ab-4f29-4bcf-b1a3-9a3a6a81d582",
    original_price: 50,
    promotional_price: 40,
    image_url:
      "https://threadheads.com/cdn/shop/products/Black_Ringer-Back_61460641-3882-4915-8458-30d0cf716df0.jpg?v=1688009029&width=800",
    product_name: "Classic T-Shirt",
    weight: 200,
    size: "Medium",
    percentage_savings: 20,
  },
  {
    id: "90a2e8f1-674b-43f7-8b85-d5a48e1c5c87",
    original_price: 120,
    promotional_price: 95,
    image_url:
      "https://threadheads.com/cdn/shop/products/Black_Ringer-Back_61460641-3882-4915-8458-30d0cf716df0.jpg?v=1688009029&width=800",
    product_name: "Leather Handbag",
    weight: 800,
    size: "Large",
    percentage_savings: 20.833333333333336,
  },
  {
    id: "c605df0a-dc7d-4d3c-a8f3-8f75fcf97e82",
    original_price: 30,
    promotional_price: 25,
    image_url:
      "https://threadheads.com/cdn/shop/products/Black_Ringer-Back_61460641-3882-4915-8458-30d0cf716df0.jpg?v=1688009029&width=800",
    product_name: "Stainless Steel Water Bottle",
    weight: 300,
    size: "Small",
    percentage_savings: 16.666666666666664,
  },
  {
    id: "6b8c79c5-7744-45b7-b047-0a7d31db6513",
    original_price: 80,
    promotional_price: 70,
    image_url:
      "https://threadheads.com/cdn/shop/products/Black_Ringer-Back_61460641-3882-4915-8458-30d0cf716df0.jpg?v=1688009029&width=800",
    product_name: "Bluetooth Headphones",
    weight: 150,
    size: "One Size Fits All",
    percentage_savings: 12.5,
  },
];

const ProductList = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
