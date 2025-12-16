import { GraduationCap, Zap } from "lucide-react";
import { FaGraduationCap } from "react-icons/fa"; // Using a React Icon for the Insight Box

// Helper component for the school rating badge
const RatingBadge = ({ rating }) => {
  let colorClass = "";
  switch (rating) {
    case "Outstanding":
      colorClass = "bg-green-500";
      break;
    case "Good":
      colorClass = "bg-blue-500";
      break;
    case "Requires Improvement":
      colorClass = "bg-yellow-500";
      break;
    default:
      colorClass = "bg-gray-500";
  }
  return (
    <span
      className={`text-xs font-semibold px-3 py-1 rounded-full text-white ${colorClass}`}
    >
      {rating}
    </span>
  );
};

const SchoolsEducation = () => {
  // Data for the schools list
  const schools = [
    {
      name: "Sheen Mount Primary School",
      type: "Primary",
      distance: "0.3 miles",
      ofsted: "Ofsted 2023",
      rating: "Outstanding",
    },
    {
      name: "St. Elizabeth's Primary",
      type: "Primary",
      distance: "0.6 miles",
      ofsted: "Ofsted 2024",
      rating: "Good",
    },
    {
      name: "Christ's School",
      type: "Secondary",
      distance: "1.2 miles",
      ofsted: "Ofsted 2024",
      rating: "Good",
    },
    {
      name: "Richmond Park Academy",
      type: "Secondary",
      distance: "1.5 miles",
      ofsted: "Ofsted 2023",
      rating: "Outstanding",
    },
  ];

  return (
    <div className="p-4 md:p-8 bg-green-50/50 rounded-xl shadow-lg border border-gray-100">
      {/* --- Header Section --- */}
      <div className="flex items-start mb-6">
        {/* Lucide GraduationCap Icon */}
        <div className="p-3 mr-3 bg-green-100 rounded-lg text-green-600">
          <GraduationCap className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Schools & Education
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Nearby schools with Ofsted ratings and distances
          </p>
        </div>
      </div>

      {/* --- Schools List --- */}
      <div className="space-y-3">
        {schools.map((school, index) => (
          <div
            key={index}
            className="flex justify-between bg-white items-start p-4 border border-gray-200 rounded-lg transition duration-300 hover:shadow-sm"
          >
            <div>
              <p className="text-lg font-medium text-gray-800">{school.name}</p>
              <p className="text-sm text-gray-500 mt-1">
                {school.type} &bull; {school.distance} &bull; {school.ofsted}
              </p>
            </div>
            <RatingBadge rating={school.rating} />
          </div>
        ))}
      </div>

      {/* --- Overview Section --- */}
      <div className="mt-8 p-4 rounded-xl bg-white">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Overview</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Maple Avenue area is exceptionally well served by Outstanding and
          Good-rated schools within walking distance. Sheen Mount Primary is
          highly regarded locally and rated Outstanding, while Christ&apos;s
          School provides a strong secondary option nearby.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Overall, this postcode ranks among the best in Richmond for school
          quality, making it highly appealing to families seeking stability and
          excellent education options.
        </p>
      </div>

      {/* --- Expert Insight (Info Box) --- */}
      <div className="mt-6 p-4 flex items-start bg-yellow-50 border-l-4 border-yellow-500 rounded-r-md">
        {/* React-Icons Zap or FaGraduationCap for Insight */}
        <Zap className="w-6 h-6 text-yellow-600 shrink-0 mt-0.5" />
        <div className="ml-3 italic">
          <span className="font-bold text-yellow-800 text-sm">
            Expert Insight:
          </span>{" "}
          <span className="text-yellow-700 text-sm">
            Schools with a recent &quot;Good&quot; or &quot;Outstanding&quot;
            Ofsted report often boost property demand and help retain value over
            time. This postcode benefits from multiple top-rated schools within
            a one-mile radius.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SchoolsEducation;
