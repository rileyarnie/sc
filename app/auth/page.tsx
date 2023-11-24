"use client";

import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

type Props = {};

enum AuthType {
  LOGIN = "login",
  REGISTER = "register",
}

const Auth = (props: Props) => {
  const [authState, setAuthState] = useState<AuthType>(AuthType.LOGIN);

  const handleAuthState = (authType: AuthType) => {
    setAuthState(authType);
  };

  return (
    <div className="grid place-items-center h-[90vh]">
      <div className="p-5 rounded-md border-[1px] shadow-xl">
        <div className="mb-4 grid grid-cols-2 py-4">
          <button
            className={`py-4 ${
              authState === AuthType.LOGIN
                ? "bg-blue-100 underline text-blue-700 underline-offset-8"
                : ""
            }`}
            onClick={() => setAuthState(AuthType.LOGIN)}
          >
            LOGIN
          </button>
          <button
            className={`py-4 ${
              authState === AuthType.REGISTER
                ? "bg-blue-100 underline text-blue-700 underline-offset-8"
                : ""
            }`}
            onClick={() => setAuthState(AuthType.REGISTER)}
          >
            REGISTER
          </button>
        </div>
        {authState === AuthType.LOGIN ? <Login /> : <Register />}
        <div className="my-6 bg-blue-600 py-2 rounded-md text-center text-white">
          {authState === AuthType.LOGIN ? "LOGIN" : "REGISTER"}
        </div>
      </div>
    </div>
  );
};

export default Auth;
