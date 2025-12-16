import { Home, X, AlertTriangle, Check, Zap } from 'lucide-react';
// Using Zap (from lucide-react) for the Insight box, matching previous components

// Data for the component
const landSearchData = [
  { title: 'Conservation Area', status: 'Clear', color: 'text-green-600', icon: Check, statusColor: 'bg-green-100/70' },
  { title: 'Listed Building', status: 'Clear', color: 'text-green-600', icon: Check, statusColor: 'bg-green-100/70' },
  { title: 'Tree Preservation Orders', status: 'Check Required', color: 'text-yellow-600', icon: AlertTriangle, statusColor: 'bg-yellow-100/70' },
  { title: 'Green Belt / AONB', status: 'Clear', color: 'text-green-600', icon: Check, statusColor: 'bg-green-100/70' },
  { title: 'Contaminated Land', status: 'Clear', color: 'text-green-600', icon: Check, statusColor: 'bg-green-100/70' },
  { title: 'Planning Constraints', status: 'Standard', color: 'text-blue-600', icon: Check, statusColor: 'bg-blue-100/70' },
];

const LocalLandSearch = () => {
  // Helper component for the status badge
  const StatusBadge = ({ status, colorClass }) => (
    <span
      className={`text-xs font-medium px-3 py-1 rounded-full ${colorClass}`}
    >
      {status}
    </span>
  );

  // Helper function to determine the icon based on the status
  const StatusIcon = ({ icon: Icon, color }) => (
    <Icon className={`w-5 h-5 mr-3 ${color}`} />
  );

  return (
    <div className="p-4 md:p-8 bg-gray-50/50 rounded-xl shadow-lg border border-gray-100">
      {/* --- Header Section --- */}
      <div className="flex items-start mb-6">
        {/* Lucide Home Icon with Gray/Slate theme */}
        <div className="p-3 mr-3 text-white rounded-lg bg-gray-500">
          <Home className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Local Land Search
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Planning constraints and development restrictions
          </p>
        </div>
      </div>

      {/* --- Constraints List --- */}
      <div className="space-y-3">
        {landSearchData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 border border-gray-200 rounded-lg transition duration-300 hover:shadow-sm bg-white"
          >
            <div className="flex items-center">
              {/* Display the correct icon (X, AlertTriangle, or Check) */}
              <StatusIcon icon={item.icon === Check ? Check : item.icon} color={item.color} />
              <p className="text-lg font-medium text-gray-700">
                {item.title}
              </p>
            </div>
            {/* Status Badge */}
            <StatusBadge status={item.status} colorClass={`text-sm ${item.color} ${item.statusColor}`} />
          </div>
        ))}
      </div>

      {/* --- Summary Section --- */}
      <div className="mt-8 p-4 rounded-xl bg-white">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          Summary
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          The area around Maple Avenue is classified as a standard residential zone in Richmond, with no significant legal or environmental restrictions recorded.
        </p>
        <p className="text-gray-600 leading-relaxed">
          This means typical home improvements (such as extensions, loft conversions, or solar panel installations) can be carried out subject to standard Richmond Council planning approval. Some TPOs exist in nearby streets — buyers planning garden work should confirm with Richmond Council before tree removal.
        </p>
      </div>

      {/* --- Expert Insight (Info Box) --- */}
      <div className="mt-6 p-4 flex items-start bg-purple-50 border-l-4 border-purple-500 rounded-r-md">
        {/* Lucide Zap Icon used for the Insight (Matching previous components) */}
        <Zap className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
        <div className="ml-3 italic">
          <span className="font-bold text-purple-800 text-sm">
            Expert Insight:
          </span>{' '}
          <span className="text-purple-700 text-sm">
            Local land constraints highlight any designations that could affect future development or renovation. For 42 Maple Avenue, no major restrictions were identified — meaning buyers can expect standard flexibility for property improvements.
          </span>
        </div>
      </div>
    </div>
  );
};

export default LocalLandSearch;