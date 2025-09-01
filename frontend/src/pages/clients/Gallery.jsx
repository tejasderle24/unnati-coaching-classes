import { useEffect, useState } from "react";
import { Calendar, Award, Users, CalendarDays, Camera } from "lucide-react";
import axios from "axios";
import { API } from "../../api";

// ================== Categories ==================
const categories = ["All Events", "Awards", "Seminars", "Events"];

// ================== Reusable Event Card ==================
const EventCard = ({ event, onImageClick }) => (
  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
    <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
    <p className="text-gray-600">{event.description}</p>
    <div className="flex items-center text-blue-600 mt-2 text-sm font-medium">
      <Calendar className="w-4 h-4 mr-2" />
      {new Date(event.date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })}
    </div>

    {/* Event Images with +X Overlay */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      {event.images.slice(0, 4).map((img, i) => (
        <div key={i} className="relative">
          <img
            src={img}
            alt={event.title}
            className="rounded-lg object-cover h-60 w-full transform hover:scale-105 transition duration-300"
          />
          {i === 3 && event.images.length > 4 && (
            <div
              onClick={() => onImageClick(event.images)}
              className="absolute inset-0 rounded-lg cursor-pointer flex items-center justify-center 
                         bg-black/40 backdrop-blur-sm"
            >
              <span className="text-white text-2xl font-bold drop-shadow-lg">
                +{event.images.length - 4}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

// ================== Gallery Component ==================
export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All Events");
  const [modalImages, setModalImages] = useState(null);

  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch gallery data
  const fetchGallery = async (category = "All Events") => {
    try {
      setLoading(true);

      const url =
        category === "All Events"
          ? `${API}/api/home/gallery`
          : `${API}/api/home/gallery?category=${encodeURIComponent(category)}`;

      const res = await axios.get(url);

      if (Array.isArray(res.data.data)) {
        setGallery(res.data.data);
      } else {
        setGallery([]);
      }
    } catch (error) {
      console.error("Fetch Gallery Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Load gallery on mount
  useEffect(() => {
    fetchGallery();
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-12 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-800">Gallery</h2>
        <p className="text-gray-600 mt-4 text-base sm:text-lg leading-relaxed">
          Explore the vibrant moments from our{" "}
          <span className="font-semibold text-blue-700">events, seminars</span>, and{" "}
          <span className="font-semibold text-yellow-700">prize distribution ceremonies</span>.
          <br className="hidden sm:block" />
          Witness the joy of achievement and the spirit of learning at{" "}
          <span className="font-semibold text-blue-800">Elite Academy</span>.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              fetchGallery(cat); // fetch from DB directly
            }}
            className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 transform
              ${selectedCategory === cat
                ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg scale-105"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:shadow-md"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Events Section */}
      <div className="space-y-10 transition-all duration-500">
        {loading ? (
          <p className="text-center text-gray-600">Loading gallery...</p>
        ) : gallery.length > 0 ? (
          gallery.map((event, index) => (
            <EventCard key={index} event={event} onImageClick={setModalImages} />
          ))
        ) : (
          <p className="text-center text-gray-500">No events found</p>
        )}

      </div>

      {/* Event Highlights */}
      <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl py-12 text-center shadow-lg">
        <h3 className="text-3xl font-semibold mb-8">Our Event Highlights</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="hover:scale-110 transition-transform duration-300">
            <Award className="mx-auto w-8 h-8 mb-2 text-green-300" />
            <p className="text-3xl font-bold">15+</p>
            <p>Award Ceremonies</p>
          </div>
          <div className="hover:scale-110 transition-transform duration-300">
            <Users className="mx-auto w-8 h-8 mb-2 text-orange-300" />
            <p className="text-3xl font-bold">25+</p>
            <p>Seminars Conducted</p>
          </div>
          <div className="hover:scale-110 transition-transform duration-300">
            <CalendarDays className="mx-auto w-8 h-8 mb-2 text-yellow-300" />
            <p className="text-3xl font-bold">50+</p>
            <p>Events Organized</p>
          </div>
          <div className="hover:scale-110 transition-transform duration-300">
            <Camera className="mx-auto w-8 h-8 mb-2 text-red-400" />
            <p className="text-3xl font-bold">1000+</p>
            <p>Memories Captured</p>
          </div>
        </div>
      </div>

      {/* Modal for Fullscreen Images */}
      {modalImages && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-4xl w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {modalImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="event"
                  className="rounded-lg object-cover w-full h-48"
                />
              ))}
            </div>
            <button
              onClick={() => setModalImages(null)}
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
