import React, { useEffect, useState } from "react";
import axios from 'axios';
import {API} from '../../api'
import about from '../../assets/about.jpg';

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

  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState("");

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

    const fetchFaculty = async () => {
    try {
      const res = await axios.get(`${API}/api/home/faculty`);
      console.log(res.data)

      if (Array.isArray(res.data.data)) {
        setFaculty(res.data.data);
      } else {
        setFaculty([])
      }

    } catch (error) {
      console.error("ERROR",error)
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFaculty();
  }, []);

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
                <div className="w-full h-40 sm:h-48 flex justify-center items-center bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="max-h-full max-w-full object-cover"
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
                    {member.experience} + year experience
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
