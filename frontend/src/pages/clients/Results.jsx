import { Trophy } from "lucide-react";
import CollegeSelections from "../../components/client/CollegeSelections";
import StarPerformers from "../../components/client/StarPerformers";
import SuccessStory from "../../components/client/SuccessStory";
import Testimonials from "../../components/client/Testimonials";
import YearWisePerformance from "../../components/client/YearWisePerformance";

const Results = () => {
  return (
    <div className="bg-gray-50">
      <section className="text-center px-4 sm:px-6 md:px-12 lg:px-20 py-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800">
          Results & Achievements
        </h2>
        <p className="mt-3 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Over the past years, our students have consistently achieved{" "}
          <span className="font-semibold text-yellow-800">
            top ranks in JEE, NEET, and State Board Examinations
          </span>. <br className="hidden sm:block" />
          Their dedication, combined with our expert guidance, has made Unnati
          Coaching Classes a trusted name in education.
        </p>
      </section>

      <div className="space-y-12 sm:space-y-16 md:space-y-20 px-4 sm:px-6 md:px-12 lg:px-20">
        <SuccessStory />
        <StarPerformers />
        <YearWisePerformance />
        <CollegeSelections />
        <Testimonials />
      </div>
    </div>
  );
};

export default Results;
