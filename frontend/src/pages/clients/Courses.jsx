// import React from "react";

// const courses = [
//   {
//     title: "Mathematics",
//     description: "Build a strong foundation in algebra, geometry, and calculus with expert guidance.",
//     icon: "📐",
//     color: "bg-blue-100 text-blue-800",
//   },
//   {
//     title: "Science",
//     description: "Explore physics, chemistry, and biology concepts with practical examples.",
//     icon: "🔬",
//     color: "bg-green-100 text-green-800",
//   },
//   {
//     title: "English",
//     description: "Improve grammar, comprehension, and communication skills effectively.",
//     icon: "📚",
//     color: "bg-orange-100 text-orange-800",
//   },
//   {
//     title: "Competitive Exams",
//     description: "Prepare for SSC, HSC, and entrance exams with focused strategies.",
//     icon: "🏆",
//     color: "bg-purple-100 text-purple-800",
//   },
// ];

// const Courses = () => {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
//             Our Courses
//           </h2>
//           <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
//             We offer a variety of courses designed to help students excel academically and prepare for future challenges.
//           </p>
//         </div>

//         {/* Courses Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {courses.map((course, index) => (
//             <div
//               key={index}
//               className={`p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition transform hover:-translate-y-1`}
//             >
//               <div
//                 className={`w-16 h-16 flex items-center justify-center rounded-full text-3xl ${course.color} mb-4`}
//               >
//                 {course.icon}
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {course.title}
//               </h3>
//               <p className="text-gray-600">{course.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurCourses;
