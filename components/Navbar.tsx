"use client";

import React, { useContext } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "@mui/material";
import { CartContext } from "@/context/CartContext";
import { signOut } from "next-auth/react";

type Props = { session: boolean };

const Navbar = ({ session }: Props) => {
  const pathname = usePathname();

  const { cartItems } = useContext(CartContext);

  return (
    <div className="border-b-2 shadow-md  items-center flex justify-between h-[10vh] p-4">
      <Link href="/" className="font-semibold">
        SHOP IT
      </Link>
      <div className=" flex space-x-10">
        {session ? (
          <button onClick={() => signOut()}>Logout </button>
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
