
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/logo1.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

// Student Flow Components
import StudentRegister from "./students/StudentRegister";
import VerifyOtp from "./students/VerifyOtp";
import ForgotPassword from "./students/ForgotPassword";
import ResetPassword from "./students/ResetPassword";
import Login from "./students/Login";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Modal States
  const [showRegister, setShowRegister] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50 font-primary">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo1}
              alt="Unnati Logo"
              className="h-16 w-16 md:h-20 md:w-20"
            />
            <h1 className="text-lg md:text-xl font-bold text-blue-800">
              Unnati Coaching Classes
            </h1>
          </Link>

          {/* Desktop Menu */}
          {/* <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
            <li><Link to="/" className="hover:text-blue-800">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-800">About Us</Link></li>
            <li><Link to="/courses" className="hover:text-blue-800">Courses</Link></li>
            <li><Link to="/results" className="hover:text-blue-800">Results</Link></li>
            <li><Link to="/gallery" className="hover:text-blue-800">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-blue-800">Contact</Link></li>
          </ul> */}

          <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-800 font-semibold" : "hover:text-blue-800"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-blue-800 font-semibold" : "hover:text-blue-800"
                }
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  isActive ? "text-blue-800 font-semibold" : "hover:text-blue-900"
                }
              >
                Courses
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/results"
                className={({ isActive }) =>
                  isActive ? "text-blue-800 font-semibold" : "hover:text-blue-800"
                }
              >
                Results
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? "text-blue-800 font-semibold" : "hover:text-blue-800"
                }
              >
                Gallery
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-blue-800 font-semibold" : "hover:text-blue-800"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>


          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4">
            <a
              href="tel:+919876543210"
              className="px-4 py-2 border rounded-lg text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white transition"
            >
              📞 Call Now
            </a>

            <Link
              to="/admission"
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              Enroll Now
            </Link>

            {/* Student Login Popup Button */}
            <button
              onClick={() => setShowRegister(true)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Student Login
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </nav>

      {/* Register Modal */}
      <StudentRegister
        isOpen={showRegister}
        onClose={() => setShowRegister(false)}
        onRegisterSuccess={() => {
          setShowRegister(false);
          setShowOtp(true); // Open OTP verify
        }}
      />

      {/* OTP Modal */}
      <VerifyOtp
        isOpen={showOtp}
        onClose={() => setShowOtp(false)}
        onOtpSuccess={() => {
          setShowOtp(false);
          setShowLogin(true); // Go to login after OTP
        }}
      />

      {/* Login Modal */}
      <Login
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onForgotPassword={() => {
          setShowLogin(false);
          setShowForgotPassword(true);
        }}
      />

      {/* Forgot Password Modal */}
      <ForgotPassword
        isOpen={showForgotPassword}
        onClose={() => setShowForgotPassword(false)}
        onResetLink={() => {
          setShowForgotPassword(false);
          setShowResetPassword(true);
        }}
      />

      {/* Reset Password Modal */}
      <ResetPassword
        isOpen={showResetPassword}
        onClose={() => setShowResetPassword(false)}
      />
    </>
  );
};

export default Navbar;
