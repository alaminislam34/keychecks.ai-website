import React from "react";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import {
  BadgeCheck,
  Gauge,
  GraduationCap,
  Leaf,
  PoundSterling,
  ReceiptText,
  Signal,
  Sparkles,
} from "lucide-react";

export const features = [
  {
    title: "Price & Market",
    des: "Recent sold prices, local trend signals, and a clear value range.",
    icon: <PoundSterling size={24} />,
    status: "Included",
  },
  {
    title: "Flood & Environmental",
    des: "Flood exposure and environmental context explained in plain language.",
    icon: <Leaf size={24} />,
    status: "Included",
  },
  {
    title: "EPC & Energy",
    des: "EPC rating, efficiency outlook, and potential improvement opportunities.",
    icon: <Gauge size={24} />,
    status: "Included",
  },
  {
    title: "Schools & Safety",
    des: "Nearby school quality and local safety context for better decisions.",
    icon: <GraduationCap size={24} />,
    status: "Included",
  },
  {
    title: "Broadband",
    des: "Coverage, expected speed bands, and reliability indicators.",
    icon: <Signal size={24} />,
    status: "Included",
  },
  {
    title: "Offer Strategy",
    des: "Practical negotiation guidance and suggested offer positioning.",
    icon: <Sparkles size={24} />,
    status: "Included",
  },
  {
    title: "Land Registry / Title",
    des: "Title and ownership reference checks for additional due diligence.",
    icon: <ReceiptText size={24} />,
    status: "Add-On",
  },
];

function Features() {
  return (
    <section className="py-8 pb-24">
      <div className="max-w-360 mx-auto w-[92%] lg:w-11/12 text-center space-y-6 flex flex-col items-center">
        <div className="pb-6">
          <SectionTitle title={"Everything in One Report"} color={"text-dark"} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 text-left p-6 rounded-2xl bg-linear-to-br from-white to-[#FAF6FF] border border-[#f3ebff] hover:shadow-lg duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="p-3 rounded-xl text-white bg-linear-to-b from-primary to-primary/80 flex items-center justify-center">
                  {f.icon}
                </span>
                <span
                  className={`text-xs font-semibold rounded-full py-1 px-3 ${
                    f.status === "Included"
                      ? "bg-accent/10 text-accent"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <span className="inline-flex items-center gap-1">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    {f.status}
                  </span>
                </span>
              </div>
              <h3 className="text-dark text-lg md:text-xl font-semibold">
                {f.title}
              </h3>
              <p className="text-gray text-sm md:text-base">{f.des}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
