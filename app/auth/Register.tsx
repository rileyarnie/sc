import React from "react";

type Props = {};

const Register = (props: Props) => {
  return (
    <form className="space-y-4">
      <div className="flex flex-col space-y-1">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          className="py-4 px-2 rounded-sm border border-gray-500 "
          required
          name="phoneNumber"
          type="number"
          placeholder="Phone Number"
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="name">First Name</label>
        <input
          className="py-4 px-2 rounded-sm border border-gray-500 "
          required
          name="firstName"
          type="text"
          placeholder="First Name"
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="name">Last Name</label>
        <input
          className="py-4 px-2 rounded-sm border border-gray-500 "
          required
          name="lastName"
          type="text"
          placeholder="Last Name"
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="password">Password</label>
        <input
          className="py-4 px-2 rounded-sm border border-gray-500"
          required
          name="password"
          placeholder="Password"
          type="password"
        />
      </div>
    </form>
  );
};

export default Register;
