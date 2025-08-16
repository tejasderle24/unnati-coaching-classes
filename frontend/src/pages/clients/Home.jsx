import React from "react";
import { Link } from "react-router-dom";
import img11 from "../../assets/img11.png";
import OurCourses from "./OurCourses"; // ✅ Import courses component

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-300 text-white pt-10 font-primary">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold font-primary">
              Welcome to Unnati Coaching Classes
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-md font-primary">
              Guiding Students Towards Academic Excellence & Bright Futures
            </p>
            <Link
              to="/admission"
              className="mt-6 inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition"
            >
              Enroll Now
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={img11}
              alt="Students Learning"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* About Us */}
      {/* <section className="py-16 bg-gray-50 font-primary">
        <div className="max-w-6xl mx-auto px-6 text-center font-primary">
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
      </section> */}

      <section className="py-16 bg-gray-50 font-primary">
        <div className="max-w-6xl mx-auto px-6 text-center font-primary">
          <h2 className="text-3xl font-bold text-blue-800">About Us</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over <strong>15 years</strong>, Unnati Coaching Classes has been a trusted name in academic excellence, guiding thousands of students towards their dreams. We specialize in <strong>PCM, PCB, PCMB, JEE, NEET, and MHT-CET</strong> with a focus on:
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>👩‍🏫 <strong>Expert Faculty</strong> – Experienced mentors with years of teaching expertise.</li>
              <li>📝 <strong>Personalized Learning</strong> – Small batch sizes to give individual attention.</li>
              <li>📚 <strong>Strong Subject Foundation</strong> – In-depth conceptual teaching for better understanding.</li>
              <li>🌟 <strong>Holistic Development</strong> – Focus on confidence-building, discipline, and motivation.</li>
              <li>🎯 <strong>Result-Oriented Approach</strong> – Proven track record of top ranks in board & competitive exams.</li>
              <li>🧠 <strong>Smart Learning Tools</strong> – Regular tests, doubt-clearing sessions, and performance tracking.</li>
            </ul>
          </p>
          <Link
            to="/about"
            className="mt-6 inline-block px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Courses Section from OurCourses component */}
      <OurCourses /> {/* ✅ Direct reuse */}

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
