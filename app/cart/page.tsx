import React from "react";
import Cart from "./Cart";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

type Props = {};

const page = async (props: Props) => {
  const session = await getServerSession(authOptions);

  return (
    <div className=" grid place-items-center pt-3">
      <Cart />
    </div>
  );
};

export default page;
