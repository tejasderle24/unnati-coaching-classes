// import React, { useState } from "react";
// import ResetPassword from "./ResetPassword";

// const Login = ({ isOpen, onClose, onForgotPassword }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-gray-500 bg-opacity-100 flex items-center justify-center z-50">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative animate-fadeIn">
//         {/* Close button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
//         >
//           ✖
//         </button>

//         <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
//           Student Login
//         </h2>

//         <div className="space-y-4">
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//           />
//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
//           />
//         </div>

//         <button 
//         onClick={student}
//          className="w-full mt-6 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition">
//           Login
//         </button>

//         <p
//           onClick={onForgotPassword}
//           className="text-blue-600 text-sm text-center mt-4 cursor-pointer hover:underline"
//         >
//           Forgot Password?
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ navigate import
import ResetPassword from "./ResetPassword";

const Login = ({ isOpen, onClose, onForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ hook for navigation

  if (!isOpen) return null;

  // ✅ Handle login
  const handleLogin = () => {
    // TODO: yahan tum API call bhi kar sakti ho login verify karne ke liye
    navigate("/student                                                                                                                                                                                                                                                                    register"); // redirect to student register page
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative animate-fadeIn">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
        >
          ✖
        </button>

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Student Login
        </h2>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full mt-6 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Login
        </button>

        <p
          onClick={onForgotPassword}
          className="text-blue-600 text-sm text-center mt-4 cursor-pointer hover:underline"
        >
          Forgot Password?
        </p>
      </div>
    </div>
  );
};

export default Login;
