import React from "react";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import {
  CircleCheckBig,
  Clock4,
  FileText,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";

export const features = [
  {
    title: "Price & Market Insight",
    des: "Recent sold prices, £/sqft, and a fair value band.",
    icon: <TrendingUp size={24} />,
  },
  {
    title: "Flood & Environmental",
    des: "Clear, simple explanations of flood zones and local constraints.",
    icon: <Shield size={24} />,
  },
  {
    title: "EPC & Energy",
    des: "Understanding the EPC rating, running costs and possible improvements.",
    icon: <Zap size={24} />,
  },
  {
    title: "Schools & Safety",
    des: "Local school ratings, area safety and neighbourhood feel.",
    icon: <CircleCheckBig size={24} />,
  },
  {
    title: "Broadband & Connectivity",
    des: "FTTP availability, speeds, coverage and commute options.",
    icon: <Clock4 size={24} />,
  },
  {
    title: "Offer Strategy & Solicitor Questions",
    des: "Expert guidance on what to ask the agent, how to negotiate, and what your solicitor should check later.",
    icon: <FileText size={24} />,
  },
];

function Features() {
  return (
    <section className="py-8">
      <div className="max-w-310 mx-auto w-[95%] lg:w-11/12 text-center space-y-6 flex flex-col items-center">
        <SectionTitle title={"Features"} color={"text-dark"} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 text-left p-6 rounded-2xl bg-primary/2 border border-primary/10 hover:shadow-xl"
            >
              <div className="flex items-center">
                <span className="p-4 rounded-xl text-white bg-primary flex items-center justify-center">
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
      </div>
    </section>
  );
}

export default Features;
