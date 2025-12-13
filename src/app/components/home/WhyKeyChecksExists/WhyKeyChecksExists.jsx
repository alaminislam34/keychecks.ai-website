import { Check, MoveRight, X } from "lucide-react";

export const keys = [
  {
    title: "Competitor Problems",
    titleColor: "text-[#7F1D1D]",
    desColor: "text-[#B91C3E]",
    list: [
      "Slow turnaround (3–5 days)",
      "Jargon-heavy",
      "Designed for solicitors, not normal buyers",
      "Only cover one topic",
      "Provide data but not guidance",
    ],
    icon: <X size={18} className="" />,
    bg: "bg-[#FEF2F2]",
  },
  {
    title: "What Buyers Actually Want",
    titleColor: "text-[#5B21B6]",
    desColor: "text-[#581C87]",
    list: [
      "Clear, friendly English",
      "One place for all checks",
      "Same-day clarity",
      "Real offer guidance",
      "Something simple, calm and trustworthy",
    ],
    icon: <MoveRight size={18} className="" />,
    bg: "bg-[#FAF5FF]",
  },
  {
    title: "What KeyChecks Delivers",
    titleColor: "text-[#14532D]",
    desColor: "text-[#15803D]",
    list: [
      "Expert-reviewed, handcrafted reports",
      "Same-day delivery",
      "Full property picture in one clean PDF",
      "Practical guidance for estate agents & solicitors",
      "Human explanations, not jargon",
    ],
    icon: <Check size={18} className="" />,
    bg: "bg-[#F0FDF4]",
  },
];

function WhyKeyChecksExists() {
  return (
    <section className="py-8">
      <div className="max-w-310 mx-auto w-[95%] lg:w-11/12 text-center space-y-6 flex flex-col items-center">
        <h1 className="text-dark text-2xl md:text-3xl font-bold py-12">
          Why KeyChecks Exists
        </h1>
        <div className="grid text-left grid-cols-1 md:grid-cols-3 pb-20 w-full gap-6">
          {keys.map((key, i) => (
            <div
              key={i}
              className={`${key.bg} p-5 md:p-6 rounded-xl space-y-6 w-full`}
            >
              <h1
                className={`${key.titleColor} tracking-wider text-xl md:text-2xl font-bold`}
              >
                {key.title}
              </h1>
              <ul className="flex flex-col gap-2 text-xs md:text-sm">
                {key.list.map((l, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-1 flex-row ${key.desColor}`}
                  >
                    <span> {key.icon}</span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyKeyChecksExists;
