import React from "react";
import { Award, Clock4, FileCheck, Shield, Sparkles, Zap } from "lucide-react";
import SectionTitle from "@/app/components/ui/SectionTitle/SectionTitle";

export const features = [
  {
    title: "Handcrafted",
    des: "Every report is carefully prepared by a human expert.",
    icon: <FileCheck size={26} />,
  },
  {
    title: "Expert-reviewed",
    des: "Reviewed by property professionals who understand the market.",
    icon: <Award size={26} />,
  },
  {
    title: "Written in simple English",
    des: "No jargon, no confusion — just clear, actionable insights.",
    icon: <Sparkles size={26} />,
  },
  {
    title: "Based on official UK data",
    des: "Using trusted sources like Land Registry, EPC, and local authorities.",
    icon: <Shield size={26} />,
  },
  {
    title: "Delivered the same day",
    des: "Get your report today, not in 3-5 business days.",
    icon: <Clock4 size={26} />,
  },
];

function Reports() {
  return (
    <section className="py-12 pb-24">
      <div className="max-w-310 mx-auto w-[92%] lg:w-11/12 text-center space-y-6 flex flex-col items-center">
        <div className="pb-6">
          <SectionTitle title={"Every report is:"} color={"text-dark"} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4 text-left px-6 py-9 rounded-2xl bg-primary/2 border border-primary/10 hover:shadow-xl duration-300"
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
      </div>
    </section>
  );
}

export default Reports;
