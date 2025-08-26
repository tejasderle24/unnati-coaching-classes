import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault(); // page reload hone se rokta hai
    console.log("Message Sent Successfully!", formData);
    alert("Message Sent Successfully! ✅");
  };

  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <section className="text-center py-12 px-4">
        <h2 className="text-4xl font-bold text-blue-800">Contact Us</h2>
        <p className="mt-3 text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
          Get in touch with us for admissions, course information, or any
          queries. We're here to help you achieve your academic goals.
        </p>
      </section>

      {/* Contact Info + Form */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 lg:px-16">
        {/* Contact Info */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            Get in Touch
          </h3>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-blue-600 w-6 h-6" />
              <p>
                Shivaji Nagar, Near Bus Stand, Sinnar, Nashik - 422100 <br />
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-green-600 w-6 h-6" />
              <p>
                +91 98765 43210 <br /> +91 98765 43211
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-red-600 w-6 h-6" />
              <p>
                info@unnaticoaching.com <br /> admissions@unnaticoaching.com
              </p>
            </div>
            <div className="flex items-start gap-3">
              <FaClock className="text-purple-600 w-6 h-6" />
              <p>
                Monday - Saturday: 9:00 AM - 7:00 PM <br />
                Sunday: 10:00 AM - 2:00 PM
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3">
            {/* WhatsApp Button */}
            <button
              onClick={() =>
                window.open("https://wa.me/919876543210", "_blank")
              }
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-lg font-semibold"
            >
              WhatsApp Us
            </button>

            {/* Call Button */}
            <button
              onClick={() => (window.location.href = "tel:+919876543210")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold"
            >
              Call Now
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            Send us a Message
          </h3>
          <form onSubmit={handleSend} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Select a subject</option>
                <option>Admission</option>
                <option>Courses</option>
                <option>General Query</option>
              </select>
            </div>
            <textarea
              rows="4"
              name="message"
              placeholder="Message *"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 lg:px-16 py-12">
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            Find Us on Map
          </h3>

          {/* Google Maps Embed */}
          <div className="rounded-lg overflow-hidden h-60">
            <iframe
              title="Nashik Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.4858442182537!2d73.78980251493258!3d19.997453986018315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeba6f9c5f65f%3A0xb62887d9dfe8e94b!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1692600000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Google Maps Link Button */}
          <button
            onClick={() =>
              window.open("https://www.google.com/maps/place/Nashik,+Maharashtra", "_blank")
            }
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Open in Google Maps
          </button>
        </div>
      </section>


      {/* Branches */}
      <section className="px-6 lg:px-16 pb-12">
        <h3 className="text-center text-2xl font-bold text-blue-800 mb-8">
          Our Branches
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="font-semibold text-lg">Main Branch</h4>
            <p className="text-gray-600 mt-2">
              123 Education Street, Knowledge Park, Delhi
            </p>
            <p className="text-blue-600 font-medium mt-2">+91 98765 43210</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="font-semibold text-lg">South Branch</h4>
            <p className="text-gray-600 mt-2">
              456 Learning Avenue, South Delhi
            </p>
            <p className="text-blue-600 font-medium mt-2">+91 98765 43211</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="font-semibold text-lg">North Branch</h4>
            <p className="text-gray-600 mt-2">
              789 Study Circle, North Delhi
            </p>
            <p className="text-blue-600 font-medium mt-2">+91 98765 43212</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
