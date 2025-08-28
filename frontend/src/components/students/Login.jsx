// import React, { useState } from "react";
// import { FaTimes } from "react-icons/fa";
// import axios from "axios";
// import { API } from "../../api";
// import toast from "react-hot-toast";

// const Login = ({ isOpen, onClose, onForgotPassword }) => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: ""
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`${API}/api/auth/login`, formData);
//       toast.success("Login successfully ✅");
//       onClose(); // login success pe modal band karo (agar OTP open karna hai to yaha call karo)

//     } catch (error) {
//       console.error("login error:", error.response?.data?.message);
//       toast.error(error.response?.data?.message || "Login failed ❌");
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
//       <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md relative">
        
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
//         >
//           <FaTimes size={24} />
//         </button>

//         <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
//           Student Login
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
//             required
//           />

//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={formData.password}
//             onChange={(e) =>
//               setFormData({ ...formData, password: e.target.value })
//             }
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
//             required
//           />

//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
//           >
//             Login
//           </button>
//         </form>

//          <p
//           onClick={onForgotPassword}
//           className="text-blue-600 text-sm text-center mt-3 cursor-pointer hover:underline"
//         >
//           Forgot Password?
//         </p>

//         <p
//           onClick={onForgotPassword}
//           className="text-blue-600 text-sm text-center mt-3 cursor-pointer hover:underline"
//         >
//           Forgot Password?
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { API } from "../../api";
import toast from "react-hot-toast";

const Login = ({ isOpen, onClose, onForgotPassword, onCreateAccount }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/api/auth/login`, formData);
      toast.success("Login successfully ✅");
      onClose();
    } catch (error) {
      console.error("login error:", error.response?.data?.message);
      toast.error(error.response?.data?.message || "Login failed ❌");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
        >
          <FaTimes size={24} />
        </button>

        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Student Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        {/* Forgot Password */}
        <p
          onClick={onForgotPassword}
          className="text-blue-600 text-sm text-center mt-3 cursor-pointer hover:underline"
        >
          Forgot Password?
        </p>

        {/* Create Account */}
        <p
          onClick={onCreateAccount}
          className="text-green-600 text-sm text-center mt-2 cursor-pointer hover:underline"
        >
          Don’t have an account? Create one
        </p>
      </div>
    </div>
  );
};

export default Login;
