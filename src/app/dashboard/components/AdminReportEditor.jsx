import React, { useState } from "react";
import {
  X,
  Send,
  Save,
  AlertTriangle,
  Zap,
  ShieldAlert,
  GraduationCap,
  Globe,
  TrendingUp,
  TrainFront,
  Scale,
} from "lucide-react";

const AdminReportEditor = ({ request, onClose }) => {
  // Each state field corresponds to a section in your uploaded report image
  const [reportData, setReportData] = useState({
    // 1. Flood Risk Section
    floodRisk: {
      level: "Low Risk",
      surfaceWater: "Low",
      rivers: "Very Low",
      reservoirs: "Low",
    },

    // 2. EPC Section
    epc: { current: "C", potential: "B", score: 72, potentialScore: 85 },

    // 3. Crime Section
    crime: {
      level: "Average",
      stats: "12% lower than national average",
      trend: "Decreasing",
    },

    // 4. Schools Section
    schools: {
      primary: "3 Outstanding, 5 Good",
      secondary: "2 Outstanding",
      analysis: "Excellent catchment area for local primary schools.",
    },

    // 5. Connectivity Section
    connectivity: {
      broadband: "Ultrafast",
      speed: "1000 Mbps",
      mobile: "Excellent 5G",
    },

    // 6. Value Analysis
    value: {
      estimate: "£450,000",
      range: "£430k - £470k",
      growth: "+4.2% YoY",
    },

    // 7. Transport Section
    transport: {
      nearestStation: "Richmond Station (0.4 miles)",
      commuteTime: "25 mins to Central London",
    },

    // 8. Legal Insight (The £19 Add-on)
    legalInsight: {
      titleRegister: "",
      planAnalysis: "",
      restrictedCovenants: "",
    },
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1a1a2e]/60 backdrop-blur-md">
      <div className="bg-white w-full max-w-5xl max-h-[95vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-[#7C3AED] text-white flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Generate Property Report</h2>
            <p className="text-purple-100 opacity-90">
              Reviewing: {request?.address || "Property Address"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X size={28} />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar">
          {/* Section: Flood Risk */}
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-lg font-bold text-blue-700">
              <AlertTriangle size={20} /> 1. Flood Risk Assessment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {["Level", "Surface Water", "Rivers", "Reservoirs"].map(
                (field) => (
                  <div key={field}>
                    <label className="text-xs font-bold text-gray-400 uppercase">
                      {field}
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="e.g. Low"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section: EPC & Energy */}
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-lg font-bold text-green-700">
              <Zap size={20} /> 2. Energy Efficiency (EPC)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase">
                  Current Rating
                </label>
                <select className="w-full p-2 border rounded-lg">
                  {["A", "B", "C", "D", "E", "F"].map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase">
                  Potential Rating
                </label>
                <select className="w-full p-2 border rounded-lg">
                  {["A", "B", "C", "D", "E", "F"].map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase">
                  Current Score
                </label>
                <input
                  type="number"
                  className="w-full p-2 border rounded-lg"
                  placeholder="72"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase">
                  Potential Score
                </label>
                <input
                  type="number"
                  className="w-full p-2 border rounded-lg"
                  placeholder="85"
                />
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section: Crime & Schools */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-bold text-red-600">
                <ShieldAlert size={20} /> 3. Local Crime Stats
              </h3>
              <textarea
                rows="3"
                className="w-full p-3 border rounded-lg"
                placeholder="Enter crime trend analysis..."
              ></textarea>
            </div>
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-bold text-orange-600">
                <GraduationCap size={20} /> 4. Schools & Education
              </h3>
              <textarea
                rows="3"
                className="w-full p-3 border rounded-lg"
                placeholder="List Ofsted ratings and proximity..."
              ></textarea>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section: Connectivity & Value */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-bold text-cyan-600">
                <Globe size={20} /> 5. Connectivity
              </h3>
              <input
                type="text"
                className="w-full p-2 border rounded-lg mb-2"
                placeholder="Broadband (e.g. Ultrafast Fiber)"
              />
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Mobile Coverage"
              />
            </div>
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-bold text-emerald-600">
                <TrendingUp size={20} /> 6. Value Analysis
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Est. Price"
                />
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg"
                  placeholder="Growth %"
                />
              </div>
              <input
                type="text"
                className="w-full p-2 border rounded-lg"
                placeholder="Price Range (e.g. £400k - £450k)"
              />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Section: Transport */}
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-lg font-bold text-indigo-600">
              <TrainFront size={20} /> 7. Transport & Commute
            </h3>
            <textarea
              rows="2"
              className="w-full p-3 border rounded-lg"
              placeholder="Nearest stations and travel times to major hubs..."
            ></textarea>
          </div>

          {/* IMPORTANT: Legal Insight Section */}
          <div className="p-6 bg-purple-50 rounded-2xl border-2 border-dashed border-purple-200 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="flex items-center gap-2 text-lg font-bold text-purple-800">
                <Scale size={20} /> 8. Legal Insight (Title & Plan)
              </h3>
              <span className="bg-purple-600 text-white text-[10px] px-2 py-1 rounded font-bold uppercase">
                Paid Add-on
              </span>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-purple-400 uppercase">
                  Title Register Analysis
                </label>
                <textarea
                  rows="4"
                  className="w-full p-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
                  placeholder="Detailed professional review of charges, easements, and ownership..."
                ></textarea>
              </div>
              <div>
                <label className="text-xs font-bold text-purple-400 uppercase">
                  Title Plan Review
                </label>
                <textarea
                  rows="2"
                  className="w-full p-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
                  placeholder="Boundary details and map observations..."
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-gray-50 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            <strong>Tip:</strong> Once sent, the user will receive a
            notification to view their dashboard.
          </p>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-6 py-3 flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition-all">
              <Save size={18} /> Save Draft
            </button>
            <button className="flex-1 md:flex-none px-8 py-3 flex items-center justify-center gap-2 bg-[#7C3AED] text-white rounded-xl font-bold hover:bg-[#6D28D9] shadow-lg shadow-purple-200 transition-all">
              <Send size={18} /> Finalize & Send to User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReportEditor;
