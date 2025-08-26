// import React from "react";
// import { Link } from "react-router-dom";
// import img11 from "../../assets/img11.png";
// import OurCourses from "./OurCourses"; // ✅ Import courses component

// const Home = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-700 to-blue-300 text-white pt-10 font-primary">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
//           {/* Left Content */}
//           <div className="text-center md:text-left">
//             <h1 className="text-4xl md:text-5xl font-bold font-primary">
//               Welcome to Unnati Coaching Classes
//             </h1>
//             <p className="mt-4 text-lg md:text-xl max-w-md font-primary">
//               Guiding Students Towards Academic Excellence & Bright Futures
//             </p>
//             <Link
//               to="/admission"
//               className="mt-6 inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition"
//             >
//               Enroll Now
//             </Link>
//           </div>

//           {/* Right Image */}
//           <div className="flex justify-center md:justify-end">
//             <img
//               src={img11}
//               alt="Students Learning"
//               className="w-full max-w-md"
//             />
//           </div>
//         </div>
//       </section>

//       {/* About Us */}
      
//       <section className="py-16 bg-gray-50 font-primary">
//         <div className="max-w-6xl mx-auto px-6 text-center font-primary">
//           <h2 className="text-3xl font-bold text-blue-800">About Us</h2>
//           <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             For over <strong>15 years</strong>, Unnati Coaching Classes has been a trusted name in academic excellence, guiding thousands of students towards their dreams. We specialize in <strong>PCM, PCB, PCMB, JEE, NEET, and MHT-CET</strong> with a focus on:
//             <ul className="list-disc pl-6 mt-4 space-y-2">
//               <li>👩‍🏫 <strong>Expert Faculty</strong> – Experienced mentors with years of teaching expertise.</li>
//               <li>📝 <strong>Personalized Learning</strong> – Small batch sizes to give individual attention.</li>
//               <li>📚 <strong>Strong Subject Foundation</strong> – In-depth conceptual teaching for better understanding.</li>
//               <li>🌟 <strong>Holistic Development</strong> – Focus on confidence-building, discipline, and motivation.</li>
//               <li>🎯 <strong>Result-Oriented Approach</strong> – Proven track record of top ranks in board & competitive exams.</li>
//               <li>🧠 <strong>Smart Learning Tools</strong> – Regular tests, doubt-clearing sessions, and performance tracking.</li>
//             </ul>
//           </p>
//           <Link
//             to="/about"
//             className="mt-6 inline-block px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition"
//           >
//             Learn More
//           </Link>
//         </div>
//       </section>

//       {/* Courses Section from OurCourses component */}
//       <OurCourses /> {/* ✅ Direct reuse */}

//       {/* Achievements */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold text-blue-800">
//             Our Achievements
//           </h2>
//           <p className="mt-4 text-gray-600">
//             Over the years, our students have consistently achieved top ranks
//             in board exams and competitive tests.
//           </p>
//           <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-2xl font-bold text-orange-500">95%</h3>
//               <p className="text-gray-600">Average Board Exam Results</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-2xl font-bold text-orange-500">50+</h3>
//               <p className="text-gray-600">Toppers Produced</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-2xl font-bold text-orange-500">1000+</h3>
//               <p className="text-gray-600">Happy Students</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="bg-blue-800 text-white py-12">
//         <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
//           <h3 className="text-2xl font-bold">
//             Ready to start your success journey?
//           </h3>
//           <Link
//             to="/admission"
//             className="mt-4 md:mt-0 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition"
//           >
//             Enroll Today
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;


// updated code
import React from "react";
import { Link } from "react-router-dom";
import img11 from "../../assets/img11.png";
import Courses from "./Courses"; // ✅ Import courses component

