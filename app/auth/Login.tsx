"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

type Props = {};

const Login = (props: Props) => {
  const router = useRouter();

  const [userData, setUserData] = useState({
    phone_number: "",
    password: "",
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const response = await signIn("credentials", {
        ...userData,
        redirect: false,
      });
      router.push("/");
    } catch (error: any) {
      toast.error("Something went wrong. Please try again");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-1">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          onChange={handleChange}
          className="py-4 px-2 rounded-sm border border-gray-500 "
          required
          name="phone_number"
          type="number"
          placeholder="Phone Number"
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          className="py-4 px-2 rounded-sm border border-gray-500"
          required
          name="password"
          placeholder="Password"
          type="password"
        />
      </div>
      <button
        type="submit"
        className="w-full my-6 bg-blue-600 py-2 rounded-md text-center text-white"
      >
        LOGIN
      </button>
    </form>
  );
};

export default Login;
