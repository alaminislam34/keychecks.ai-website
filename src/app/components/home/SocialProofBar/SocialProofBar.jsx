import { FileCheck2, Clock3, Database } from "lucide-react";

const stats = [
  {
    icon: <FileCheck2 className="w-4 h-4" />,
    label: "2,000+ Reports Delivered",
  },
  {
    icon: <Clock3 className="w-4 h-4" />,
    label: "Same-Day Turnaround",
  },
  {
    icon: <Database className="w-4 h-4" />,
    label: "Based on Official UK Data",
  },
];

function SocialProofBar() {
  return (
    <section className="bg-[#F3F4F6] border-y border-primary/10">
      <div className="max-w-360 mx-auto w-[92%] lg:w-11/12 py-4">
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {stats.map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-center gap-2 text-sm md:text-base text-text"
            >
              <span className="text-primary">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SocialProofBar;