const Home = () => {
  return (
    <div className="font-primary">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-300 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Welcome to Unnati Coaching Classes
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl max-w-md mx-auto md:mx-0">
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
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl"
            />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800">
            About Us
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg">
            For over <strong>15 years</strong>, Unnati Coaching Classes has been a trusted name in academic excellence, guiding thousands of students towards their dreams.
          </p>
          <ul className="list-disc text-left pl-6 mt-6 max-w-3xl mx-auto space-y-2 text-gray-700 text-sm sm:text-base">
            <li>👩‍🏫 <strong>Expert Faculty</strong> – Experienced mentors with years of teaching expertise.</li>
            <li>📝 <strong>Personalized Learning</strong> – Small batch sizes to give individual attention.</li>
            <li>📚 <strong>Strong Subject Foundation</strong> – In-depth conceptual teaching for better understanding.</li>
            <li>🌟 <strong>Holistic Development</strong> – Confidence-building, discipline, and motivation.</li>
            <li>🎯 <strong>Result-Oriented Approach</strong> – Proven track record of top ranks in exams.</li>
            <li>🧠 <strong>Smart Learning Tools</strong> – Regular tests, doubt-clearing, performance tracking.</li>
          </ul>
          <Link
            to="/about"
            className="mt-6 inline-block px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Courses */}
      {/* <Courses /> */}

      {/* Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800">
            Our Achievements
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Over the years, our students have consistently achieved top ranks
            in board exams and competitive tests.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-orange-500">
                95%
              </h3>
              <p className="text-gray-600">Average Board Exam Results</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-orange-500">
                50+
              </h3>
              <p className="text-gray-600">Toppers Produced</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl sm:text-2xl font-bold text-orange-500">
                1000+
              </h3>
              <p className="text-gray-600">Happy Students</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={img11}
              alt="Why Choose Us"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto md:max-w-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-800">
              Why Choose Us
            </h2>
            <ul className="mt-6 space-y-3 text-gray-700 text-sm sm:text-base">
              <li>✅ Expert Faculty</li>
              <li>✅ Updated Study Material</li>
              <li>✅ Small Batch Size</li>
              <li>✅ Proven Results</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Upcoming Batches */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800">
            Upcoming Batches
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r from-blue-500 to-blue-300 p-6 rounded-lg shadow-md text-white">
              <h3 className="text-xl sm:text-2xl font-bold">JEE Main 2025</h3>
              <Link className="mt-4 inline-block bg-white text-blue-700 px-4 py-2 rounded-lg">
                Register
              </Link>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-300 p-6 rounded-lg shadow-md text-white">
              <h3 className="text-xl sm:text-2xl font-bold">NEET 2025</h3>
              <Link className="mt-4 inline-block bg-white text-green-700 px-4 py-2 rounded-lg">
                Register
              </Link>
            </div>
            <div className="bg-gradient-to-r from-orange-500 to-orange-300 p-6 rounded-lg shadow-md text-white">
              <h3 className="text-xl sm:text-2xl font-bold">Foundation Course</h3>
              <Link className="mt-4 inline-block bg-white text-orange-700 px-4 py-2 rounded-lg">
                Register
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800">
            Success Stories
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Hear from our achievers who made us proud!
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-sm sm:text-base">
              🌟 Student A – AIR 120 JEE
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-sm sm:text-base">
              🌟 Student B – NEET Topper
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-sm sm:text-base">
              🌟 Student C – CET State Rank
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-bold leading-snug">
            Join Elite Academy Today and Start Your Success Journey!
          </h3>
          <Link
            to="/admission"
            className="mt-4 md:mt-0 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition"
          >
            Enroll Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-white">Elite Academy</h4>
            <p className="mt-2 text-sm">
              Guiding students towards excellence since 2008.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-white">Contact Us</h4>
            <p className="mt-2 text-sm">📍 Nashik, Maharashtra</p>
            <p className="text-sm">📞 +91 98765 43210</p>
            <p className="text-sm">✉️ info@eliteacademy.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;





// import React from "react";
// import { Link } from "react-router-dom";
// import img11 from "../../assets/img11.png";
// import OurCourses from "./OurCourses";

// const Home = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-700 to-blue-300 text-white pt-10 font-primary">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
//           {/* Left Content */}
//           <div className="text-center md:text-left">
//             <h1 className="text-4xl md:text-5xl font-bold font-primary">
//               Achieve Your Dreams with Elite Academy
//             </h1>
//             <p className="mt-4 text-lg md:text-xl max-w-md font-primary">
//               Guiding Students Towards Academic Excellence & Bright Futures
//             </p>
//             <div className="flex gap-4 justify-center md:justify-start mt-6">
//               <Link
//                 to="/admission"
//                 className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition"
//               >
//                 Get Started
//               </Link>
//               <Link
//                 to="/courses"
//                 className="px-6 py-3 bg-white text-blue-700 hover:bg-gray-100 rounded-lg font-semibold transition"
//               >
//                 View Courses
//               </Link>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="flex justify-center md:justify-end">
//             <img src={img11} alt="Students Learning" className="w-full max-w-md" />
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-12 bg-gray-100">
//         <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-2xl font-bold text-orange-500">500+</h3>
//             <p className="text-gray-700">JEE Selections</p>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-2xl font-bold text-orange-500">300+</h3>
//             <p className="text-gray-700">NEET Selections</p>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-2xl font-bold text-orange-500">5000+</h3>
//             <p className="text-gray-700">Students Trained</p>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h3 className="text-2xl font-bold text-orange-500">15+</h3>
//             <p className="text-gray-700">Years Experience</p>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-16 bg-gray-50 font-primary">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
//           <div>
//             <img src={img11} alt="Why Choose Us" className="rounded-lg shadow-lg" />
//           </div>
//           <div>
//             <h2 className="text-3xl font-bold text-blue-800 mb-4">Why Choose Elite Academy?</h2>
//             <ul className="space-y-3 text-gray-700">
//               <li>👩‍🏫 <strong>Expert Faculty</strong> – Years of teaching expertise.</li>
//               <li>📚 <strong>Updated Study Material</strong> – Based on latest patterns.</li>
//               <li>👨‍👩‍👧 <strong>Small Batch Size</strong> – Individual attention to every student.</li>
//               <li>🎯 <strong>Proven Results</strong> – Consistent top ranks in JEE & NEET.</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* Courses Section */}
//       <OurCourses />

//       {/* Achievements */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold text-blue-800">Our Achievements</h2>
//           <p className="mt-4 text-gray-600">
//             Over the years, our students have consistently achieved top ranks.
//           </p>
//           <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-2xl font-bold text-orange-500">95%</h3>
//               <p className="text-gray-600">Average Board Results</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-2xl font-bold text-orange-500">50+</h3>
//               <p className="text-gray-600">Toppers Produced</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-2xl font-bold text-orange-500">1000+</h3>
//               <p className="text-gray-600">Happy Students</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="bg-blue-800 text-white py-12">
//         <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
//           <h3 className="text-2xl font-bold">Ready to start your success journey?</h3>
//           <Link
//             to="/admission"
//             className="mt-4 md:mt-0 px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition"
//           >
//             Enroll Today
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
