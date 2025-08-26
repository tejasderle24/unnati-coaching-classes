const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul Mehta",
      feedback:
        "Unnati Coaching helped me crack JEE with confidence. The teachers are highly supportive.",
    },
    {
      name: "Aisha Khan",
      feedback:
        "Thanks to the guidance here, I secured a good rank in NEET. Regular mock tests helped a lot!",
    },
    {
      name: "Vikram Patil",
      feedback:
        "The personalized doubt-solving sessions really boosted my preparation.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100 px-4 sm:px-6 lg:px-8">
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-blue-800 mb-8">
        What Our Students Say
      </h3>
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
