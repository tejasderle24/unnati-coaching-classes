import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo1 from "../assets/logo1.svg";
import { FaBars, FaTimes, FaPhone, FaUser } from "react-icons/fa";

// Student Flow Components
import StudentRegister from "./students/StudentRegister";
import VerifyOtp from "./students/VerifyOtp";
import ForgotPassword from "./students/ForgotPassword";
import ResetPassword from "./students/ResetPassword";
import Login from "./students/Login";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Modal States
  const [showRegister, setShowRegister] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const handleNavClick = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed w-full top-0 z-50 font-primary transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg py-2"
            : "bg-gradient-to-r from-blue-900 to-blue-700 py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-2"
              onClick={handleNavClick}
            >
              <img
                src={logo1}
                alt="Unnati Logo"
                className="h-12 w-12 md:h-16 md:w-16"
              />
              <h1
                className={`text-lg md:text-xl font-bold ${
                  scrolled ? "text-blue-800" : "text-white"
                }`}
              >
                Unnati Coaching Classes
              </h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <ul className="flex space-x-8 font-medium">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `transition-colors duration-200 ${
                        isActive
                          ? scrolled
                            ? "text-blue-800 font-semibold"
                            : "text-white font-semibold"
                          : scrolled
                          ? "text-gray-700 hover:text-blue-800"
                          : "text-blue-100 hover:text-white"
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `transition-colors duration-200 ${
                        isActive
                          ? scrolled
                            ? "text-blue-800 font-semibold"
                            : "text-white font-semibold"
                          : scrolled
                          ? "text-gray-700 hover:text-blue-800"
                          : "text-blue-100 hover:text-white"
                      }`
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/courses"
                    className={({ isActive }) =>
                      `transition-colors duration-200 ${
                        isActive
                          ? scrolled
                            ? "text-blue-800 font-semibold"
                            : "text-white font-semibold"
                          : scrolled
                          ? "text-gray-700 hover:text-blue-800"
                          : "text-blue-100 hover:text-white"
                      }`
                    }
                  >
                    Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/results"
                    className={({ isActive }) =>
                      `transition-colors duration-200 ${
                        isActive
                          ? scrolled
                            ? "text-blue-800 font-semibold"
                            : "text-white font-semibold"
                          : scrolled
                          ? "text-gray-700 hover:text-blue-800"
                          : "text-blue-100 hover:text-white"
                      }`
                    }
                  >
                    Results
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/gallery"
                    className={({ isActive }) =>
                      `transition-colors duration-200 ${
                        isActive
                          ? scrolled
                            ? "text-blue-800 font-semibold"
                            : "text-white font-semibold"
                          : scrolled
                          ? "text-gray-700 hover:text-blue-800"
                          : "text-blue-100 hover:text-white"
                      }`
                    }
                  >
                    Gallery
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `transition-colors duration-200 ${
                        isActive
                          ? scrolled
                            ? "text-blue-800 font-semibold"
                            : "text-white font-semibold"
                          : scrolled
                          ? "text-gray-700 hover:text-blue-800"
                          : "text-blue-100 hover:text-white"
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>

              {/* Desktop Buttons */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowLogin(true)}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                    scrolled
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                >
                  <FaUser className="mr-2" />
                  Student Login
                </button>
              </div>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset ${
                scrolled
                  ? "text-gray-700 focus:ring-blue-500"
                  : "text-white focus:ring-white"
              }`}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          } ${scrolled ? "bg-white" : "bg-blue-900"}`}
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            <MobileNavLink
              to="/"
              onClick={handleNavClick}
              scrolled={scrolled}
              text="Home"
            />
            <MobileNavLink
              to="/about"
              onClick={handleNavClick}
              scrolled={scrolled}
              text="About Us"
            />
            <MobileNavLink
              to="/courses"
              onClick={handleNavClick}
              scrolled={scrolled}
              text="Courses"
            />
            <MobileNavLink
              to="/results"
              onClick={handleNavClick}
              scrolled={scrolled}
              text="Results"
            />
            <MobileNavLink
              to="/gallery"
              onClick={handleNavClick}
              scrolled={scrolled}
              text="Gallery"
            />
            <MobileNavLink
              to="/contact"
              onClick={handleNavClick}
              scrolled={scrolled}
              text="Contact"
            />

            <div className="pt-4 space-y-3 border-t border-gray-200 mt-4">
              <button
                onClick={() => {
                  setShowLogin(true);
                  handleNavClick();
                }}
                className={`w-full flex items-center justify-center px-4 py-2 rounded-lg transition ${
                  scrolled
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-green-500 text-white hover:bg-green-600"
                }`}
              >
                <FaUser className="mr-2" />
                Student Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Add padding to prevent content from being hidden behind fixed navbar */}
      <div className="h-16 lg:h-20"></div>

      {/* Modals */}
      <StudentRegister
        isOpen={showRegister}
        onClose={() => setShowRegister(false)}
        onRegisterSuccess={() => {
          setShowRegister(false);
          setShowOtp(true);
        }}
      />

      <VerifyOtp
        isOpen={showOtp}
        onClose={() => setShowOtp(false)}
        onOtpSuccess={() => {
          setShowOtp(false);
          setShowLogin(true);
        }}
      />

      <Login
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onForgotPassword={() => {
          setShowLogin(false);
          setShowForgotPassword(true);
        }}
        onCreateAccount={() => {
          setShowLogin(false);
          setShowRegister(true);
        }}
      />

      <ForgotPassword
        isOpen={showForgotPassword}
        onClose={() => setShowForgotPassword(false)}
        onResetLink={() => {
          setShowForgotPassword(false);
          setShowResetPassword(true);
        }}
      />

      <ResetPassword
        isOpen={showResetPassword}
        onClose={() => setShowResetPassword(false)}
      />
    </>
  );
};

// Mobile NavLink component for cleaner code
const MobileNavLink = ({ to, onClick, scrolled, text }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `block px-3 py-2 rounded-md text-base font-medium transition ${
          isActive
            ? scrolled
              ? "bg-blue-50 text-blue-800"
              : "bg-blue-800 text-white"
            : scrolled
            ? "text-gray-700 hover:bg-blue-50 hover:text-blue-800"
            : "text-blue-200 hover:bg-blue-800 hover:text-white"
        }`
      }
    >
      {text}
    </NavLink>
  );
};

export default Navbar;