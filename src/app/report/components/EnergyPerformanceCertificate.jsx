import { Zap, Lightbulb } from "lucide-react";

// Reusable component for the EPC rating badge
const EPCRatingBadge = ({ rating, score }) => {
  // Use a green background for 'B' to match the image
  const bgColor = "bg-green-600";

  return (
    <div
      className={`flex items-center justify-center w-12 h-12 rounded-lg ${bgColor} mr-3`}
    >
      <span className="text-xl font-bold text-white">{rating}</span>
    </div>
  );
};

// Reusable component for the risk/cost badge (Very Low)
const RiskBadge = ({ level }) => (
  <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
    {level}
  </span>
);

const EnergyPerformanceCertificate = () => {
  return (
    <div className="p-4 md:p-8 bg-white border border-gray-200 rounded-xl shadow-lg">
      {/* Header Section */}
      <div className="flex items-start mb-6">
        {/* Icon Container (Yellow Background) */}
        <div className="flex items-center justify-center w-10 h-10 min-w-10 rounded-full bg-yellow-100 mr-4">
          <Zap className="w-6 h-6 text-yellow-600" />
        </div>
        {/* Title and Subtitle */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Energy Performance Certificate
          </h2>
          <p className="text-sm text-gray-500">
            Current efficiency rating and estimated running costs
          </p>
        </div>
      </div>

      {/* EPC Status and Annual Cost Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* EPC Status Card */}
        <div className="p-4 border border-gray-200 rounded-xl">
          <p className="text-sm font-medium text-gray-500 mb-2">EPC Status</p>
          <div className="flex items-center">
            <EPCRatingBadge rating="B" score="83" />
            <div>
              <p className="text-lg font-semibold text-gray-800">
                Current Rating
              </p>
              <p className="text-lg font-bold text-gray-800">B (83)</p>
              <p className="text-sm text-green-600 font-medium">
                Energy Efficient
              </p>
            </div>
          </div>
        </div>

        {/* Annual Energy Cost Card */}
        <div className="p-4 border border-gray-200 rounded-xl flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <p className="text-sm font-medium text-gray-500">
              Annual Energy Cost
            </p>
            <RiskBadge level="Very Low" />
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900 leading-none mt-1">
              £680
            </p>
            <p className="text-sm text-gray-600">Per year for heating</p>
            <p className="text-xs text-blue-600 mt-1">
              Below average for property size
            </p>
          </div>
        </div>
      </div>

      {/* Detail Table */}
      <div className="border border-gray-200 rounded-xl overflow-hidden mb-6">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody>
            <tr className="flex">
              <td className="w-2/5 p-4 text-sm font-medium text-gray-800 bg-gray-50 shrink-0">
                What this means
              </td>
              <td className="w-3/5 p-4 text-sm text-gray-600">
                Good insulation and double glazing keep heating costs low.
              </td>
            </tr>
            <tr className="flex">
              <td className="w-2/5 p-4 text-sm font-medium text-gray-800 bg-gray-50 shrink-0">
                Typical Rating for Area
              </td>
              <td className="w-3/5 p-4 text-sm text-gray-600">
                Properties of this type in TW9 usually achieve ratings between C
                and B.
              </td>
            </tr>
            <tr className="flex">
              <td className="w-2/5 p-4 text-sm font-medium text-gray-800 bg-gray-50 shrink-0">
                EPC Validity
              </td>
              <td className="w-3/5 p-4 text-sm text-gray-600">
                Valid until 2033 — no new assessment required before purchase.
              </td>
            </tr>
            <tr className="flex">
              <td className="w-2/5 p-4 text-sm font-medium text-gray-800 bg-gray-50 shrink-0">
                Recommendation
              </td>
              <td className="w-3/5 p-4 text-sm text-gray-600">
                Installing solar panels (£4-6k) could bring rating by £180/year.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Expert Insight */}
      <div className="mt-4 p-4 rounded-lg bg-yellow-50 flex items-start border-l-4 border-purple-400">
        <Lightbulb className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 shrink-0" />
        <p className="text-sm text-gray-800">
          <span className="font-semibold">Expert Insight:</span> A good EPC
          rating (B or above) means lower running costs, better insulation. It's
          also increasingly important to lenders and represents strong resale
          value.
        </p>
      </div>
    </div>
  );
};

export default EnergyPerformanceCertificate;
