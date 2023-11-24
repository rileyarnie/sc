import React from "react";
import Product from "./Product";
import axios from "axios";
type Props = {};

export type ProductType = {
  id: string;
  original_price: number;
  promotional_price: number;
  percentage_savings: number;
  image_url: string;
  product_name: string;
  size: string;
};

async function getProducts() {
  const response = await axios.get("http://localhost:8100/api/products");
  return response.data;
}

const products: ProductType[] = [];

const ProductList = async (props: Props) => {
  const products: ProductType[] = await getProducts();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
