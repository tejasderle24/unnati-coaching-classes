
import React, { useState } from "react";

const ResetPassword = ({ isOpen, onClose }) => {
  const [state, setState] = useState({
    otp: "",
    newPassword: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/api/auth/reset-password`, state)
      toast.success("password succesfully")
      onNewPasswordSuccess(); // open OTP modal

    } catch (error) {
      console.error("password error:", error.response?.data?.message)
      toast.error(error.response?.data?.message)
      onClose();
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-red-500">
          ✖
        </button>

        <h2 className="text-xl font-bold text-center mb-4">Reset Password</h2>

        <input
          type="text"
          placeholder="Enter OTP"
          value={state.otp}
          onChange={(e) => setState({ ...state, otp: e.target.value })}
          className="w-full px-4 py-2 border rounded mb-3"
        />
        <input
          type="password"
          placeholder="Enter New Password"
          value={state.newPassword}
          onChange={(e) => setState({ ...state, newPassword: e.target.value })}
        className="w-full px-4 py-2 border rounded mb-3"
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;