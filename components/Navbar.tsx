"use client";

import React, { useContext } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Badge } from "@mui/material";
import { CartContext } from "@/context/CartContext";
import { signOut, useSession } from "next-auth/react";

type Props = {};

const Navbar = () => {
  const pathname = usePathname();
  const { status, data } = useSession();
  const router = useRouter();
  const { cartItems } = useContext(CartContext);

  return (
    <div className="border-b-2 shadow-md  items-center flex justify-between h-[10vh] p-4">
      <Link href="/" className="font-semibold">
        SHOP IT
      </Link>
      <div className=" flex space-x-10">
        {data ? (
          <button
            onClick={() => {
              signOut();
              router.push("/");
            }}
          >
            Logout{" "}
          </button>
        ) : (
          <Link href="/auth">Login / Register </Link>
        )}
        <Link href="/cart">
          <Badge badgeContent={cartItems.length} color="primary">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
