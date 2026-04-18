import { FileText, Award } from "lucide-react";

// Data for the component
const summaryData = {
  // Key Facts Table Data (paired for the two-column layout)
  keyFacts: [
    { title: "Property Type", value: "Semi-detached house" },
    { title: "Last Sold", value: "£615,000 (June 2018)" },
    { title: "Bedrooms / Bathrooms", value: "Around 3 beds / 2 baths" },
    {
      title: "Current Value Range",
      value: "£850,000 – £895,000",
      highlight: true,
    },
    { title: "Council Tax", value: "Band F – Richmond Council" },
    { title: "Flood Risk", value: "Very low (safest levels)", highlight: true },
    { title: "EPC Rating", value: "B (83) – Good energy efficiency" },
    {
      title: "Local Authority",
      value: "London Borough of Richmond upon Thames",
    },
  ],

  // KeyChecks Summary Text
  keyChecksSummary: `42 Maple Avenue sits on a highly desirable, quiet residential road in Richmond. It's got that perfect balance — close enough to everything, but peaceful once you're home.

You've got excellent broadband (full-fibre, up to 900 Mbps), outstanding transport links on the District Line and Overground, and exceptional schools nearby. The area's safe, green, and incredibly well-connected.

Prices here have been rising steadily, and similar houses nearby have sold between £862k and £888k. That puts this one right in the sweet spot for value and future growth in one of London's most sought-after postcodes.`,

  // Confidence Scores
  confidenceScores: {
    areaSafety: 9.5,
    transport: 9.5,
    valueStability: 9.0,
    environment: 9.5,
    schools: 9.5,
    planning: 9.0,
    overall: 9.3,
  },
};

const confidenceBreakdown = [
  { title: "Area Safety", key: "areaSafety" },
  { title: "Transport", key: "transport" },
  { title: "Schools", key: "schools" },
  { title: "Value Stability", key: "valueStability" },
  { title: "Environment", key: "environment" },
  { title: "Planning", key: "planning" },
];

const BuyersSummary = () => {
  return (
    <div className="p-4 md:p-8 bg-gray-50/50 rounded-xl shadow-lg border border-gray-100">
      <div className="flex items-start mb-6">
        <div className="p-3 mr-3 text-white rounded-lg bg-gray-600">
          <FileText className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Buyer's Summary
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Key property details and final assessment
          </p>
        </div>
      </div>

      <div className="mb-8 p-6 border border-gray-200 rounded-lg bg-gray-50/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
          {summaryData.keyFacts.map((fact, index) => (
            <div key={index} className="flex flex-col">
              <span className="font-medium text-gray-500 mb-0.5">
                {fact.title}
              </span>
              <span
                className={`text-gray-800 font-semibold ${
                  fact.highlight ? "text-purple-600" : ""
                }`}
              >
                {fact.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          KeyChecks Summary
        </h3>
        {summaryData.keyChecksSummary.split("\n\n").map((paragraph, index) => (
          <p
            key={index}
            className="text-gray-600 leading-relaxed mb-4 whitespace-pre-line"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="p-6 bg-primary rounded-xl text-white shadow-xl">
        <h3 className="text-lg font-semibold text-white mb-4">
          KeyChecks Confidence Score
        </h3>

        <div className="space-y-3 mb-6">
          {confidenceBreakdown.map((item) => {
            const score = summaryData.confidenceScores[item.key];
            const percent = Math.min(100, Math.max(0, score * 10));

            return (
              <div key={item.key}>
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>{item.title}</span>
                  <span className="font-semibold">{score}/10</span>
                </div>
                <div className="h-2.5 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-center p-6 mt-4 border-t border-white/20">
          <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-1">
            {summaryData.confidenceScores.overall} / 10
          </p>
          <p className="text-sm uppercase tracking-wider">
            Overall Confidence Score
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyersSummary;
