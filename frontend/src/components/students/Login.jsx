import React, { useState } from "react";

const Login = ({ isOpen, onClose, onForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity -50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-red-500">
          ✖
        </button>

        <h2 className="text-2xl font-bold text-center mb-4">Student Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded mb-3"
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded mb-3"
        />

        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
          Login
        </button>

        <p
          onClick={onForgotPassword}
          className="text-blue-600 text-sm text-center mt-3 cursor-pointer hover:underline"
        >
          Forgot Password?
        </p>
      </div>
    </div>
  );
};

export default Login;
