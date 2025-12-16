import { FileText, Zap } from "lucide-react";
// Using Zap (from lucide-react) for the Insight box, matching the Broadband component style for consistency

// Data for the component
const councilTaxData = {
  band: "F",
  annualEstimate: "£2,431",
  monthlyEstimate: "£200 per month",
  localAuthority: "London Borough of Richmond upon Thames",
  effectiveFrom: "1 April 2015",
  improvementIndicator:
    "No — property has not been flagged for structural changes since valuation",
  mixedUse: "No — assessed as a single domestic dwelling",
  insight:
    "Council Tax bands are based on 1991 property values and do not automatically update after purchase or renovation. Buyers can request a banding review from the Valuation Office Agency if they believe the current band is incorrect.",
};

const CouncilTax = () => {
  // Data array for the main table
  const tableRows = [
    { title: "Local Authority", content: councilTaxData.localAuthority },
    { title: "Effective From", content: councilTaxData.effectiveFrom },
    {
      title: "Improvement Indicator",
      content: councilTaxData.improvementIndicator,
    },
    { title: "Mixed-Use Property", content: councilTaxData.mixedUse },
  ];

  return (
    <div className="p-4 md:p-8 bg-orange-50/50 rounded-xl shadow-lg border border-gray-100">
      {/* --- Header Section --- */}
      <div className="flex items-start mb-6">
        {/* Lucide FileText Icon with Orange theme */}
        <div className="p-3 mr-3 text-white rounded-lg bg-orange-500">
          <FileText className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Council Tax</h2>
          <p className="text-sm text-gray-500 mt-1">
            Band information and annual cost estimate
          </p>
        </div>
      </div>

      {/* --- Band & Estimate Card (Responsive) --- */}
      <div className="p-6 bg-gray-50/50 rounded-xl border border-gray-200 mb-6 grid grid-cols-2 gap-4">
        {/* Council Tax Band */}
        <div className="mb-4 sm:mb-0">
          <p className="text-sm font-medium text-gray-700 mb-1">
            Council Tax Band
          </p>
          <p className="text-4xl font-bold text-gray-900">
            {councilTaxData.band}
          </p>
        </div>

        {/* Annual Estimate */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-1">
            Annual Estimate (2025/26)
          </p>
          <p className="text-4xl font-bold text-orange-600 leading-none">
            {councilTaxData.annualEstimate}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            ~{councilTaxData.monthlyEstimate}
          </p>
        </div>
      </div>

      {/* --- Main Information Table --- */}
      <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
        {tableRows.map((row, index) => (
          <div
            key={index}
            // Responsive grid: title takes 1 column, content takes 2 on larger screens
            className={`grid grid-cols-1 sm:grid-cols-3 ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
            } border-b last:border-b-0 border-gray-200`}
          >
            <div className="col-span-1 p-4 font-medium text-gray-700">
              {row.title}
            </div>
            <div className="col-span-2 p-4 text-gray-600 border-t sm:border-t-0 sm:border-l border-gray-200">
              {row.content}
            </div>
          </div>
        ))}
      </div>

      {/* --- Expert Insight (Info Box) --- */}
      <div className="p-4 flex items-start bg-yellow-50 border-l-4 border-yellow-500 rounded-r-md">
        {/* Lucide Zap Icon used for the Insight */}
        <Zap className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="ml-3">
          <span className="font-bold text-amber-800 text-sm">
            Expert Insight:
          </span>{" "}
          <span className="text-amber-700 text-sm">
            {councilTaxData.insight}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CouncilTax;
