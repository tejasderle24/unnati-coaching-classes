import {FaGraduationCap, FaAward, FaTrophy, FaStar } from "react-icons/fa";


const SuccessStory = () => {
  return (
    <section className="bg-blue-600 text-white py-12 rounded-2xl max-w-6xl mx-auto mb-12 shadow-lg">
      <h3 className="text-3xl font-bold mb-8 text-center">Our Success Story</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center space-y-2">
          <FaGraduationCap size={40} className="text-yellow-300" />
          <p className="text-3xl font-extrabold">500+</p>
          <p className="text-lg">JEE Selections</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <FaAward size={40} className="text-pink-300" />
          <p className="text-3xl font-extrabold">300+</p>
          <p className="text-lg">NEET Selections</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <FaTrophy size={40} className="text-orange-300" />
          <p className="text-3xl font-extrabold">50+</p>
          <p className="text-lg">Top 100 Ranks</p>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <FaStar size={40} className="text-green-300" />
          <p className="text-3xl font-extrabold">98%</p>
          <p className="text-lg">Success Rate</p>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
