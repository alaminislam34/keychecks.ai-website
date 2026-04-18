import {
  FileSearch,
  MapPinned,
  ShieldCheck,
  SendHorizonal,
} from "lucide-react";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";

export const workFlow = [
  {
    step: "01",
    title: "Enter Address",
    description: "Share the property address to start your SmartReport.",
    icon: <MapPinned className="w-5 h-5" />,
  },
  {
    step: "02",
    title: "We Gather Data",
    description: "We collect relevant official UK property and local data.",
    icon: <FileSearch className="w-5 h-5" />,
  },
  {
    step: "03",
    title: "Expert Review",
    description: "A KeyChecks expert reviews findings and adds clear guidance.",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    step: "04",
    title: "Report Delivered",
    description: "Your complete report is delivered with practical next steps.",
    icon: <SendHorizonal className="w-5 h-5" />,
  },
];

function HowItWork() {
  return (
    <section
      id="how-it-works"
      className="bg-primary py-14 md:py-16 mb-12 text-white"
    >
      <div className="max-w-360 mx-auto w-[92%] lg:w-11/12 text-center space-y-6 flex flex-col items-center">
        <div className="pb-8 md:pb-10">
          <SectionTitle title={"How It Works"} color={"text-white"} />
        </div>
        <div className="w-full">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 text-left">
            {workFlow.map((w) => (
              <li
                key={w.step}
                className="rounded-2xl border border-white/15 bg-white/5 p-5 md:p-6 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs tracking-widest font-semibold text-white/70">
                    STEP {w.step}
                  </span>
                  <span className="w-9 h-9 rounded-lg bg-white text-primary flex items-center justify-center">
                    {w.icon}
                  </span>
                </div>
                <h3 className="text-xl text-white">{w.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  {w.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HowItWork;
