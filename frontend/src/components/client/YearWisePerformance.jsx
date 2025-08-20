const YearWisePerformance = () => {
  const stats = [
    { year: "2021", jee: 120, neet: 80, cet: 150 },
    { year: "2022", jee: 150, neet: 95, cet: 210 },
    { year: "2023", jee: 180, neet: 110, cet: 190 },
    { year: "2024", jee: 200, neet: 130, cet: 250 },
  ];

  return (
    <section className="py-12 bg-gray-100 px-4 sm:px-6 lg:px-8">
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-blue-800 mb-8">
        Year-wise Performance
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {stats.map((row, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-4 sm:p-6 text-center hover:shadow-xl transition"
          >
            <h4 className="text-lg sm:text-xl font-bold text-blue-700">{row.year}</h4>
            <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base">
              JEE:{" "}
              <span className="font-semibold text-orange-600">{row.jee}</span>
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              NEET:{" "}
              <span className="font-semibold text-blue-700">{row.neet}</span>
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              MHT CET:{" "}
              <span className="font-semibold text-orange-600">{row.cet}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YearWisePerformance;
