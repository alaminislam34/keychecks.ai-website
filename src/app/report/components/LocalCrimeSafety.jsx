import { Shield, TrendingUp, Info } from "lucide-react";
import { IoIosInformationCircleOutline } from "react-icons/io";

const LocalCrimeSafety = () => {
  // Data for the three main stats cards
  const stats = [
    {
      value: "45",
      label: "Incidents in Oct 2025",
      status: "Low",
      titleColor: "text-dark",
      statusColor: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      value: "<1",
      label: "Burglaries per month",
      status: "Very Low",
      titleColor: "text-green-600",
      statusColor: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      value: "40–60",
      label: "Monthly range (stable)",
      status: "Stable",
      titleColor: "text-dark",
      statusColor: "text-blue-600",
      bgColor: "bg-blue-100",
    },
  ];

  // Data for the main information table
  const tableData = [
    {
      title: "Burglary & Property Crime",
      content:
        "Very low incidence — burglary remains well below of London aveage, with London aveage in the past 12 months. Vehicle-reast 12 months. Vehicle-related offences are rare.",
    },
    {
      title: "Other Common Offences",
      content:
        "Antisocial behaviour (8), violence and sexual offences (12), public order offences (4).",
    },
    {
      title: "12-Month Trend",
      content:
        "Stable — monthly reports fluctuate between 40 and 60, with no sustained rise in property-related crime.",
    },
    {
      title: "Police Force",
      content: "Metropolitan Police Service – Richmond Team",
    },
  ];

  return (
    <div className="p-4 md:p-8 bg-red-50/50 rounded-xl shadow-lg border border-red-100">
      {/* --- Header Section --- */}
      <div className="flex items-start mb-4">
        {/* Lucide Shield Icon */}
        <div className="p-2.5 mr-3 text-white rounded-xl bg-red-500">
          <Shield className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Local Crime & Safety
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            12-month crime statistics and area safety analysis
          </p>
        </div>
      </div>

      {/* --- Stats Cards Section --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-3 flex flex-col items-center rounded-lg border border-gray-300 transition duration-300 bg-white"
          >
            <p
              className={`text-xl md:text-2xl lg:text-3xl font-bold ${stat.titleColor}`}
            >
              {stat.value}
            </p>
            <p className="text-xs font-light text-gray-500 mt-1 mb-2">
              {stat.label}
            </p>
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full ${stat.statusColor} ${stat.bgColor}`}
            >
              {stat.status}
            </span>
          </div>
        ))}
      </div>

      {/* --- Main Information Table --- */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        {tableData.map((row, index) => (
          <div
            key={index}
            className={`grid grid-cols-3 border-b last:border-b-0 border-gray-200`}
          >
            <div className="col-span-1 bg-gray-50 p-4 font-semibold text-dark text-sm md:text-base">
              {row.title}
            </div>
            <div className="col-span-2 text-xs md:text-sm p-4 text-gray-600 border-l border-gray-200">
              {row.content}
            </div>
          </div>
        ))}
      </div>

      {/* --- Area Overview Section --- */}
      <div className="mt-8 p-4 bg-white rounded-xl">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Area Overview
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          The Richmond area around Maple Avenue maintains low level of reported
          crime, typical for this highly desirable London neighbourhood.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Most incidents relate to minor antisocial behaviour than serious or
          targeted offences. Burglary rates are very low and significantly below
          the London average, reflecting raa&apos;s residential character
          chracter strong community presence.
        </p>
      </div>

      {/* --- Expert Insight (Info Box) --- */}
      <div className="mt-6 p-4 flex items-start bg-purple-50 border-l-4 border-purple-500 rounded-r-md">
        {/* React-Icons IoIosInformationCircleOutline */}
        <IoIosInformationCircleOutline className="w-6 h-6 text-purple-600 shrink-0 mt-0.5" />
        <div className="ml-3 italic">
          <span className="font-bold text-dark text-sm">Expert Insight:</span>{" "}
          <span className="text-dark text-sm">
            Over the last year, crime h fhjs hhd remained consistently lowy low,
            with indation of rising ocs data burglary or theft. Local shows 1
            property-related inciident taxion thhis postcode cluster — psstally
            for Greater London.
          </span>
        </div>
      </div>
    </div>
  );
};

export default LocalCrimeSafety;
