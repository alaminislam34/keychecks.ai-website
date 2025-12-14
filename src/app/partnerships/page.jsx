"use client";

import { Building2, Check } from "lucide-react";

export const partners = [
  {
    icon: <Building2 size={32} />,
    title: "For Estate Agents",
    des: "Give buyers confidence, reduce fall-throughs and speed up decisions. Optional white-label reports available.",
    list: [
      "Reduce fall-throughs with informed buyers",
      "Speed up decision-making process",
      "Add value to your service",
      "White-label options available",
    ],
  },
  {
    icon: <Building2 size={32} />,
    title: "For Mortgage Brokers",
    des: "Help clients understand properties sooner, not later. Improve conversion and reduce surprises during conveyancing.",
    list: [
      "Help clients make confident decisions",
      "Reduce conveyancing surprises",
      "Improve conversion rates",
      "Add value to your consultation",
    ],
  },
  {
    icon: <Building2 size={32} />,
    title: "For Investors & Sourcers",
    des: "Use KeyChecks as your fast analysis tool for BRRR, rentals and flips. Bulk credit options available.",
    list: [
      "Fast property analysis",
      "Bulk credit discounts",
      "Priority delivery",
      "Investor-focused insights",
    ],
  },
];

function Partnerships() {
  return (
    <section>
      <div className="min-h-[80vh] max-w-310 mx-auto w-[95%] lg:w-11/12 py-24">
        <div className="pb-6 md:pb-8 space-y-4 md:space-y-6 text-center">
          <h1
            className={`text-dark text-3xl md:text-4xl lg:text-5xl font-bold`}
          >
            Partner With KeyChecks
          </h1>
          <p className="text-gray text-xl md:text-2xl">
            Trusted by estate agents, brokers and investors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((p, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 text-left p-6 rounded-2xl bg-primary/2 border border-primary/10 hover:shadow-xl duration-300"
            >
              <div className="flex items-center">
                <span className="p-4 rounded-xl text-white bg-linear-to-b from-primary to-primary/80 flex items-center justify-center">
                  {p.icon}
                </span>
              </div>
              <h3 className="text-dark text-xl md:text-2xl font-bold">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base">{p.des}</p>
              <ul className="flex flex-col gap-2">
                {p.list.map((l, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-1.5 text-xs md:text-sm text-dark"
                  >
                    <span>
                      <Check className="text-primary" />
                    </span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <section className="bg-linear-to-br from-dark to-primary max-w-3xl mx-auto my-12 py-8 px-14 rounded-2xl">
          <div className="text-center space-y-6 flex flex-col items-center py-6">
            <div className="pb-6 md:pb-8 space-y-4 md:space-y-6 text-center">
              <h1 className={`text-white text-3xl md:text-4xl font-bold`}>
                Interested in partnering?
              </h1>
              <p className="text-white text-xl md:text-2xl">
                Get in touch to discuss white-label options, bulk pricing, and
                custom integrations.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="py-3 px-6 bg-white text-primary hover:scale-105 duration-300 rounded-xl font-semibold">
                Contact: partners@keychecks.ai
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Partnerships;
