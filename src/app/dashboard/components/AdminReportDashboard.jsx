"use client";
import React, { useState } from "react";
import {
  ClipboardList,
  Plus,
  Search,
  Send,
  ShieldCheck,
  X,
  AlertTriangle,
  Zap,
  ShieldAlert,
  GraduationCap,
  Globe,
  TrendingUp,
  TrainFront,
  Save,
  CheckCircle,
  Mail,
  MapPin,
} from "lucide-react";

// --- Main Dashboard Component ---
const AdminReportDashboard = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [requests, setRequests] = useState([
    {
      id: "REQ-001",
      userName: "John Smith",
      email: "john@example.com",
      address: "42 Maple Avenue, Richmond, TW9 4BH",
      date: "2023-10-24",
      status: "Pending",
      notes: "Interested in the garden boundaries.",
    },
    {
      id: "REQ-002",
      userName: "Sarah Jenkins",
      email: "sarah.j@outlook.com",
      address: "15 Victoria Rd, London, SW1",
      date: "2023-10-23",
      status: "Processing",
      notes: "Need urgent school data.",
    },
  ]);

  const handleOpenReportEditor = (request) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const handleUpdateStatus = (id, newStatus) => {
    setRequests((prev) =>
      prev.map((req) => (req.id === id ? { ...req, status: newStatus } : req))
    );
  };

  const filteredRequests = requests.filter(
    (req) =>
      req.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.userName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-[80vh] p-6 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex flex-col gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
              <ClipboardList className="text-purple-600" size={24} />
              <span className="truncate">Report Management</span>
            </h1>
            <p className="text-gray-500 text-xs md:text-sm">
              Review requests and generate expert reports
            </p>
          </div>

          <div className="relative w-full">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by name or address..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 bg-white outline-none w-full shadow-sm text-sm"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="md:hidden divide-y divide-gray-100">
            {filteredRequests.map((req) => (
              <div key={req.id} className="p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900">{req.userName}</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Mail size={12} /> {req.email}
                    </div>
                  </div>
                  <StatusBadge status={req.status} />
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <MapPin size={14} className="shrink-0" />
                  <span className="truncate">{req.address}</span>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-gray-400">{req.date}</span>
                  <button
                    onClick={() => handleOpenReportEditor(req)}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-1"
                  >
                    <Plus size={16} /> Create
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Address
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredRequests.map((req) => (
                  <tr
                    key={req.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">
                        {req.userName}
                      </div>
                      <div className="text-xs text-gray-500">{req.email}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                      {req.address}
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={req.status} />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleOpenReportEditor(req)}
                        className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition-all"
                      >
                        <Plus size={16} /> Create Report
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ReportEditorModal
          request={selectedRequest}
          onClose={() => setIsModalOpen(false)}
          onSuccess={(id) => handleUpdateStatus(id, "Completed")}
        />
      )}
    </div>
  );
};

// --- Responsive Status Badge ---
const StatusBadge = ({ status }) => {
  const styles = {
    Pending: "bg-amber-50 text-amber-700 border-amber-100",
    Processing: "bg-blue-50 text-blue-700 border-blue-100",
    Completed: "bg-emerald-50 text-emerald-700 border-emerald-100",
  };
  return (
    <span
      className={`px-2.5 py-1 rounded-full text-[10px] md:text-xs font-bold border ${styles[status]}`}
    >
      {status}
    </span>
  );
};

// --- Responsive Modal ---
const ReportEditorModal = ({ request, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    floodLevel: "Low",
    epcCurrent: "C",
    epcPotential: "B",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-4xl h-[90vh] md:h-auto md:max-h-[90vh] rounded-t-3xl md:rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all">
        {/* Modal Header */}
        <div className="p-4 md:p-6 bg-purple-600 text-white flex justify-between items-center shrink-0">
          <div className="max-w-[80%]">
            <h2 className="text-lg font-bold flex items-center gap-2 truncate">
              <CheckCircle size={20} className="shrink-0" /> Edit Report
            </h2>
            <p className="text-purple-100 text-[10px] md:text-sm truncate opacity-90">
              {request.address}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <form
          id="reportForm"
          className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 md:space-y-8 "
        >
          {/* Concerns Section */}
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              User Concerns
            </label>
            <p className="text-sm text-gray-700 mt-1 italic">
              "{request.notes || "No specific notes"}"
            </p>
          </div>

          {/* Grid Sections: 1 column on mobile, 2 columns on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Flood Risk */}
            <div className="space-y-3 bg-white p-4 rounded-xl shadow-sm">
              <h3 className="flex items-center gap-2 text-md font-bold text-blue-700">
                <AlertTriangle size={18} /> Flood Risk
              </h3>
              <div className="flex flex-col gap-2">
                <select
                  name="floodLevel"
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Very Low</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
                <input
                  name="surfaceWater"
                  placeholder="Surface water notes"
                  onChange={handleInputChange}
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl text-sm"
                />
              </div>
            </div>

            {/* EPC */}
            <div className="space-y-3 bg-white p-4 rounded-xl shadow-sm">
              <h3 className="flex items-center gap-2 text-md font-bold text-emerald-700">
                <Zap size={18} /> EPC Ratings
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase ml-1">
                    Current
                  </span>
                  <select
                    name="epcCurrent"
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl text-sm"
                  >
                    {["A", "B", "C", "D", "E"].map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase ml-1">
                    Potential
                  </span>
                  <select
                    name="epcPotential"
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl text-sm"
                  >
                    {["A", "B", "C", "D", "E"].map((v) => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Crime */}
            <div className="space-y-3 bg-white p-4 rounded-xl shadow-sm">
              <h3 className="flex items-center gap-2 text-md font-bold text-red-600">
                <ShieldAlert size={18} /> Crime Stats
              </h3>
              <textarea
                name="crimeStats"
                rows="3"
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Analyze crime trends..."
              ></textarea>
            </div>

            {/* Schools */}
            <div className="space-y-3 bg-white p-4 rounded-xl shadow-sm">
              <h3 className="flex items-center gap-2 text-md font-bold text-orange-600">
                <GraduationCap size={18} /> Schools
              </h3>
              <textarea
                name="schoolAnalysis"
                rows="3"
                onChange={handleInputChange}
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded-xl text-sm outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Ofsted ratings..."
              ></textarea>
            </div>
          </div>

          {/* Premium Legal Section */}
          <div className="p-5 bg-purple-50 rounded-2xl border-2 border-dashed border-purple-200 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="flex items-center gap-2 text-md font-bold text-purple-800">
                <ShieldCheck size={20} /> Legal Insights
              </h3>
              <span className="bg-purple-600 text-white text-[9px] px-2 py-1 rounded font-bold uppercase shrink-0">
                Premium
              </span>
            </div>
            <textarea
              name="legalTitleReview"
              rows="4"
              onChange={handleInputChange}
              className="w-full p-3 bg-white border border-purple-100 rounded-xl text-sm focus:ring-2 focus:ring-purple-500 outline-none shadow-inner"
              placeholder="Detailed legal analysis..."
            ></textarea>
          </div>
          <div className="bg-white flex flex-col md:flex-row gap-3">
            <button
              type="button"
              onClick={onClose}
              className="w-full md:w-auto px-6 py-3 rounded-xl font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 order-2 md:order-1 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="reportForm"
              onClick={(e) => {
                e.preventDefault();
                onSuccess(request.id);
                onClose();
              }}
              className="w-full md:flex-1 py-3 bg-purple-600 text-white rounded-xl font-bold shadow-lg shadow-purple-200 flex items-center justify-center gap-2 order-1 md:order-2 active:scale-95 transition-all"
            >
              <Send size={18} /> Finalize & Send
            </button>
          </div>
        </form>

        {/* Modal Footer - Fixed at bottom */}
      </div>
    </div>
  );
};

export default AdminReportDashboard;
