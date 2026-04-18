import { Clock4, ShieldCheck, TriangleAlert } from "lucide-react";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";

const cards = [
  {
    title: "The Old Way",
    icon: <Clock4 className="w-5 h-5" />,
    tone: "bg-[#FEF2F2] border-[#FECACA] text-[#7F1D1D]",
    points: [
      "Multiple fragmented checks across different sites",
      "Slow turnaround and unclear timelines",
      "Hard-to-read legal language for buyers",
    ],
  },
  {
    title: "The KeyChecks Way",
    icon: <ShieldCheck className="w-5 h-5" />,
    tone: "bg-[#F0FDF4] border-[#BBF7D0] text-[#14532D]",
    points: [
      "One SmartReport for all core property checks",
      "Same-day expert-reviewed clarity",
      "Straightforward guidance you can act on quickly",
    ],
  },
  {
    title: "The Cost of Waiting",
    icon: <TriangleAlert className="w-5 h-5" />,
    tone: "bg-[#FFF7ED] border-[#FED7AA] text-[#7C2D12]",
    points: [
      "Offers made with incomplete information",
      "Unexpected risks discovered too late",
      "Wasted time, stress, and potential deal fall-throughs",
    ],
  },
];

function PropertyBuyingProblem() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-360 mx-auto w-[92%] lg:w-11/12">
        <div className="text-center pb-10 md:pb-12">
          <SectionTitle
            title={"The Problem with Buying Property Today"}
            color={"text-dark"}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <article
              key={card.title}
              className={`rounded-2xl border p-6 md:p-7 shadow-sm ${card.tone}`}
            >
              <div className="flex items-center gap-2 mb-5">
                <span>{card.icon}</span>
                <h3 className="text-xl md:text-2xl">{card.title}</h3>
              </div>

              <ul className="space-y-3 text-sm md:text-base leading-relaxed">
                {card.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PropertyBuyingProblem;
