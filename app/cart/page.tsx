import React from "react";
import Cart from "./Cart";

type Props = {};

const page = (props: Props) => {
  return (
    <div className=" grid place-items-center pt-3">
      <Cart />
    </div>
  );
};

export default page;
