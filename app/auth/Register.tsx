import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

type Props = {};

const Register = (props: Props) => {
  const [userData, setUserData] = useState({
    phone_number: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/register", {
        ...userData,
      });
      toast.success("Account successfully created");
    } catch (error: any) {
      toast.error("Something went wrong. Please try again");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-1">
        <label htmlFor="phone_number">Phone Number</label>
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
        <label htmlFor="first_name">First Name</label>
        <input
          onChange={handleChange}
          className="py-4 px-2 rounded-sm border border-gray-500 "
          required
          name="first_name"
          type="text"
          placeholder="First Name"
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="last_name">Last Name</label>
        <input
          onChange={handleChange}
          className="py-4 px-2 rounded-sm border border-gray-500 "
          required
          name="last_name"
          type="text"
          placeholder="Last Name"
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
        REGISTER
      </button>
    </form>
  );
};

export default Register;
