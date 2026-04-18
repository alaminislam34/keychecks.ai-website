"use client";

import React from "react";
import {
  CircleCheckBig,
  Clock4,
  FileText,
  Globe,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";
import Reports from "./components/reports/Reports";
import Banner from "./components/AboutPageBanner/Banner";
import OurMission from "./components/OurMission/OurMission";

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
function About() {
  const dataSources = [
    "HM Land Registry",
    "Environment Agency flood data",
    "Valuation Office Agency council tax data",
    "Ofsted school ratings",
    "Department for Transport commute and infrastructure datasets",
    "UK police and public safety data",
  ];

  return (
    <section className="pb-20">
      <Banner />
      <Reports />
      <OurMission />

      <div className="max-w-360 mx-auto w-[92%] lg:w-11/12 mt-14 space-y-10">
        <div className="rounded-2xl border border-primary/15 bg-white shadow-sm p-6 md:p-10">
          <h2 className="text-dark text-2xl md:text-3xl font-bold mb-4">
            Why We Built This
          </h2>
          <p className="text-gray-600 text-sm md:text-lg leading-relaxed">
            KeyChecks was built to reduce uncertainty in property buying. Too
            many buyers only discover critical issues late in the process,
            after money and momentum are already committed. We created KeyChecks
            to make key risks, costs, and decision points clear earlier so
            people can buy with confidence.
          </p>
        </div>

        <div className="rounded-2xl border border-primary/15 bg-primary/5 p-6 md:p-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="p-2.5 rounded-lg bg-primary text-white">
              <Globe size={20} />
            </span>
            <h3 className="text-dark text-xl md:text-2xl font-semibold">
              Data Sources We Use
            </h3>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {dataSources.map((source) => (
              <li
                key={source}
                className="flex items-start gap-2 bg-white border border-primary/10 rounded-xl p-3"
              >
                <CircleCheckBig className="text-primary mt-0.5" size={18} />
                <span className="text-dark text-sm md:text-base">{source}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
