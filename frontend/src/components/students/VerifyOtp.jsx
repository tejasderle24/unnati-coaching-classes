
// // components/VerifyOtp.jsx
// import React from "react";
// import { X } from "lucide-react";

// const VerifyOtp = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   const handleVerify = (e) => {
//     e.preventDefault();
//     alert("OTP Verified Successfully!");
//     onClose(); // close after verification
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
//       <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
//         >
//           <X size={24} />
//         </button>

//         <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
//           Verify OTP
//         </h2>

//         <form onSubmit={handleVerify} className="space-y-4">
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//             required
//           />

//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
//           >
//             Verify OTP
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VerifyOtp;


// components/students/VerifyOtp.jsx
import React, { useState } from "react";
import { X } from "lucide-react";

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
          <X size={24} />
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
