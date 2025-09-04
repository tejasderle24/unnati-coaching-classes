


import React, { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { BookOpen, Users } from "lucide-react";
import home1 from "../../assets/home1.jpg";
import home2 from "../../assets/home2.jpg";
import home3 from "../../assets/home3.jpg";
import study1 from "../../assets/study/study1.jpg";
import study2 from "../../assets/study/study2.jpg";
import pcm from "../../assets/courses/pcm.png";
import jee from "../../assets/courses/jee.jpg";
import mhtCet from "../../assets/courses/mhtCet.webp";

const coursesData = [
  {
    title: "PCM",
    description: (
      <>
        <b>Physics, Chemistry, Mathematics (11th & 12th):</b>
        Commencing from <b>15th June</b>.
        Weekly Batches (Monday to Saturday) with <b>Daily 3 to 4 Hrs</b> sessions.
        Revision + Doubt Solving on Sundays.
      </>
    ),
    image: pcm,
  },
  {
    title: "JEE",
    description: (
      <>
        <b>Joint Entrance Examination Preparation:</b>
        Commencing from <b>1st July</b>.
        Sunday to Sunday <b>Daily 4 to 5 Hrs</b>.
        Includes <b>Weekly Tests, Mock Exams, and Guidance for JEE Mains & Advanced</b>.
      </>
    ),
    image: jee,
  },
  {
    title: "MHT-CET",
    description: (
      <>
        <b>Maharashtra CET Preparation:</b>
        Commencing from <b>1st December</b>.
        <b>Daily 3 to 4 Hrs</b> Classes (Morning & Evening Batches).
        Special Crash Course from <b>1st April to Exam</b>.
      </>
    ),
    image: mhtCet,
  },
];

const whyChooseUs = [
  {
    title: "Result-Oriented Faculty",
    description: [
      "Highly qualified and passionate educators with proven track records.",
      "Subject experts for Physics, Chemistry, and Biology/Mathematics.",
      "Regular mentorship and performance tracking.",
    ],
    icon: <BookOpen className="w-12 h-12 text-orange-600" />,
  },
  {
    title: "Integrated Syllabus Coverage",
    description: [
      "Complete syllabus coverage as per NCERT, Maharashtra State Board, and CBSE guidelines.",
      "Conceptual clarity with emphasis on application-based learning.",
    ],
    icon: <BookOpen className="w-12 h-12 text-orange-600" />,
  },
  {
    title: "Personalized Attention",
    description: [
      "Limited batch size for better interaction.",
      "One-on-one doubt-solving and concept reinforcement sessions.",
      "Personal Progress Tracker for each student.",
    ],
    icon: <Users className="w-12 h-12 text-orange-600" />,
  },
  {
    title: "Value-Added Features",
    description: [
      "Motivational Sessions by experts and toppers.",
      "Parent-Teacher Interactions every 12 weeks.",
      "Progress Reviews & Study Counseling.",
    ],
    icon: <Users className="w-12 h-12 text-orange-600" />,
  },
  {
    title: "Our Winning Strategy",
    description: [
      "Concept Mastery + Regular Testing = Success.",
      "Focus on smart revision and retention methods.",
      "Tailor-made strategies for slow learners and high performers.",
      "Consistency, Commitment, and Confidence — the three C's we instill in every student.",
    ],
    icon: <Users className="w-12 h-12 text-orange-600" />,
  },
];

const Home = () => {
  // ✅ Hero Section Background Slider
  const images = [home1, home2, home3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      {/* Hero Section - Full Background Slider */}
      <section className="relative h-[90vh] w-full">
        {/* Background Image + Overlay */}
        <div className="absolute inset-0">
          <img
            src={images[current]}
            alt="Hero Background"
            className="w-full h-full object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Text Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Achieve Your Dreams with Elite Academy
          </h1>
          <p className="text-lg md:text-2xl max-w-2xl mb-6">
            Guiding Students Towards Academic Excellence & Bright Futures
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link
              to="/admission"
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition"
            >
              Get Started
            </Link>
            <Link
              to="/courses"
              className="px-6 py-3 bg-white text-blue-700 hover:bg-gray-100 rounded-lg font-semibold transition"
            >
              View Courses
            </Link>
          </div>
        </div>

        {/* ✅ Stats Section Overlay */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl grid grid-cols-2 sm:grid-cols-4 gap-6 text-center z-20">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-orange-500">500+</h3>
            <p className="text-gray-700">JEE Selections</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-orange-500">300+</h3>
            <p className="text-gray-700">NEET Selections</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-orange-500">5000+</h3>
            <p className="text-gray-700">Students Trained</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-orange-500">15+</h3>
            <p className="text-gray-700">Years Experience</p>
          </div>
        </div>
      </section>

      {/* ✅ Gap for next section (to avoid overlap) */}
      <div className="mt-28"></div>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 leading-snug">
            Unnati Coaching Classes is now{" "}
            <span className="text-red-500">20 years</span> complete,
            having 2 branches in the suburbs of Nashik.
          </h2>
        </div>

        {/* Right */}
        <div className="text-gray-700 text-sm sm:text-base leading-relaxed">
          <p>
            Founded in the year <span className="font-semibold">2005</span> with
            just <span className="font-semibold">15 students</span>, Unnati
            Coaching Classes has today grown into a trusted name in education,             mentoring thousands of students with the support of a highly
            qualified faculty team.
          </p>
          <p className="mt-3">
            The consistent achievements of Unnati students year after year stand
            as a testimony to its success. The dedication of our teachers to
            bring out the best in every student remains one of the strongest
            pillars of trust among parents and students.
          </p>
        </div>
      </section>
      {/* Features Section */}
      <section className="bg-white py-12 ">
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center ">
          {/* Feature 1 */}
          <div>
            <img src={study1} alt="Study Material" className="w-14 h-14 mx-auto mb-3" />
            <h3 className="font-semibold text-lg">Well-Curated Study Material</h3>
            <p className="text-gray-600 text-sm mt-2">
              Carefully designed resources covering the entire syllabus with
              lectures, notes, and practice tests.
            </p>
          </div>

          {/* Feature 2 */}
          <div>
            <img src={study2} alt="Experienced Faculty" className="w-14 h-14 mx-auto mb-3" />
            <h3 className="font-semibold text-lg">Experienced Faculty</h3>
            <p className="text-gray-600 text-sm mt-2">
              Our expert faculty add value with advanced teaching techniques and
              personalized doubt-solving.
            </p>
          </div>

          {/* Feature 3 */}
          <div>
            <img src={study1} alt="Tests & Assessment" className="w-14 h-14 mx-auto mb-3" />
            <h3 className="font-semibold text-lg">Tests & Assessment</h3>
            <p className="text-gray-600 text-sm mt-2">
              Topic-wise tests, mock exams, and detailed feedback help students
              track and improve their performance.
            </p>
          </div>

          {/* Feature 4 */}
          <div>
            <img src={study2} alt="Network of Success" className="w-14 h-14 mx-auto mb-3" />
            <h3 className="font-semibold text-lg">Network of Success</h3>
            <p className="text-gray-600 text-sm mt-2">
              A strong alumni network offers guidance, mentorship, and caree
              connections to current students.
            </p>
          </div>
        </div>
      </section>

      {/* Course section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-800 mb-12">
            Courses Offered
          </h2>

          {/* Grid Layout */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coursesData.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
              >
                {/* Image */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 text-justify">
                    {course.description}
                  </p>

                  {/* Button */}
                  <div className="mt-auto flex justify-center">
                    <Link to="/courses">
                      <button className="px-5 py-2 text-orange-600 font-semibold border border-orange-600 rounded-lg hover:bg-orange-600 hover:text-white transition-colors duration-300 cursor-pointer">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* who Choose us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-800 mb-12">
            Why Choose Us?
          </h2>

          {/* First Row - 3 Cards */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {whyChooseUs.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex-1 max-w-sm"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                  {item.title}
                </h3>
                <ul className="text-gray-600 text-sm space-y-2 list-disc pl-5">
                  {item.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Second Row - 2 Cards Centered */}
          <div className="flex justify-center gap-8">
            {whyChooseUs.slice(3, 5).map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex-1 max-w-sm"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                  {item.title}
                </h3>
                <ul className="text-gray-600 text-sm space-y-2 list-disc pl-5">
                  {item.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* footer section */}
      <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo / Name */}
          <div>
            <h2 className="text-2xl font-bold text-white">Unnati Coaching Classes</h2>
            <p className="mt-3 text-sm">
              Empowering students with quality education and guidance for a brighter future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-orange-400">Home</a></li>
              <li><a href="/about" className="hover:text-orange-400">About Us</a></li>
              <li><a href="/courses" className="hover:text-orange-400">Courses</a></li>
              <li><a href="/contact" className="hover:text-orange-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-orange-400" />
                Nashik, Maharashtra
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-orange-400" />
                +91 98765 43210
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-orange-400" />
                info@unnaticlasses.com
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-orange-400"><Facebook /></a>
              <a href="#" className="hover:text-orange-400"><Instagram /></a>
              <a href="#" className="hover:text-orange-400"><Linkedin /></a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Unnati Coaching Classes. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;