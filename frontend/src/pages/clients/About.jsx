import React from "react";
import about from "../../assets/about.jpg";
import { BookOpen, Target } from "lucide-react"; // Lucide icons

const About = () => {
  return (
    <div className="">
      {/* About Section */}
      <section className="bg-gray-50 py-5">
        <div className="max-w-7xl mx-auto  text-center">
          <div className="bg-orange-200 px-6 py-10">
            <h2 className="text-3xl font-bold text-blue-800 mb-8">
              About Unnati Coaching Classes
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Text */}
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 py-10">
                Welcome to Unnati Coaching Classes!
              </h3>
              <p className="text-gray-700 leading-relaxed ">
                <p>
                  For over <strong>15 years</strong>, Unnati Coaching Classes has been transforming the way students learn and achieve success.
                  With a perfect balance of academic rigor and personal guidance, we have helped thousands of students secure admissions
                  into top engineering, medical, and science colleges. Our curriculum is carefully aligned with school, junior college,
                  and competitive exam requirements, ensuring that students excel in every sphere of learning.
                </p>
                <p className="mt-4">
                  We believe in innovative teaching methods that combine visual aids, real-life examples, and practical applications
                  to make learning engaging and effective. Beyond academics, we focus on mentorship, career counseling, and developing
                  life skills to prepare students for future challenges. Our time-tested strategies help students manage exam pressure,
                  build confidence, and perform at their best.
                </p>
              </p>
            </div>

            {/* Image */}

            <div className="flex-1 py-8">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={about}
                  alt="Unnati Coaching"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover"
                />
                <div className="mt-4 bg-orange-500 text-white rounded-lg text-center py-4">
                  <span className="text-3xl font-bold">15+</span>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>

            {/* <div className="flex-1 py-8">
              <div className="bg-white shadow-lg rounded-lg ">
                <img
                  src={about}
                  alt="Unnati Coaching"
                  className="rounded-lg object-cover w-full h-64"
                />
                <div className="mt-4 bg-orange-500 text-white rounded-lg text-center">
                  <span className="text-3xl font-bold">15+</span>
                  <p className="text-sm">Years of Excellence</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-yellow-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <BookOpen className="text-orange-500 w-10 h-10 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Mission
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to provide quality education that helps students
                excel in board exams, competitive exams, and overall
                personality development. We aim to make learning an engaging,
                confidence-boosting, and goal-oriented journey.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Target className="text-orange-500 w-10 h-10 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Vision
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to create a learning ecosystem where every student
                is empowered to achieve academic excellence and develop skills
                for a successful future. We strive to be a trusted educational
                partner for parents and students across the community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
