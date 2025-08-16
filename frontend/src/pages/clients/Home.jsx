import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome to Unnati Coaching Classes
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Guiding Students Towards Academic Excellence & Bright Futures
          </p>
          <Link
            to="/admission"
            className="mt-6 inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition"
          >
            Enroll Now
          </Link>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-800">About Us</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            At Unnati Coaching Classes, we are dedicated to providing quality
            education for school, junior college, and competitive exam
            aspirants. Our mission is to nurture talent and help students
            achieve their full potential.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-block px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-800">
            Our Courses
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-800">
                School (8th-10th)
              </h3>
              <p className="mt-2 text-gray-600">
                Strong foundation in Maths, Science, and Languages.
              </p>
              <Link to="/courses/school" className="mt-4 inline-block text-blue-800 font-semibold">
                Learn More →
              </Link>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-800">
                Junior College (11th-12th)
              </h3>
              <p className="mt-2 text-gray-600">
                Expert guidance for Science & Commerce streams.
              </p>
              <Link to="/courses/junior" className="mt-4 inline-block text-blue-800 font-semibold">
                Learn More →
              </Link>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center border hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-800">
                Competitive Exams
              </h3>
              <p className="mt-2 text-gray-600">
                Preparation for NEET, JEE, MHT-CET, and more.
              </p>
              <Link to="/courses/competitive" className="mt-4 inline-block text-blue-800 font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-800">
            Our Achievements
          </h2>
          <p className="mt-4 text-gray-600">
            Over the years, our students have consistently achieved top ranks
            in board exams and competitive tests.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-orange-500">95%</h3>
              <p className="text-gray-600">Average Board Exam Results</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-orange-500">50+</h3>
              <p className="text-gray-600">Toppers Produced</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-orange-500">1000+</h3>
              <p className="text-gray-600">Happy Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <h3 className="text-2xl font-bold">
            Ready to start your success journey?
          </h3>
          <Link
            to="/admission"
            className="mt-4 md:mt-0 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition"
          >
            Enroll Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
