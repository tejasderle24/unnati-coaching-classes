import { Trophy } from "lucide-react";
import CollegeSelections from "../../components/client/CollegeSelections";
import StarPerformers from "../../components/client/StarPerformers";
import SuccessStory from "../../components/client/SuccessStory";
import Testimonials from "../../components/client/Testimonials";
import YearWisePerformance from "../../components/client/YearWisePerformance";

const Results = () => {
  return (
    <div className="bg-gray-50">
      <section className="text-center py-12"> 
        <h2 className="text-4xl font-bold text-blue-800">Results & Achievements</h2>
         <p className="mt-3 text-gray-700 text-lg leading-relaxed">
        Over the past years, our students have consistently achieved 
        <span className="font-semibold text-yellow-800">
           top ranks in JEE, NEET, and State Board Examinations</span>. <br /> 
        Their dedication, combined with our expert guidance, has made Unnati Coaching Classes a trusted name in education.
      </p>
         </section>

      <SuccessStory />
      <StarPerformers />
      <YearWisePerformance />
      <CollegeSelections />
      <Testimonials />
    </div>
  );
};

export default Results;
