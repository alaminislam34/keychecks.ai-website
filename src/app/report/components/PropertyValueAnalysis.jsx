import { TrendingUp, Zap } from "lucide-react";
// Using Zap (from lucide-react) for the Insight box

// Data for the component
const propertyData = {
  askingPrice: "£875,000",
  estimatedValue: "£850k – £895k",
  fairOffer: "£865,000",

  // Data for the main Value/Estimate table
  valueTable: [
    {
      source: "Zoopla Estimate",
      value: "£850k – £895k",
      notes: "Based on market algorithms",
    },
    {
      source: "Last Sold (HM Land Registry)",
      value: "£615,000",
      notes: "June 2018",
    },
    {
      source: "Local £/sqft Benchmark",
      value: "~£612/sqft",
      notes: "87 nearby sales (TW9 4)",
    },
    {
      source: "Recent Market Growth",
      value: "+3.4% YOY",
      notes: "Strong upward trend",
      color: "text-green-600",
    }, // Added color for emphasis
  ],

  // Data for recent comparable sales
  comparableSales: [
    {
      address: "38 Oakwood Drive, TW9 4BL",
      details: "Semi-detached • June 2025",
      price: "£862,000",
    },
    {
      address: "15 Cedar Close, TW9 4BN",
      details: "Semi-detached • Aug 2025",
      price: "£888,000",
    },
    {
      address: "22 Willow Gardens, TW9 4BG",
      details: "Semi-detached • Apr 2025",
      price: "£845,000",
    },
    {
      address: "7 Richmond Park Road, TW9 4BE",
      details: "Semi-detached • Mar 2025",
      price: "£870,000",
    },
  ],

  insight:
    "The asking price of £875,000 sits comfortably within the estimated value range and reflects recent comparables. For negotiation purposes, a fair-market offer would likely sit around £865,000, subject to survey. Zoopla valuations often use current asking-price data which can inflate upper ranges — KeyChecks blends actual Land Registry sales with algorithmic estimates for a more realistic negotiation window.",
};

// Helper component for the three top cards
const StatCard = ({ title, value, color }) => (
  <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm flex-1 text-center">
    <p className="text-sm font-medium text-gray-500 mb-2">{title}</p>
    <p className={`text-xl md:text-2xl font-bold ${color}`}>{value}</p>
  </div>
);

const PropertyValueAnalysis = () => {
  return (
    <div className="p-4 md:p-8 bg-blue-50/50 rounded-xl shadow-lg border border-gray-100">
      {/* --- Header Section --- */}
      <div className="flex items-start mb-6">
        {/* Lucide TrendingUp Icon with Blue theme */}
        <div className="p-3 mr-3 text-white rounded-lg bg-blue-600">
          <TrendingUp className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Property Value & Market Analysis
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Estimated value, recent sales, and market trends
          </p>
        </div>
      </div>

      {/* --- Top Stat Cards (Responsive) --- */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 *:bg-white">
        <StatCard
          title="Asking Price"
          value={propertyData.askingPrice}
          color="text-gray-900"
        />
        <StatCard
          title="Estimated Value"
          value={propertyData.estimatedValue}
          color="text-blue-600"
        />
        <StatCard
          title="Fair Offer"
          value={propertyData.fairOffer}
          color="text-gray-900"
        />
      </div>

      {/* --- Value/Estimate Table --- */}
      <div className="mb-8 max-[389px]:overflow-x-auto">
        <div className="overflow-hidden border border-gray-200 rounded-xl min-w-97.75">
          <div className="grid grid-cols-3 border-b border-gray-100 bg-white text-gray-600 font-medium text-sm py-4 px-4 rounded-t-lg">
            <div className="">Source</div>
            <div className="">Value/Estimate</div>
            <div className=" text-right">Notes</div>
          </div>

          <div className=" overflow-hidden">
            {propertyData.valueTable.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 p-4 text-gray-700 text-sm `}
              >
                <div className=" font-medium">{row.source}</div>
                <div className={` ${row.color || "text-gray-900"} font-semibold`}>
                  {row.value}
                </div>
                <div className=" text-right text-gray-500 text-xs mt-0.5">
                  {row.notes}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- Recent Comparable Sales --- */}
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Recent Comparable Sales
      </h3>
      <div className="space-y-3">
        {propertyData.comparableSales.map((sale, index) => (
          <div
            key={index}
            className="flex justify-between bg-white items-center p-4 border border-gray-200 rounded-lg transition duration-300 hover:shadow-sm"
          >
            <div>
              <p className="text-lg font-medium text-gray-800">
                {sale.address}
              </p>
              <p className="text-sm text-gray-500 mt-1">{sale.details}</p>
            </div>
            <p className="text-xl font-bold text-blue-600">{sale.price}</p>
          </div>
        ))}
      </div>

      {/* --- Expert Insight (Info Box) --- */}
      <div className="mt-8 p-4 flex items-start bg-indigo-50 border-l-4 border-indigo-500 rounded-r-md">
        {/* Lucide Zap Icon used for the Insight */}
        <Zap className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
        <div className="ml-3 italic">
          <span className="font-bold text-indigo-800 text-sm">
            Expert Insight:
          </span>{" "}
          <span className="text-indigo-700 text-sm">
            {propertyData.insight}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyValueAnalysis;
