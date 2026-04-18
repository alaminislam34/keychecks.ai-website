import { Clock, Zap } from "lucide-react";

const transportData = {
  nearestStation: "Richmond",
  stationDetails: "District Line & Overground",
  stationDistance: "0.8 miles away",
  commuteTime: "30–35 min",
  commuteDestination: "To Victoria/Waterloo",
  commuteAccess: "Fast direct access",

  tableRows: [
    {
      title: "Secondary Station",
      content: "North Sheen (Overground) — 0.5 miles",
    },
    {
      title: "Bus Routes",
      content:
        "Routes 33, 337, and 969 to Kingston, Hammersmith, and Twickenham",
    },
    {
      title: "Motorway Access",
      content: "Easy access to A316 and M3, both within 5-minute drive",
    },
    { title: "Parking", content: "Unrestricted on-street parking available" },
  ],

  insight:
    "Excellent transport access is one of Richmond's key strengths — few outer-London areas combine such a desirable residential feel with convenient links into the City and West End. The District Line and Overground provide fast, direct access to Central London, while the A316 and M3 offer convenient road connections.",
};

const TransportCommute = () => {
  return (
    <div className="p-4 md:p-8 bg-teal-50/50 rounded-xl border border-teal-100">
      <div className="flex items-start mb-6">
        {/* Lucide Clock Icon with Teal theme */}
        <div className="p-3 mr-3 bg-teal-500 rounded-lg text-white">
          <Clock className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-dark">
            Transport & Commute
          </h2>
          <p className="text-sm text-gray mt-1">
            Station distances and commute times to Central London
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Nearest Station
          </p>
          <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug">
            {transportData.nearestStation}
          </p>
          <p className="text-sm text-gray-600 mt-1 mb-2">
            {transportData.stationDetails}
          </p>
          <p className="text-sm text-green-500">
            {transportData.stationDistance}
          </p>
        </div>

        <div className="p-6 rounded-lg border border-gray-200 shadow-sm bg-white">
          <p className="text-sm font-medium text-gray-700 mb-2">Commute Time</p>
          <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-snug">
            {transportData.commuteTime}
          </p>
          <p className="text-sm text-gray-600 mt-1 mb-2">
            {transportData.commuteDestination}
          </p>
          <p className="text-sm text-green-500">
            {transportData.commuteAccess}
          </p>
        </div>
      </div>

      <div className="max-[389px]:overflow-x-auto">
        <div className="border border-gray-200 rounded-lg overflow-hidden mb-6 min-w-97.75">
          {transportData.tableRows.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 sm:grid-cols-3 border-b last:border-b-0 border-gray-200`}
            >
              <div className="col-span-1 p-4 font-medium text-dark bg-gray-50">
                {row.title}
              </div>
              <div className="col-span-2 p-4 text-gray border-t sm:border-t-0 sm:border-l border-gray-200">
                {row.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 flex items-start bg-pink-50 border-l-4 border-pink-500 rounded-r-md">
        <Zap className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
        <div className="ml-3 italic">
          <span className="font-bold text-dark text-sm">Expert Insight:</span>{" "}
          <span className="text-dark text-sm">{transportData.insight}</span>
        </div>
      </div>
    </div>
  );
};

export default TransportCommute;
