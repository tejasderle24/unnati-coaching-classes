
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { API } from "../../api";
import toast from "react-hot-toast";

const VerifyOtp = ({ isOpen, onClose, email }) => {
  const [otp, setOtp] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/api/auth/verify`, {
        email,   // email pass karna zaroori hai
        otp
      });

      toast.success("OTP verified successfully!");
      onClose(); // modal band kar do

    } catch (error) {
      console.error("OTP error:", error.response?.data?.message);
      toast.error(error.response?.data?.message || "Invalid or expired OTP");
    }
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