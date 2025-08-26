
// // components/StudentRegister.jsx
// import React from "react";
// import { X } from "lucide-react";

// const StudentRegister = ({ isOpen, onClose }) => {
//   if (!isOpen) return null; // agar open nahi hai to kuch render mat karo

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
//       <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md relative">
//         {/* Cancel / Close Arrow */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
//         >
//           <X size={24} />
//         </button>

//         <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
//           Student Registration
//         </h2>

//         <form className="space-y-4">
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
//           />

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default StudentRegister;



// components/StudentRegister.jsx
import React from "react";
import { X } from "lucide-react";

const StudentRegister = ({ isOpen, onClose, onRegisterSuccess }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose(); // close register modal
    onRegisterSuccess(); // open OTP modal
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
          Student Registration
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentRegister;
