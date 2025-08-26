import { Award } from "lucide-react";
import tech1 from "../../assets/faculty/tech1.jpg";
import tech2 from "../../assets/faculty/tech2.jpg";
import tech3 from "../../assets/faculty/tech3.jpg";
import tech4 from "../../assets/faculty/tech4.jpg";

const StarPerformers = () => {
  const toppers = [
    {
      name: "Arjun Mehta",
      rank: "AIR 23",
      exam: "JEE Advanced",
      college: "IIT Bombay, Computer Science",
      year: "2024",
      img: tech1,
    },
    {
      name: "Priya Sharma",
      rank: "AIR 47",
      exam: "NEET",
      college: "AIIMS Delhi, MBBS",
      year: "2025",
      img: tech2,
    },
    {
      name: "Rahul Singh",
      rank: "99.98%ile",
      exam: "JEE Main",
      college: "NIT Trichy, Electrical Engineering",
      year: "2024",
      img: tech3,
    },
    {
      name: "Kavya Patel",
      rank: "AIR 89",
      exam: "NEET",
      college: "JIPMER, MBBS",
      year: "2023",
      img: tech4,
    },
    {
      name: "Vikram Kumar",
      rank: "AIR 156",
      exam: "JEE Advanced",
      college: "IIT Delhi, Mechanical Engineering",
      year: "2024",
      img: tech4,
    },
    {
      name: "Sneha Agarwal",
      rank: "AIR 203",
      exam: "NEET",
      college: "KGMU Lucknow, MBBS",
      year: "2025",
      img: tech3,
    },
    {
      name: "Aditya Roy",
      rank: "99.6%ile",
      exam: "JEE Main",
      college: "NIT Surathkal, Computer Science",
      year: "2023",
      img: tech4,
    },
    {
      name: "Ananya Gupta",
      rank: "AIR 267",
      exam: "NEET",
      college: "GMC Chandigarh, MBBS",
      year: "2025",
      img: tech2,
    },
  ];

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 className="text-2xl sm:text-3xl font-bold text-center text-blue-800 mb-10">
        Our Star Performers
      </h3>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {toppers.map((student, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={student.img}
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
