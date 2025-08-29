import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { About, Admission, Contact, Gallery, Home, Results, Courses } from "./pages";
import StudentRegister from "./components/students/StudentRegister";
import EnquiryForm from "./components/client/EnquiryForm";
import { Phone } from "lucide-react";

const AppContent = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar shown on all pages */}
      <Navbar />

      {/* Page Content */}
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/results" element={<Results />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/student-register" element={<StudentRegister />} />
        </Routes>
      </main>

      {/* Fixed Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <button
          onClick={() => setShowEnquiry(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          Quick Enquiry
        </button>

        <a
          href="tel:+919876543210"
          className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          <p className="flex gap-1 text-base">
            <Phone className="h-6 w-6" />
            Call Here
          </p>
        </a>
      </div>

      {/* Enquiry Modal */}
      {showEnquiry && <EnquiryForm onClose={() => setShowEnquiry(false)} />}
    </div>
  );
};

function App() {
  return (

      <AppContent />
  );
}

export default App;
