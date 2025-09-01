import React, { useEffect, useState } from "react";
import pcm from "../../assets/courses/pcm.png";
import pcb from "../../assets/courses/pcb.webp";
import pcmb from "../../assets/courses/pcmb.png";
import jee from "../../assets/courses/jee.jpg";
import neet from "../../assets/courses/neet.jpeg";
import mhtCet from "../../assets/courses/mhtCet.webp";
import { API } from "../../api";
import axios from 'axios'

// const coursesData = [
//   {
//     title: "PCM Foundation (11th-12th)",
//     desc: "Strong foundation for Class (11th-12th) Physics, Chemistry & Mathematics",
//     duration: "1 Year",
//     students: "40 Students",
//     price: "₹75,000",
//     features: [
//       "NCERT + Advanced concepts",
//       "Weekly assignments",
//       "Regular doubt solving",
//       "Chapter-wise tests",
//       "Study notes provided",
//       "Monthly performance report",
//     ],
//     img: pcm,
//     popular: true,
//   },
//   {
//     title: "PCB Foundation (11th-12th)",
//     desc: "Strong foundation for Class 11 Physics, Chemistry & Biology",
//     duration: "1 Year",
//     students: "40 Students",
//     price: "₹80,000",
//     features: [
//       "NCERT + Advanced concepts",
//       "Weekly assignments",
//       "Practical based learning",
//       "Regular doubt sessions",
//       "Chapter-wise tests",
//       "Monthly progress reports",
//     ],
//     img: pcb,
//   },
//   {
//     title: "PCMB Foundation (11th-12th)",
//     desc: "Comprehensive foundation for Class 11 Physics, Chemistry, Maths & Biology",
//     duration: "1 Year",
//     students: "40 Students",
//     price: "₹95,000",
//     features: [
//       "NCERT + Advanced concepts",
//       "Weekly assignments & DPPs",
//       "Regular doubt sessions",
//       "Chapter-wise tests",
//       "Study notes provided",
//       "Monthly progress reports",
//     ],
//     img: pcmb,
//   },
//   {
//     title: "JEE Crash Course",
//     desc: "Intensive last-minute preparation for JEE",
//     duration: "6 Months",
//     students: "25 Students",
//     price: "₹80,000",
//     features: [
//       "High-yield topics focus",
//       "Intensive practice sessions",
//       "Strategy and tips",
//       "Time management",
//       "Mock test series",
//       "Revision materials",
//     ],
//     img: jee,
//   },
//   {
//     title: "NEET Crash Course",
//     desc: "Quick revision and practice for NEET aspirants",
//     duration: "4 Months",
//     students: "20 Students",
//     price: "₹60,000",
//     features: [
//       "Important topics revision",
//       "Quick problem solving",
//       "Exam strategies",
//       "Time optimization",
//       "Mock test analysis",
//       "Last minute tips",
//     ],
//     img: neet,
//   },
//   {
//     title: "MHT-CET Foundation",
//     desc: "Strong foundation for Class 11 PCM/PCB with CET focus",
//     duration: "1 Year",
//     students: "40 Students",
//     price: "₹80,000",
//     features: [
//       "NCERT + CET oriented syllabus",
//       "Weekly assignments",
//       "Doubt clearing sessions",
//       "Unit-wise tests",
//       "Study notes provided",
//       "Monthly progress reports",
//     ],
//     img: mhtCet,
//     popular: true,
//   },
// ];


const Courses = () => {

  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState("");

  const fetchCourse= async () => {
  try {
      const res = await axios.get(`${API}/api/home/courses`);
      console.log(res.data)

      if (Array.isArray(res.data.data)) {
        setCourse(res.data.data);
      } else {
        setCourse([])
      }

    } catch (error) {
      console.error("ERROR",error)
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCourse();
  }, []);

  return (
    <div className="bg-gray-50 font-sans">
      {/* Title */}
      <section className="text-center py-10 sm:py-12 lg:py-16 px-4">
        <h2 className="text-4xl sm:text-4xl lg:text-5xl font-bold text-blue-800">
          Our Courses
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-sm sm:text-base">
          Choose from our comprehensive range of courses designed to help you
          excel in competitive examinations. Each course is carefully crafted
          with expert faculty and proven methodologies.
        </p>
      </section>

      {/* Courses Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {course.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="h-40 sm:h-48 lg:h-56 w-full object-cover"
              />
              {course.popular && (
                <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs sm:text-sm px-2 py-1 rounded">
                  Most Popular
                </span>
              )}
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {course.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mt-1">
                {course.desc}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mt-2">
                {course.duration} • {course.students}
              </p>
              <p className="text-blue-600 text-base sm:text-lg font-bold mt-2">
                {course.price}
              </p>

              <ul className="mt-3 text-xs sm:text-sm text-gray-600 space-y-1">
                {course.features.map((f, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">✅</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex">
                <button className="flex-1 bg-orange-500 text-white text-sm sm:text-base py-2 rounded hover:bg-orange-600">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Features */}
      <section className="mt-14 sm:mt-16 text-center px-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
          What's Included in All Courses
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto mt-8">
          <div>
            <p className="text-base sm:text-lg font-semibold">📘 Study Materials</p>
            <p className="text-gray-600 text-xs sm:text-sm mt-2">
              Comprehensive books and notes covering complete syllabus
            </p>
          </div>
          <div>
            <p className="text-base sm:text-lg font-semibold">📝 Mock Tests</p>
            <p className="text-gray-600 text-xs sm:text-sm mt-2">
              Regular practice tests with detailed analysis
            </p>
          </div>
          <div>
            <p className="text-base sm:text-lg font-semibold">❓ Doubt Sessions</p>
            <p className="text-gray-600 text-xs sm:text-sm mt-2">
              Individual doubt clearing sessions with expert faculty
            </p>
          </div>
          <div>
            <p className="text-base sm:text-lg font-semibold">⏰ Flexible Timings</p>
            <p className="text-gray-600 text-xs sm:text-sm mt-2">
              Multiple batch timings to suit student convenience
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-14 sm:mt-16 bg-blue-500 text-white py-10 sm:py-12 text-center px-4">
        <h3 className="text-lg sm:text-2xl font-bold">
          Ready to Start Your Journey?
        </h3>
        <p className="mt-2 text-xs sm:text-sm">
          Join thousands of successful students who achieved their dreams with us
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          {/* Book Free Demo Class */}
          <button
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=2i0p2tidN88&list=PLxyGaR3hEy3gvV4VbbP8pza7MtoJkGu6M",
                "_blank"
              )
            }
            className="bg-orange-500 hover:bg-orange-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base"
          >
            Book Free Demo Class
          </button>

          {/* Download Brochure */}
          <button
            onClick={() => window.open("/docs/git.pdf", "_blank")}
            className="bg-white text-blue-600 hover:bg-gray-100 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base"
          >
            Download Brochure
          </button>
        </div>
      </section>
    </div>
  );
};

export default Courses;
