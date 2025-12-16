import { Droplet, Lightbulb } from "lucide-react";

// Reusable component for displaying the risk level badge
const RiskBadge = ({ level }) => {
  let bgColor = "bg-green-100";
  let textColor = "text-green-700";
  let text = level;

  if (level === "No Risk") {
    bgColor = "bg-green-100";
    textColor = "text-green-700";
  } else if (level === "Unlikely") {
    bgColor = "bg-green-100"; // Using green for "Unlikely" to match the image
    textColor = "text-green-700";
  } else if (level === "Very Low") {
    bgColor = "bg-green-100";
    textColor = "text-green-700";
  }

  return (
    <span
      className={`inline-block truncate items-center px-3 py-1 text-xs font-medium rounded-full ${bgColor} ${textColor}`}
    >
      {text}
    </span>
  );
};

// Reusable component for a single risk item
const RiskItem = ({ title, description, riskLevel }) => (
  <div className="flex justify-between items-start py-4 border border-gray-200 bg-white p-4 rounded-xl">
    <div className="pr-4">
      <h3 className="text-base font-medium text-dark mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
    <div className="">
      <RiskBadge level={riskLevel} />
    </div>
  </div>
);

const FloodRiskAssessment = () => {
  return (
    <div className="p-8 bg-blue-50 border border-gray-200 rounded-2xl">
      {/* Header Section */}
      <div className="flex items-start mb-6">
        <div className="flex items-center justify-center p-3 bg-blue-500 rounded-xl mr-4">
          <Droplet size={25} className="text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Flood Risk Assessment
          </h2>
          <p className="text-sm text-gray-500">
            Comprehensive analysis of flooding risks from all sources
          </p>
        </div>
      </div>

      {/* Risk Items List */}
      <div className="divide-y space-y-4 divide-gray-100">
        <RiskItem
          title="Surface Water Flooding"
          description="Very low risk — the ground drains well in this area, meaning rainwater is unlikely to pool or cause local flooding."
          riskLevel="Very Low"
        />
        <RiskItem
          title="Rivers & Sea Flooding"
          description="Very low risk — the property sits far from major rivers and is not within any known flood zone."
          riskLevel="Very Low"
        />
        <RiskItem
          title="Groundwater Flooding"
          description="Not at risk — the location is outside groundwater flood alert areas."
          riskLevel="No Risk"
        />
        <RiskItem
          title="Reservoir Flooding"
          description="Unlikely — no large reservoirs nearby that could affect the area."
          riskLevel="Unlikely"
        />
      </div>

      {/* Summary Box */}
      <div className="mt-6 p-4 rounded-xl text-sm bg-purple-50 border border-purple-200">
        <p className="text-sm text-gray-800">
          <span className="font-semibold">Summary:</span> Overall, the property
          has a very low risk of flooding from any source. Rainwater drains
          effectively, and the home is not near a river or reservoir. Future
          projections (2040-2060) also show no significant increase in flood
          likelihood.
        </p>
      </div>

      {/* Expert Insight */}
      <div className="mt-4 p-4 rounded-lg bg-yellow-50 flex items-start">
        <Lightbulb className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 shrink-0" />
        <p className="text-sm italic text-gray-800">
          <span className="font-semibold">Expert Insight:</span> Surface water
          flooding happens when heavy rain can't drain away fast enough. In this
          area, the risk is rated as very low, meaning everyday rainfall is
          easily managed by local drainage systems.
        </p>
      </div>
    </div>
  );
};

export default FloodRiskAssessment;
