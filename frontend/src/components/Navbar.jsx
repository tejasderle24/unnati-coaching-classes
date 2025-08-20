import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import logo1 from "../assets/logo1.svg";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 font-primary">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo1} alt="Unnati Logo" className="h-16 w-16 md:h-20 md:w-20" />
          <h1 className="text-lg md:text-xl font-bold text-blue-800">
            Unnati Coaching Classes
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          <li><Link to="/" className="hover:text-blue-800">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-800">About Us</Link></li>
          <li><Link to="/courses" className="hover:text-blue-800">Courses</Link></li>
          <li><Link to="/results" className="hover:text-blue-800">Results</Link></li>
          <li><Link to="/gallery" className="hover:text-blue-800">Gallery</Link></li>
          <li><Link to="/contact" className="hover:text-blue-800">Contact</Link></li>
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
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md animate-slide-down">
          <ul className="flex flex-col space-y-3 p-4 font-medium text-gray-700">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
            <li><Link to="/courses" onClick={() => setIsOpen(false)}>Courses</Link></li>
            <li><Link to="/results" onClick={() => setIsOpen(false)}>Results</Link></li>
            <li><Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li>
              <a
                href="tel:+919876543210"
                className="block px-4 py-2 border rounded-lg text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white transition"
              >
                📞 Call Now
              </a>
            </li>
            <li>
              <Link
                to="/admission"
                className="block w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
              >
                Enroll Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
