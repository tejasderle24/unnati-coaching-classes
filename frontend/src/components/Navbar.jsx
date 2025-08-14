import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCourses, setShowCourses] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCourses = () => setShowCourses(!showCourses);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Unnati Logo" className="h-10 w-10" />
          <h1 className="text-xl font-bold text-blue-800">
            Unnati Coaching Classes
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700 relative">
          <li>
            <Link to="/" className="hover:text-blue-800">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-800">About Us</Link>
          </li>

          {/* Courses Dropdown */}
          <li
            className="relative flex items-center hover:text-blue-800 cursor-pointer"
            onMouseEnter={() => setShowCourses(true)}
            onMouseLeave={() => setShowCourses(false)}
          >
            <span className="flex items-center">
              Courses <ChevronDown size={16} className="ml-1" />
            </span>
            {showCourses && (
              <ul className="absolute top-8 left-0 bg-white shadow-lg rounded-lg py-2 w-48 border">
                <li>
                  <Link to="/courses/school" className="block px-4 py-2 hover:bg-gray-100">
                    School (8th-10th)
                  </Link>
                </li>
                <li>
                  <Link to="/courses/junior" className="block px-4 py-2 hover:bg-gray-100">
                    Junior College (11th-12th)
                  </Link>
                </li>
                <li>
                  <Link to="/courses/competitive" className="block px-4 py-2 hover:bg-gray-100">
                    Competitive Exams
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/results" className="hover:text-blue-800">Results</Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-blue-800">Gallery</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-800">Contact</Link>
          </li>
        </ul>

        {/* Buttons */}
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
        <div className="md:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col space-y-3 p-4 font-medium text-gray-700">
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link></li>
            <li>
              <button
                className="flex items-center w-full hover:text-blue-800"
                onClick={toggleCourses}
              >
                Courses <ChevronDown size={16} className="ml-1" />
              </button>
              {showCourses && (
                <ul className="mt-2 space-y-2 pl-4 border-l">
                  <li><Link to="/courses/school" onClick={() => setIsOpen(false)}>School</Link></li>
                  <li><Link to="/courses/junior" onClick={() => setIsOpen(false)}>Junior College</Link></li>
                  <li><Link to="/courses/competitive" onClick={() => setIsOpen(false)}>Competitive Exams</Link></li>
                </ul>
              )}
            </li>
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
