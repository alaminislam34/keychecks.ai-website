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
  History,
  Info,
  MapPin,
} from "lucide-react";

const AdminReportEditor = ({ request, onClose, onSave }) => {
  const [reportData, setReportData] = useState({
    floodRisk: {
      summary: "Low Risk",
      surfaceWater: "Low",
      riversAndSea: "Very Low",
      reservoirs: "Low",
    },
    epc: { current: "C", potential: "B", score: 72, potentialScore: 85 },
    crime: {
      level: "Average",
      details: "12% lower than national average. Most common: Petty theft.",
    },
    schools: {
      primary: "3 Outstanding, 5 Good",
      secondary: "2 Outstanding",
      analysis: "Excellent catchment area for local primary schools.",
    },
    connectivity: {
      broadbandType: "Ultrafast",
      downloadSpeed: "1000 Mbps",
      uploadSpeed: "220 Mbps",
      mobileCoverage: "Excellent 5G (EE, O2, Vodafone)",
    },
    value: {
      estimate: "450000",
      rangeLow: "430000",
      rangeHigh: "470000",
      annualGrowth: "4.2",
    },
    planning: {
      recentApps: "2 minor extensions nearby",
      constraints: "None / Not in Conservation Area",
    },
    transport: {
      nearestStation: "Richmond Station (0.4 miles)",
      commuteTime: "25 mins to Central London",
    },
    tax: { band: "D", annualAmount: "2150" },
    legalInsight: {
      titleRegister: "",
      planAnalysis: "",
    },
  });

  const handleChange = (section, field, value) => {
    setReportData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleFinalize = () => {
    console.log("Finalizing Report:", reportData);
    // Add your API call logic here
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm">
      <div className="bg-white w-full max-w-6xl max-h-[95vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-primary text-white flex justify-between items-center shadow-lg">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <History className="opacity-80" /> Property Report Builder
            </h2>
            <p className="text-primary text-sm mt-1">
              Editing report for:{" "}
              <span className="font-semibold">
                {request?.address || "123 Exemplar St, London"}
              </span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-all"
          >
            <X size={28} />
          </button>
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto p-8 space-y-12 bg-gray-50/50">
          {/* 1. Flood Risk */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="flex items-center gap-2 text-lg font-bold text-blue-700 mb-6">
              <AlertTriangle size={20} /> 1. Flood Risk Assessment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { label: "Overall Summary", field: "summary" },
                { label: "Surface Water", field: "surfaceWater" },
                { label: "Rivers & Sea", field: "riversAndSea" },
                { label: "Reservoirs", field: "reservoirs" },
              ].map((item) => (
                <div key={item.field}>
                  <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                    {item.label}
                  </label>
                  <input
                    type="text"
                    value={reportData.floodRisk[item.field]}
                    onChange={(e) =>
                      handleChange("floodRisk", item.field, e.target.value)
                    }
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* 2. EPC & Council Tax */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="flex items-center gap-2 text-lg font-bold text-green-700 mb-6">
                <Zap size={20} /> 2. Energy Efficiency (EPC)
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                    Current Grade
                  </label>
                  <select
                    value={reportData.epc.current}
                    onChange={(e) =>
                      handleChange("epc", "current", e.target.value)
                    }
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl"
                  >
                    {["A", "B", "C", "D", "E", "F", "G"].map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                    Current Score
                  </label>
                  <input
                    type="number"
                    value={reportData.epc.score}
                    onChange={(e) =>
                      handleChange("epc", "score", e.target.value)
                    }
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl"
                  />
                </div>
              </div>
            </section>

            <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-700 mb-6">
                <Scale size={20} /> 3. Council Tax
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                    Tax Band
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Band D"
                    value={reportData.tax.band}
                    onChange={(e) =>
                      handleChange("tax", "band", e.target.value)
                    }
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                    Annual Amount (£)
                  </label>
                  <input
                    type="text"
                    value={reportData.tax.annualAmount}
                    onChange={(e) =>
                      handleChange("tax", "annualAmount", e.target.value)
                    }
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* 4. Connectivity & Infrastructure */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="flex items-center gap-2 text-lg font-bold text-cyan-700 mb-6">
              <Globe size={20} /> 4. Connectivity & Mobile
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                  Broadband Type
                </label>
                <input
                  type="text"
                  value={reportData.connectivity.broadbandType}
                  onChange={(e) =>
                    handleChange(
                      "connectivity",
                      "broadbandType",
                      e.target.value,
                    )
                  }
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                  Max Speed (Mbps)
                </label>
                <input
                  type="text"
                  value={reportData.connectivity.downloadSpeed}
                  onChange={(e) =>
                    handleChange(
                      "connectivity",
                      "downloadSpeed",
                      e.target.value,
                    )
                  }
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                  Mobile Signal
                </label>
                <input
                  type="text"
                  value={reportData.connectivity.mobileCoverage}
                  onChange={(e) =>
                    handleChange(
                      "connectivity",
                      "mobileCoverage",
                      e.target.value,
                    )
                  }
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl"
                />
              </div>
            </div>
          </section>

          {/* 5. Value Analysis & Market Trends */}
          <section className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="flex items-center gap-2 text-lg font-bold text-emerald-700 mb-6">
              <TrendingUp size={20} /> 5. Property Value Analysis
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                  Estimated Value (£)
                </label>
                <input
                  type="text"
                  value={reportData.value.estimate}
                  onChange={(e) =>
                    handleChange("value", "estimate", e.target.value)
                  }
                  className="w-full p-3 border-emerald-100 bg-emerald-50/30 rounded-xl font-bold text-emerald-800"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                  Growth YoY (%)
                </label>
                <input
                  type="text"
                  value={reportData.value.annualGrowth}
                  onChange={(e) =>
                    handleChange("value", "annualGrowth", e.target.value)
                  }
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                  Range Low (£)
                </label>
                <input
                  type="text"
                  value={reportData.value.rangeLow}
                  onChange={(e) =>
                    handleChange("value", "rangeLow", e.target.value)
                  }
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl"
                />
              </div>
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase mb-2">
                  Range High (£)
                </label>
                <input
                  type="text"
                  value={reportData.value.rangeHigh}
                  onChange={(e) =>
                    handleChange("value", "rangeHigh", e.target.value)
                  }
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl"
                />
              </div>
            </div>
          </section>

          {/* 6. Schools & Crime */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="bg-white p-6 rounded-2xl border border-orange-100">
              <h3 className="flex items-center gap-2 text-lg font-bold text-orange-600 mb-4">
                <GraduationCap size={20} /> 6. Education
              </h3>
              <textarea
                rows="4"
                value={reportData.schools.analysis}
                onChange={(e) =>
                  handleChange("schools", "analysis", e.target.value)
                }
                className="w-full p-4 bg-orange-50/20 border border-orange-100 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
                placeholder="Enter catchment area analysis..."
              />
            </section>
            <section className="bg-white p-6 rounded-2xl border border-red-100">
              <h3 className="flex items-center gap-2 text-lg font-bold text-red-600 mb-4">
                <ShieldAlert size={20} /> 7. Safety & Crime
              </h3>
              <textarea
                rows="4"
                value={reportData.crime.details}
                onChange={(e) =>
                  handleChange("crime", "details", e.target.value)
                }
                className="w-full p-4 bg-red-50/20 border border-red-100 rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
                placeholder="Enter local crime statistics..."
              />
            </section>
          </div>

          {/* 8. Transport & Planning */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="bg-white p-6 rounded-2xl border border-indigo-100">
              <h3 className="flex items-center gap-2 text-lg font-bold text-indigo-700 mb-4">
                <TrainFront size={20} /> 8. Transport
              </h3>
              <textarea
                rows="3"
                value={reportData.transport.nearestStation}
                onChange={(e) =>
                  handleChange("transport", "nearestStation", e.target.value)
                }
                className="w-full p-4 bg-indigo-50/20 border border-indigo-100 rounded-xl outline-none"
                placeholder="Stations and commute times..."
              />
            </section>
            <section className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-700 mb-4">
                <MapPin size={20} /> 9. Planning History
              </h3>
              <textarea
                rows="3"
                value={reportData.planning.recentApps}
                onChange={(e) =>
                  handleChange("planning", "recentApps", e.target.value)
                }
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none"
                placeholder="Recent local planning applications..."
              />
            </section>
          </div>

          {/* 10. Legal Insight (PAID) */}
          <div className="p-8 bg-linear-to-br from-primary/1 to-indigo-50 rounded-3xl border-2 border-dashed border-primary relative">
            <div className="absolute -top-3 right-8 bg-primary text-white text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-widest shadow-lg">
              Premium Legal Section
            </div>
            <h3 className="flex items-center gap-2 text-xl font-bold text-primary mb-6">
              <Scale size={24} /> 10. Official Title & Plan Analysis
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-black text-primary uppercase mb-2">
                  Title Register Review
                </label>
                <textarea
                  rows="5"
                  value={reportData.legalInsight.titleRegister}
                  onChange={(e) =>
                    handleChange(
                      "legalInsight",
                      "titleRegister",
                      e.target.value,
                    )
                  }
                  className="w-full p-4 border border-primary rounded-2xl focus:ring-4 focus:ring-primary outline-none shadow-inner"
                  placeholder="Professional commentary on ownership, charges, and easements..."
                />
              </div>
              <div>
                <label className="block text-xs font-black text-primary uppercase mb-2">
                  Boundary & Plan Analysis
                </label>
                <textarea
                  rows="3"
                  value={reportData.legalInsight.planAnalysis}
                  onChange={(e) =>
                    handleChange("legalInsight", "planAnalysis", e.target.value)
                  }
                  className="w-full p-4 border border-primary rounded-2xl focus:ring-4 focus:ring-primary outline-none shadow-inner"
                  placeholder="Detailed observations regarding the Title Plan..."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-white border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-start gap-3 max-w-md">
            <div className="p-2 bg-amber-100 text-amber-700 rounded-lg">
              <Info size={20} />
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>Admin Tip:</strong> Data saved here will be immediately
              available to the user in their personal dashboard. Double-check
              price estimates before finalizing.
            </p>
          </div>

          <div className="flex gap-4 w-full md:w-auto">
            <button
              onClick={onSave}
              className="flex-1 md:flex-none px-3 py-2 flex items-center justify-center gap-2 bg-white border-2 border-gray-200 rounded-2xl font-bold text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all"
            >
              <Save size={20} /> Save
            </button>
            <button
              onClick={handleFinalize}
              className="flex-1 md:flex-none px-3 py-2 flex items-center justify-center gap-2 bg-primary text-white rounded-2xl font-black hover:bg-primary/80 shadow-xl shadow-primary hover:shadow-primary transform hover:-translate-y-1 transition-all"
            >
              <Send size={20} /> Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReportEditor;
