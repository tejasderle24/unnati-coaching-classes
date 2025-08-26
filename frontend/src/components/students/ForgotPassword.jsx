import React, { useState } from "react";

const ForgotPassword = ({ isOpen, onClose, onOtpSent }) => {
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-red-500">
          ✖
        </button>

        <h2 className="text-xl font-bold text-center mb-4">Forgot Password</h2>

        <input
          type="email"
          placeholder="Enter your registered Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded mb-3"
        />

        <button
          onClick={onOtpSent}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Send OTP
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
