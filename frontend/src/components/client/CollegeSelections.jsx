import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CollegeSelections = () => {
  const colleges = [
    { name: "IIT Bombay", count: 45 },
    { name: "AIIMS Delhi", count: 30 },
    { name: "IIT Madras", count: 25 },
    { name: "Grant Medical College", count: 20 },
    { name: "IIT Delhi", count: 18 },
    { name: "IIT Kanpur", count: 15 },
    { name: "AIIMS Mumbai", count: 12 },
    { name: "IIT Roorkee", count: 10 },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 250; // ek click par kitna move kare
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-12 max-w-6xl mx-auto relative">
      <h3 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8">
        College Selections
      </h3>

      {/* Arrows + Row */}
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 z-10 hidden sm:block"
        >
          <ChevronLeft className="w-6 h-6 text-blue-600" />
        </button>

        {/* Scrollable Row */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto px-4 sm:px-10 scroll-smooth no-scrollbar"
        >
          {colleges.map((clg, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-4 sm:p-6 md:p-8 text-center border hover:shadow-xl transition w-40 sm:w-56 md:w-64 h-32 sm:h-36 md:h-40 flex flex-col justify-center flex-shrink-0"
            >
              <h4 className="font-semibold text-sm sm:text-base md:text-lg text-blue-700">
                {clg.name}
              </h4>
              <p className="text-orange-500 font-bold text-base sm:text-lg md:text-xl">
                {clg.count}+ Students
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 z-10 hidden sm:block"
        >
          <ChevronRight className="w-6 h-6 text-blue-600" />
        </button>
      </div>
    </section>
  );
};

export default CollegeSelections;
