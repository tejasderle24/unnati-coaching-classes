import { useState, useEffect } from "react";  // ✅ Ye import karo
import { Award } from "lucide-react";
import axios from "axios";
import { API } from "../../api";

const StarPerformers = () => {
  const [result, setResult] = useState([]);   // ✅ ab component ke andar
  const [loading, setLoading] = useState(false);

  // Fetch gallery data
  const fetchResult = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API}/api/home/result`);
      console.log(res.data);

      if (res.data.success) {
        setResult(res.data.toppers);
      } 
      else {
        setResult([]);
      }

    } catch (error) {
      console.error("ERROR", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResult();
  }, []);

    return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 className="text-2xl sm:text-3xl font-bold text-center text-blue-800 mb-10">
        Our Star Performers
      </h3>

      {/* Loader */}
      {loading && <p className="text-center">Loading...</p>}

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {result.map((student, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={student.img}  // <- API response me img field hona chahiye
                alt={student.name}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs sm:text-sm font-semibold px-2 py-1 rounded-full">
                {student.year}
              </span>
            </div>

            {/* Content */}
            <div className="p-3 sm:p-4 text-center">
              <h4 className="font-semibold text-base sm:text-lg">{student.name}</h4>
              <p className="text-blue-600 font-medium text-sm sm:text-base">{student.exam}</p>
              <p className="text-orange-500 font-bold text-sm sm:text-base">{student.rank}</p>
              <p className="text-gray-600 text-xs sm:text-sm mt-1">{student.college}</p>
            </div>

            {/* Badge */}
            <div className="border-t px-3 sm:px-4 py-2 flex items-center justify-center space-x-2 text-yellow-600 font-semibold text-xs sm:text-sm">
              <Award size={14} className="sm:w-4 sm:h-4" />
              <span>Top Achiever</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StarPerformers;
