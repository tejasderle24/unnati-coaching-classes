// import React from "react";
// import about from "../../assets/about.jpg";
// import tech1 from "../../assets/faculty/tech1.jpg";
// import tech2 from "../../assets/faculty/tech2.jpg";
// import tech3 from "../../assets/faculty/tech3.jpg";
// import tech4 from "../../assets/faculty/tech4.jpg";

// import {
//   BookOpen,
//   Target,
//   Award,
//   Users,
//   Lightbulb,
//   GraduationCap,
//   Star,
//   UserCheck,
//   Trophy,
//   CheckCircle,
// } from "lucide-react";

// const About = () => {
//   const reasons = [
//     {
//       icon: <Award className="w-10 h-10 text-orange-500" />,
//       title: "Proven Results",
//       description:
//         "Thousands of students have achieved success in engineering, medical, and science fields with our guidance.",
//     },
//     {
//       icon: <Users className="w-10 h-10 text-orange-500" />,
//       title: "Expert Faculty",
//       description:
//         "Highly qualified and experienced teachers who focus on conceptual clarity and exam preparation.",
//     },
//     {
//       icon: <Lightbulb className="w-10 h-10 text-orange-500" />,
//       title: "Innovative Teaching",
//       description:
//         "Interactive methods using visuals, real-life examples, and practical applications to make learning engaging.",
//     },
//     {
//       icon: <GraduationCap className="w-10 h-10 text-orange-500" />,
//       title: "Complete Development",
//       description:
//         "Beyond academics, we emphasize mentorship, career counseling, and life skills for future success.",
//     },
//   ];

//   const faculty = [
//     {
//       name: "Dr. Rajesh Kumar",
//       subject: "Physics",
//       experience: "15+ years Experience",
//       qualification: "Ph.D in Physics, IIT Delhi",
//       image: tech1,
//     },
//     {
//       name: "Prof. Sunita Singh",
//       subject: "Chemistry",
//       experience: "12+ years Experience",
//       qualification: "M.Sc Chemistry, Gold Medalist",
//       image: tech2,
//     },
//     {
//       name: "Dr. Amit Verma",
//       subject: "Mathematics",
//       experience: "18+ years Experience",
//       qualification: "Ph.D Mathematics, IISc Bangalore",
//       image: tech3,
//     },
//     {
//       name: "Dr. Kavita Sharma",
//       subject: "Biology",
//       experience: "10+ years Experience",
//       qualification: "Ph.D in Biology, AIIMS Delhi",
//       image: tech4,
//     },
//   ];

//   const achievements = [
//     { number: "15+", label: "Years of Excellence", icon: <Star className="w-8 h-8 text-yellow-300" /> },
//     { number: "5000+", label: "Students Mentored", icon: <UserCheck className="w-8 h-8 text-green-300" /> },
//     { number: "800+", label: "Top College Selections", icon: <Trophy className="w-8 h-8 text-orange-300" /> },
//     { number: "98%", label: "Success Rate", icon: <CheckCircle className="w-8 h-8 text-teal-300" /> },
//   ];

//   return (
//     <div>
//       {/* About Section */}
//       <section className="bg-gray-50 py-4">
//         <div className="max-w-7xl mx-auto  text-center">
//           <div className="flex flex-col md:flex-row items-center gap-10">
//             {/* Text */}
//             <div className="flex-1 text-left">
//                <h3 className="text-5xl font-bold text-blue-800 ">
//                   About Us
//               </h3>

//               <h3 className="text-2xl font-bold mb-4 text-gray-800 py-10">
//                 Welcome to Unnati Coaching Classes!
//               </h3>
//               <p className="text-gray-700 leading-relaxed ">
//                 <p>
//                   For over <strong>15 years</strong>, Unnati Coaching Classes has
//                   been transforming the way students learn and achieve success.
//                   With a perfect balance of academic rigor and personal
//                   guidance, we have helped thousands of students secure
//                   admissions into top engineering, medical, and science colleges.
//                   Our curriculum is carefully aligned with school, junior
//                   college, and competitive exam requirements, ensuring that
//                   students excel in every sphere of learning.
//                 </p>
//                 <p className="mt-4">
//                   We believe in innovative teaching methods that combine visual
//                   aids, real-life examples, and practical applications to make
//                   learning engaging and effective. Beyond academics, we focus on
//                   mentorship, career counseling, and developing life skills to
//                   prepare students for future challenges. Our time-tested
//                   strategies help students manage exam pressure, build
//                   confidence, and perform at their best.
//                 </p>
//               </p>
//             </div>

