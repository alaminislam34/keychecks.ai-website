import { FileText, Zap, Lightbulb } from "lucide-react";
// Using Zap for the Pro Tip and Lightbulb for the KeyChecks Tip

const nextStepsData = {
  estateAgentQuestions: [
    "How long has the property been on the market?",
    "Has anyone made an offer yet?",
    "Has the price been reduced recently?",
    "Is the seller in a chain?",
  ],
  solicitorQuestions: [
    "Can you confirm no hidden covenants on the property?",
    "Is it definitely freehold?",
    "Any shared paths or access rights?",
    "Please confirm no tree protection orders nearby",
  ],
  proTip:
    "If listed for 6-8 weeks+, a polite offer around £865,000 can open negotiation.",
  keyChecksTip:
    "Show your solicitor this report. It saves them time and helps ensure nothing important slips through the cracks.",
};

const YourNextSteps = () => {
  return (
    <div className="p-4 md:p-8 bg-white rounded-xl shadow-lg border border-gray-100">
      {/* --- Header Section --- */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">
          Your Next Steps
        </h2>
      </div>

      {/* --- Before You Make an Offer Section --- */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Before You Make an Offer
        </h3>

        <p className="text-lg font-medium text-gray-700 mb-3">
          Questions to Ask the Estate Agent:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          {nextStepsData.estateAgentQuestions.map((q, index) => (
            <li key={index} className="pl-1">
              {q}
            </li>
          ))}
        </ul>

        {/* Pro Tip Box (Yellow/Amber) */}
        <div className="mt-5 p-4 flex items-start bg-yellow-50 border-l-4 border-yellow-500 rounded-r-md">
          <Zap className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="ml-3">
            <span className="font-bold text-amber-800 text-sm">Pro Tip:</span>{" "}
            <span className="text-amber-700 text-sm">
              {nextStepsData.proTip}
            </span>
          </div>
        </div>
      </div>

      {/* --- When You Instruct a Solicitor Section --- */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          When You Instruct a Solicitor
        </h3>

        <div className="p-2 md:p-4 rounded-xl bg-gray-50">
          <p className="text-lg font-medium text-gray-700 mb-3">
            Key Questions to Ask:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            {nextStepsData.solicitorQuestions.map((q, index) => (
              <li key={index} className="pl-1">
                {q}
              </li>
            ))}
          </ul>
        </div>

        {/* KeyChecks Tip Box (Purple) */}
        <div className="mt-5 p-4 flex items-start bg-purple-50 border-l-4 border-purple-500 rounded-r-md">
          <Lightbulb className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
          <div className="ml-3">
            <span className="font-bold text-purple-800 text-sm">
              KeyChecks Tip:
            </span>{" "}
            <span className="text-purple-700 text-sm">
              {nextStepsData.keyChecksTip}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourNextSteps;
