
// components/students/VerifyOtp.jsx
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";



const VerifyOtp = ({ isOpen, onClose }) => {
  const [otp, setOtp] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Entered OTP:", otp);

    // Yaha OTP backend se verify hoga
    alert("✅ OTP Verified Successfully!");

    onClose(); // sab close kardo
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
        >
          <FaTimes size={24} />
        </button>

        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
          Verify OTP
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            maxLength={6}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
