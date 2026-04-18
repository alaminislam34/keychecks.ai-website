import React from "react";
import {
  User,
  Mail,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  CircleCheckBig,
} from "lucide-react";
import PageTitle from "../components/PageTitle/PageTitle";

const CheckoutSection = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12 px-4 font-sans text-[#2D2D44]">
      <PageTitle
        title={"Almost There!"}
        subTitle={
          "Just a few details and your expert report will be on its way"
        }
      />

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Left Column: Property Details Form */}
        <div className="md:col-span-7 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-xl md:text-2xl font-semibold mb-8">
            Property Details
          </h2>

          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="flex items-center text-dark gap-2 font-semibold mb-2">
                <User size={18} className="text-primary" /> Your Name
              </label>
              <input
                type="text"
                placeholder="John Smith"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none placeholder-gray-400"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="flex items-center text-dark gap-2 font-semibold mb-2">
                <Mail size={18} className="text-primary" /> Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none placeholder-gray-400"
              />
              <p className="text-xs text-gray-400 mt-2 ml-1">
                Your report will be delivered to this email
              </p>
            </div>

            {/* Address Input */}
            <div>
              <label className="flex items-center text-dark gap-2 font-semibold mb-2">
                <MapPin size={18} className="text-primary" /> Property Address
              </label>
              <input
                type="text"
                placeholder="42 Maple Avenue, Richmond, TW9 4BH"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none placeholder-gray-400"
              />
              <p className="text-xs text-gray-400 mt-2 ml-1">
                Full address including postcode
              </p>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="text-sm font-semibold mb-2 block">
                Additional Notes (Optional)
              </label>
              <textarea
                rows="4"
                placeholder="Any specific questions or areas of concern?"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button className="w-full bg-primary hover:bg-primary text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-purple-200 text-lg">
                Proceed to Payment - £19
              </button>
              <p className="text-center text-xs text-gray mt-4">
                Secure payment powered by Stripe
              </p>
            </div>
          </form>
        </div>

        {/* Right Column: Order Summary & Features */}
        <div className="md:col-span-5 space-y-6">
          {/* Purple Order Summary Card */}
          <div className="bg-primary text-white rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

            <div className="bg-linear-to-r from-white/10 to-white/10 rounded-xl p-5 mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">Legal Insight Add-On</h3>
                  <p className="text-sm text-purple-100 mt-1 mb-2">
                    Expert review of Title Register & Plan
                  </p>
                </div>
                <span className="text-2xl font-bold">£19</span>
              </div>
              <div className="border-t border-white/20 pt-4 flex justify-between items-center">
                <span className="text-xl font-semibold text-purple-100">
                  Total
                </span>
                <span className="text-3xl font-bold">£19</span>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle2 size={20} className="text-purple-200" /> Same-day
                delivery
              </li>
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle2 size={20} className="text-purple-200" />{" "}
                Expert-reviewed by property professionals
              </li>
              <li className="flex items-center gap-3 text-sm">
                <CheckCircle2 size={20} className="text-purple-200" /> 100%
                satisfaction guarantee
              </li>
            </ul>
          </div>

          {/* "What's Included" Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-500/5">
            <h3 className="text-xl font-bold mb-6">What's Included?</h3>
            <ul className="space-y-4">
              {[
                "Flood risk from all sources",
                "Energy efficiency (EPC) rating",
                "Local crime statistics",
                "Schools & Ofsted ratings",
                "Broadband speeds & connectivity",
                "Property value analysis",
                "Transport & commute info",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-sm text-dark"
                >
                  <CircleCheckBig
                    size={18}
                    className="text-green-500 shrink-0"
                  />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Money-Back Guarantee Card */}
          <div className="bg-green-50 border border-green-300 rounded-2xl p-6">
            <div className="flex flex-col items-start gap-2">
              <div className="flex flex-row gap-2 items-center">
                <CircleCheckBig className="text-green-500 shrink-0" size={24} />{" "}
                <h4 className="font-bold text-dark">
                  100% Money-Back Guarantee
                </h4>
              </div>
              <div>
                <p className="text-sm text-dark leading-relaxed">
                  If you're not completely satisfied with your report, we'll
                  provide a full refund. No questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSection;