//             {/* Image */}
//             <div className="flex-1 py-8">
//               <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//                 <img
//                   src={about}
//                   alt="Unnati Coaching"
//                   className="w-full h-64 sm:h-80 md:h-96 object-cover"
//                 />
//                 <div className="mt-4 bg-orange-500 text-white rounded-lg text-center py-4">
//                   <span className="text-3xl font-bold">15+</span>
//                   <p className="text-sm">Years of Excellence</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision Section */}
//       <section className="bg-gray-50 py-16">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-10">
//             {/* Mission */}
//             <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
//               <div className="flex items-center mb-4">
//                 <BookOpen className="text-orange-500 w-10 h-10 mr-3" />
//                 <h3 className="text-2xl font-semibold text-gray-800">Mission</h3>
//               </div>
//               <p className="text-gray-700 leading-relaxed">
//                 Our mission is to provide quality education that helps students
//                 excel in board exams, competitive exams, and overall personality
//                 development. We aim to make learning an engaging,
//                 confidence-boosting, and goal-oriented journey.
//               </p>
//             </div>

//             {/* Vision */}
//             <div className="bg-yellow-50 p-8 rounded-lg shadow-lg">
//               <div className="flex items-center mb-4">
//                 <Target className="text-orange-500 w-10 h-10 mr-3" />
//                 <h3 className="text-2xl font-semibold text-gray-800">Vision</h3>
//               </div>
//               <p className="text-gray-700 leading-relaxed">
//                 Our vision is to create a learning ecosystem where every student
//                 is empowered to achieve academic excellence and develop skills
//                 for a successful future. We strive to be a trusted educational
//                 partner for parents and students across the community.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="bg-white py-16">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold text-blue-800 mb-6">
//             Why Choose <span className="text-orange-500">Unnati Coaching</span>?
//           </h2>
//           <p className="text-gray-600 max-w-3xl mx-auto mb-12">
//             We stand apart with our result-oriented approach, expert guidance,
//             and student-first philosophy. Here’s why parents and students trust
//             us:
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {reasons.map((reason, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-50 shadow-md rounded-2xl p-6 hover:shadow-xl transition text-center"
//               >
//                 <div className="flex justify-center mb-4">{reason.icon}</div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   {reason.title}
//                 </h3>
//                 <p className="text-gray-600">{reason.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Expert Faculty Section */}
//       <section className="bg-gray-50 py-16">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold text-blue-800 mb-12">
//             Our Expert Faculty
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {faculty.map((member, index) => (
//               <div
//                 key={index}
//                 className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
//               >
//                 <div className="w-full h-48 overflow-hidden flex justify-center items-center">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-40 h-40 object-cover rounded-full shadow-md"
//                   />
//                 </div>
//                 <div className="p-6 text-center">
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {member.name}
//                   </h3>
//                   <p className="text-blue-600 font-medium">{member.subject}</p>
//                   <p className="text-gray-600 text-sm mt-2">
//                     {member.experience}
//                   </p>
//                   <p className="text-gray-500 text-sm">{member.qualification}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Achievements Section */}
//       <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold mb-12">Our Achievements</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
//             {achievements.map((item, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div className="mb-3">{item.icon}</div>
//                 <span className="text-4xl font-bold">{item.number}</span>
//                 <p className="mt-2 text-sm">{item.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;







// import React from "react";
// import about from "../../assets/about.jpg";
// import tech1 from "../../assets/faculty/tech1.jpg";
// import tech2 from "../../assets/faculty/tech2.jpg";
// import tech3 from "../../assets/faculty/tech3.jpg";
// import tech4 from "../../assets/faculty/tech4.jpg";

// import {
//   BookOpen,
//   Target,
//   Award,
//   Users,
//   Lightbulb,
//   GraduationCap,
//   Star,
//   UserCheck,
//   Trophy,
//   CheckCircle,
// } from "lucide-react";

// const About = () => {
//   const reasons = [
//     {
//       icon: <Award className="w-10 h-10 text-orange-500" />,
//       title: "Proven Results",
//       description:
//         "Thousands of students have achieved success in engineering, medical, and science fields with our guidance.",
//     },
//     {
//       icon: <Users className="w-10 h-10 text-orange-500" />,
//       title: "Expert Faculty",
//       description:
//         "Highly qualified and experienced teachers who focus on conceptual clarity and exam preparation.",
//     },
//     {
//       icon: <Lightbulb className="w-10 h-10 text-orange-500" />,
//       title: "Innovative Teaching",
//       description:
//         "Interactive methods using visuals, real-life examples, and practical applications to make learning engaging.",
//     },
//     {
//       icon: <GraduationCap className="w-10 h-10 text-orange-500" />,
//       title: "Complete Development",
//       description:
//         "Beyond academics, we emphasize mentorship, career counseling, and life skills for future success.",
//     },
//   ];

//   const faculty = [
//     {
//       name: "Dr. Rajesh Kumar",
//       subject: "Physics",
//       experience: "15+ years Experience",
//       qualification: "Ph.D in Physics, IIT Delhi",
//       image: tech1,
//     },
//     {
//       name: "Prof. Sunita Singh",
//       subject: "Chemistry",
//       experience: "12+ years Experience",
//       qualification: "M.Sc Chemistry, Gold Medalist",
//       image: tech2,
//     },
//     {
//       name: "Dr. Amit Verma",
//       subject: "Mathematics",
//       experience: "18+ years Experience",
//       qualification: "Ph.D Mathematics, IISc Bangalore",
//       image: tech3,
//     },
//     {
//       name: "Dr. Kavita Sharma",
//       subject: "Biology",
//       experience: "10+ years Experience",
//       qualification: "Ph.D in Biology, AIIMS Delhi",
//       image: tech4,
//     },
//   ];

//   const achievements = [
//     { number: "15+", label: "Years of Excellence", icon: <Star className="w-8 h-8 text-yellow-300" /> },
//     { number: "5000+", label: "Students Mentored", icon: <UserCheck className="w-8 h-8 text-green-300" /> },
//     { number: "800+", label: "Top College Selections", icon: <Trophy className="w-8 h-8 text-orange-300" /> },
//     { number: "98%", label: "Success Rate", icon: <CheckCircle className="w-8 h-8 text-teal-300" /> },
//   ];

//   return (
//     <div>
//       {/* About Section */}
//       <section className="bg-gray-50 py-4">
//         <div className="max-w-7xl mx-auto  text-center">
//           <div className="flex flex-col md:flex-row items-center gap-10">
//             {/* Text */}
//             <div className="flex-1 text-left">
//                <h3 className="text-5xl font-bold text-blue-800 ">
//                   About Us
//               </h3>

//               <h3 className="text-2xl font-bold mb-4 text-gray-800 py-10">
//                 Welcome to Unnati Coaching Classes!
//               </h3>
//               <p className="text-gray-700 leading-relaxed ">
//                 <p>
//                   For over <strong>15 years</strong>, Unnati Coaching Classes has
//                   been transforming the way students learn and achieve success.
//                   With a perfect balance of academic rigor and personal
//                   guidance, we have helped thousands of students secure
//                   admissions into top engineering, medical, and science colleges.
//                   Our curriculum is carefully aligned with school, junior
//                   college, and competitive exam requirements, ensuring that
//                   students excel in every sphere of learning.
//                 </p>
//                 <p className="mt-4">
//                   We believe in innovative teaching methods that combine visual
//                   aids, real-life examples, and practical applications to make
//                   learning engaging and effective. Beyond academics, we focus on
//                   mentorship, career counseling, and developing life skills to
//                   prepare students for future challenges. Our time-tested
//                   strategies help students manage exam pressure, build
//                   confidence, and perform at their best.
//                 </p>
//               </p>
//             </div>

//             {/* Image */}
//             <div className="flex-1 py-8">
//               <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//                 <img
//                   src={about}
//                   alt="Unnati Coaching"
//                   className="w-full h-64 sm:h-80 md:h-96 object-cover"
//                 />
//                 <div className="mt-4 bg-orange-500 text-white rounded-lg text-center py-4">
//                   <span className="text-3xl font-bold">15+</span>
//                   <p className="text-sm">Years of Excellence</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision Section */}
//       <section className="bg-gray-50 py-16">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-10">
//             {/* Mission */}
//             <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
//               <div className="flex items-center mb-4">
//                 <BookOpen className="text-orange-500 w-10 h-10 mr-3" />
//                 <h3 className="text-2xl font-semibold text-gray-800">Mission</h3>
//               </div>
//               <p className="text-gray-700 leading-relaxed">
//                 Our mission is to provide quality education that helps students
//                 excel in board exams, competitive exams, and overall personality
//                 development. We aim to make learning an engaging,
//                 confidence-boosting, and goal-oriented journey.
//               </p>
//             </div>

//             {/* Vision */}
//             <div className="bg-yellow-50 p-8 rounded-lg shadow-lg">
//               <div className="flex items-center mb-4">
//                 <Target className="text-orange-500 w-10 h-10 mr-3" />
//                 <h3 className="text-2xl font-semibold text-gray-800">Vision</h3>
//               </div>
//               <p className="text-gray-700 leading-relaxed">
//                 Our vision is to create a learning ecosystem where every student
//                 is empowered to achieve academic excellence and develop skills
//                 for a successful future. We strive to be a trusted educational
//                 partner for parents and students across the community.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="bg-white py-16">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold text-blue-800 mb-6">
//             Why Choose <span className="text-orange-500">Unnati Coaching</span>?
//           </h2>
//           <p className="text-gray-600 max-w-3xl mx-auto mb-12">
//             We stand apart with our result-oriented approach, expert guidance,
//             and student-first philosophy. Here’s why parents and students trust
//             us:
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {reasons.map((reason, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-50 shadow-md rounded-2xl p-6 hover:shadow-xl transition text-center"
//               >
//                 <div className="flex justify-center mb-4">{reason.icon}</div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   {reason.title}
//                 </h3>
//                 <p className="text-gray-600">{reason.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Expert Faculty Section */}
//       <section className="bg-gray-50 py-16">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold text-blue-800 mb-12">
//             Our Expert Faculty
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {faculty.map((member, index) => (
//               <div
//                 key={index}
//                 className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
//               >
//                 <div className="w-full h-48 overflow-hidden flex justify-center items-center">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-40 h-40 object-cover rounded-full shadow-md"
//                   />
//                 </div>
//                 <div className="p-6 text-center">
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {member.name}
//                   </h3>
//                   <p className="text-blue-600 font-medium">{member.subject}</p>
//                   <p className="text-gray-600 text-sm mt-2">
//                     {member.experience}
//                   </p>
//                   <p className="text-gray-500 text-sm">{member.qualification}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Achievements Section */}
//       <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold mb-12">Our Achievements</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
//             {achievements.map((item, index) => (
//               <div key={index} className="flex flex-col items-center">
//                 <div className="mb-3">{item.icon}</div>
//                 <span className="text-4xl font-bold">{item.number}</span>
//                 <p className="mt-2 text-sm">{item.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;






import React from "react";
import about from '../../assets/about.jpg';
import tech1 from "../../assets/faculty/tech1.jpg";
import tech2 from "../../assets/faculty/tech2.jpg";
import tech3 from "../../assets/faculty/tech3.jpg";
import tech4 from "../../assets/faculty/tech4.jpg";
import {
  BookOpen,
  Target,
  Award,
  Users,
  Lightbulb,
  GraduationCap,
  Star,
  UserCheck,
  Trophy,
  CheckCircle,
} from "lucide-react";

const About = () => {
  const reasons = [
    {
      icon: <Award className="w-10 h-10 text-orange-500" />,
      title: "Proven Results",
      description:
        "Thousands of students have achieved success in engineering, medical, and science fields with our guidance.",
    },
    {
      icon: <Users className="w-10 h-10 text-orange-500" />,
      title: "Expert Faculty",
      description:
        "Highly qualified and experienced teachers who focus on conceptual clarity and exam preparation.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-orange-500" />,
      title: "Innovative Teaching",
      description:
        "Interactive methods using visuals, real-life examples, and practical applications to make learning engaging.",
    },
    {
      icon: <GraduationCap className="w-10 h-10 text-orange-500" />,
      title: "Complete Development",
      description:
        "Beyond academics, we emphasize mentorship, career counseling, and life skills for future success.",
    },
  ];

  const faculty = [
    {
      name: "Dr. Rajesh Kumar",
      subject: "Physics",
      experience: "15+ years Experience",
      qualification: "Ph.D in Physics, IIT Delhi",
      image: tech1,
    },
    {
      name: "Prof. Sunita Singh",
      subject: "Chemistry",
      experience: "12+ years Experience",
      qualification: "M.Sc Chemistry, Gold Medalist",
      image: tech2,
    },
    {
      name: "Dr. Amit Verma",
      subject: "Mathematics",
      experience: "18+ years Experience",
      qualification: "Ph.D Mathematics, IISc Bangalore",
      image: tech3,
    },
    {
      name: "Dr. Kavita Sharma",
      subject: "Biology",
      experience: "10+ years Experience",
      qualification: "Ph.D in Biology, AIIMS Delhi",
      image: tech4,
    },
  ];

  const achievements = [
    {
      number: "15+",
      label: "Years of Excellence",
      icon: <Star className="w-8 h-8 text-yellow-300" />,
    },
    {
      number: "5000+",
      label: "Students Mentored",
      icon: <UserCheck className="w-8 h-8 text-green-300" />,
    },
    {
      number: "800+",
      label: "Top College Selections",
      icon: <Trophy className="w-8 h-8 text-orange-300" />,
    },
    {
      number: "98%",
      label: "Success Rate",
      icon: <CheckCircle className="w-8 h-8 text-teal-300" />,
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* About Section */}
      <section className="bg-gray-50 py-8 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Text */}
            <div className="flex-1 text-left ">
              <h3 className="text-4xl sm:text-5xl font-bold text-blue-800">
                About Us 
              </h3>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 py-6">
                Welcome to Unnati Coaching Classes!
              </h3>
              <p className="text-gray-700 leading-relaxed space-y-4">
                <span>
                  For over <strong>15 years</strong>, Unnati Coaching Classes
                  has been transforming the way students learn and achieve
                  success. With a perfect balance of academic rigor and personal
                  guidance, we have helped thousands of students secure
                  admissions into top engineering, medical, and science colleges.
                </span>
                <span>
                  We believe in innovative teaching methods that combine visual
                  aids, real-life examples, and practical applications to make
                  learning engaging and effective. Beyond academics, we focus on
                  mentorship, career counseling, and developing life skills to
                  prepare students for future challenges.
                </span>
              </p>
            </div>

            {/* Image */}
            <div className="flex-1 py-6 md:py-8">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={about}
                  alt="Unnati Coaching"
                  className="w-full h-60 sm:h-72 md:h-96 object-cover"
                />
                <div className="mt-4 bg-orange-500 text-white rounded-lg text-center py-3 sm:py-4">
                  <span className="text-2xl sm:text-3xl font-bold">15+</span>
                  <p className="text-xs sm:text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission */}
            <div className="bg-blue-50 p-6 sm:p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <BookOpen className="text-orange-500 w-8 h-8 sm:w-10 sm:h-10 mr-3" />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                  Mission
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Our mission is to provide quality education that helps students
                excel in board exams, competitive exams, and overall personality
                development.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-yellow-50 p-6 sm:p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Target className="text-orange-500 w-8 h-8 sm:w-10 sm:h-10 mr-3" />
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
                  Vision
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Our vision is to create a learning ecosystem where every student
                is empowered to achieve academic excellence and develop skills
                for a successful future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6">
            Why Choose <span className="text-orange-500">Unnati Coaching</span>?
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10 sm:mb-12 text-sm sm:text-base">
            We stand apart with our result-oriented approach, expert guidance,
            and student-first philosophy.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-md rounded-2xl p-6 hover:shadow-xl transition text-center"
              >
                <div className="flex justify-center mb-4">{reason.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expert Faculty */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-8 sm:mb-12">
            Our Expert Faculty
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {faculty.map((member, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="w-full h-40 sm:h-48 flex justify-center items-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 sm:w-40 sm:h-40 object-cover shadow-md"
                  />
                </div>
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-sm sm:text-base">
                    {member.subject}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm mt-2">
                    {member.experience}
                  </p>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {member.qualification}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 sm:py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {achievements.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-3">{item.icon}</div>
                <span className="text-2xl sm:text-4xl font-bold">
                  {item.number}
                </span>
                <p className="mt-2 text-xs sm:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
