import { Wifi, Zap } from "lucide-react";
import { IoIosInformationCircleOutline } from "react-icons/io"; // Using the same icon style as the first component for consistency

// Data for the component
const broadbandData = {
  // Main speed stats
  downloadSpeed: "900 Mbps",
  downloadDetail: "Full Fibre (FTTP)",
  downloadStatus: "Ultrafast",
  uploadSpeed: "110 Mbps",
  uploadDetail: "Symmetric connection",
  uploadStatus: "Excellent",

  // Table data
  tableRows: [
    {
      title: "Broadband Type",
      content: "Full Fibre (FTTP) available — Ultrafast connection",
    },
    {
      title: "Other Available Tiers",
      content: "Superfast (67 Mbps) and Standard (11 Mbps)",
    },
    {
      title: "Providers",
      content: "Openreach, Virgin Media, BT, Sky, TalkTalk",
    },
    {
      title: "Mobile Coverage",
      content:
        "Excellent 4G from all major networks; 5G available via EE and Vodafone",
    },
  ],

  // Expert Insight
  insight:
    "Full-fibre broadband adds tangible appeal for buyers working from home or managing multiple connected devices. Homes with 900+ Mbps capability are in the top 10% nationwide for connectivity.",
};

const BroadbandConnectivity = () => {
  // Helper component for the status pill
  const StatusPill = ({ status, colorClass }) => (
    <span
      className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorClass}`}
    >
      {status}
    </span>
  );

  return (
    <div className="p-4 md:p-8 bg-indigo-50/50 rounded-xl shadow-lg border border-gray-100">
      {/* --- Header Section --- */}
      <div className="flex items-start mb-6">
        {/* Lucide Wifi Icon with Purple theme */}
        <div className="p-2.5 mr-3 text-white rounded-lg bg-indigo-700">
          <Wifi className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Broadband & Connectivity
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Internet speeds and mobile coverage analysis
          </p>
        </div>
      </div>

      {/* --- Speed Stats Cards Section (Fully Responsive) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Download Speed Card */}
        <div className="p-4 rounded-lg border border-gray-200 shadow-sm">
          <p className="text-gray-700 font-medium mb-3">Download Speed</p>
          <p className="text-2xl md:text-3xl font-semibold text-indigo-800 mb-1">
            {broadbandData.downloadSpeed}
          </p>
          <p className="text-sm text-gray-500 mb-3">
            {broadbandData.downloadDetail}
          </p>
          <StatusPill
            status={broadbandData.downloadStatus}
            colorClass="text-purple-700 bg-purple-100/70"
          />
        </div>

        {/* Upload Speed Card */}
        <div className="p-4 rounded-lg border border-gray-200 shadow-sm">
          <p className="text-gray-700 font-medium mb-3">Upload Speed</p>
          <p className="text-2xl md:text-3xl font-semibold text-indigo-800 mb-1">
            {broadbandData.uploadSpeed}
          </p>
          <p className="text-sm text-gray-500 mb-3">
            {broadbandData.uploadDetail}
          </p>
          <StatusPill
            status={broadbandData.uploadStatus}
            colorClass="text-indigo-700 bg-indigo-100/70"
          />
        </div>
      </div>

      {/* --- Main Information Table --- */}
      <div className="max-[389px]:overflow-x-auto">
        <div className="border border-gray-200 rounded-lg overflow-hidden mb-6 min-w-97.75">
          {broadbandData.tableRows.map((row, index) => (
            <div
              key={index}
              // Responsive grid for table rows: 2 columns on small screens, 3 on larger ones
              className={`grid grid-cols-1 sm:grid-cols-3 border-b last:border-b-0 border-gray-200`}
            >
              <div className="col-span-1 p-4 font-medium bg-gray-50 text-gray-700">
                {row.title}
              </div>
              <div className="col-span-2 p-4 text-gray-600 border-t sm:border-t-0 sm:border-l border-gray-200">
                {row.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Expert Insight (Info Box) --- */}
      <div className="p-4 flex items-start bg-purple-50 border-l-4 border-purple-500 rounded-r-md">
        {/* Lucide Zap Icon used for the Insight */}
        <Zap className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
        <div className="ml-3 italic">
          <span className="font-bold text-purple-800 text-sm">
            Expert Insight:
          </span>{" "}
          <span className="text-purple-700 text-sm">
            {broadbandData.insight}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BroadbandConnectivity;
