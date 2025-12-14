"use client";

import React from "react";
import {
  CircleCheckBig,
  Clock4,
  FileText,
  RefreshCw,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle/SectionTitle";

export const features = [
  {
    title: "Price & Market Insight",
    des: "Recent sold prices, £/sqft, and a fair value band.",
    icon: <TrendingUp size={26} />,
  },
  {
    title: "Flood & Environmental",
    des: "Clear, simple explanations of flood zones and local constraints.",
    icon: <Shield size={26} />,
  },
  {
    title: "EPC & Energy",
    des: "Understanding the EPC rating, running costs and possible improvements.",
    icon: <Zap size={26} />,
  },
  {
    title: "Schools & Safety",
    des: "Local school ratings, area safety and neighbourhood feel.",
    icon: <CircleCheckBig size={26} />,
  },
  {
    title: "Broadband & Connectivity",
    des: "FTTP availability, speeds, coverage and commute options.",
    icon: <Clock4 size={26} />,
  },
  {
    title: "Offer Strategy & Solicitor Questions",
    des: "Expert guidance on what to ask the agent, how to negotiate, and what your solicitor should check later.",
    icon: <FileText size={26} />,
  },
];

function OurPromise() {
  return (
    <section className="py-8 pb-24">
      <div className="max-w-310 mx-auto w-[95%] lg:w-11/12 text-center space-y-6 flex flex-col items-center">
        <div className="pb-6 space-y-4">
          <h1
            className={`text-dark text-3xl md:text-4xl lg:text-5xl font-bold py-6`}
          >
            Our Promise
          </h1>
          <p className="text-primary text-xl md:text-2xl">
            Clear. Honest. Same-day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 text-left p-6 rounded-2xl bg-primary/2 border border-primary/10 hover:shadow-xl duration-300"
            >
              <div className="flex items-center">
                <span className="p-3 rounded-xl text-white bg-linear-to-b from-primary to-primary/80 flex items-center justify-center">
                  {f.icon}
                </span>
              </div>
              <h3 className="text-dark text-lg md:text-xl font-bold">
                {f.title}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg">
                {f.des}
              </p>
            </div>
          ))}
        </div>
        <br />
        <div className="flex flex-col gap-4 max-w-3xl mx-auto text-left p-8 md:p-12 rounded-2xl bg-green-50 border-2 border-green-200">
          <div className="flex items-start gap-4">
            <div className="flex items-center">
              <span className="p-3 rounded-xl text-white bg-linear-to-b from-primary to-primary/80 flex items-center justify-center">
                <RefreshCw size={24} />
              </span>
            </div>
            <div>
              <h3 className="text-dark text-xl md:text-2xl font-bold">
                Goodwill Guarantee
              </h3>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg">
                If your report is missing essential information or feels
                unclear, we'll fix it or refund you within 24 hours.
              </p>
            </div>
          </div>
          <p className="text-gray-400 text-sm md:text-base">
            Your confidence matters to us. If something doesn't feel right,
            we'll make it right — no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurPromise;
