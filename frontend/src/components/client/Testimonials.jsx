import axios from "axios";
import { API } from "../../api";
import { useEffect, useState } from "react";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);   // ✅ ab component ke andar
  const [loading, setLoading] = useState(false);

  // Fetch gallery data
  const fetchResult = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API}/api/home/feedback`);
      console.log(res.data);

      if (res.data.success) {
        setReviews(res.data.feedbacks);
      }
      else {
        setReviews([]);
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
    <section className="py-12 bg-gray-100 px-4 sm:px-6 lg:px-8">
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-blue-800 mb-8">
        What Our Students Say
      </h3>

       {/* Loader */}
      {loading && <p className="text-center">Loading...</p>} 

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((t, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl p-4 sm:p-6 text-center border hover:shadow-lg transition"
          >
            <p className="text-gray-600 italic mb-4 text-sm sm:text-base">
              “{t.feedback}”
            </p>
            <h4 className="font-semibold text-base sm:text-lg text-blue-800">
              - {t.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
