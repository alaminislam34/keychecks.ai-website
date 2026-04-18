import { CircleCheckBig } from "lucide-react";

const OverallAssessment = () => {
  return (
    <div className="p-4 md:p-8 rounded-2xl bg-green-50/60 border border-green-300 flex flex-row gap-4">
      {/* Header Section */}
      <div className="flex items-start mb-4">
        <div className="flex items-center justify-center p-3.5 min-w-10 rounded-2xl bg-green-500 mr-4">
          <CircleCheckBig size={25} className="text-white" />
        </div>
      </div>

      <div>
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800">
          Overall Assessment
        </h2>
        {/* Description Text */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          This property presents an excellent opportunity in one of
          Richmond's most desirable locations. With very low flood risk,
          outstanding schools nearby, and exceptional transport links, it
          represents strong value in a stable, sought-after market.
        </p>
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-y-6">
          {/* Asking Price */}
          <div>
            <p className="text-sm text-gray-500 mb-1">Asking Price</p>
            <p className="text-xl font-bold text-gray-900">£875,000</p>
          </div>

          {/* Estimated Value */}
          <div>
            <p className="text-sm text-gray-500 mb-1">Estimated Value</p>
            <p className="text-xl font-bold text-gray-900">£850k – £895k</p>
          </div>

          {/* Offer Suggestion */}
          <div>
            <p className="text-sm text-gray-500 mb-1">Offer Suggestion</p>
            <p className="text-xl font-bold text-purple-600">£865,000</p>
          </div>

          {/* Risk Level */}
          <div>
            <p className="text-sm text-gray-500 mb-1">Risk Level</p>
            <p className="text-xl font-bold text-green-600">Low</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverallAssessment;
