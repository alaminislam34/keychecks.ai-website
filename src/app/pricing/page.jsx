"use client";

import { Check, X } from "lucide-react";
import React from "react";
import Link from "next/link";
import PageTitle from "../components/PageTitle/PageTitle";

const tiers = [
  {
    name: "SmartCheck",
    price: "£29",
    subtitle: "One-off",
    description: "Core same-day report for confident pre-offer decisions.",
    cta: "Get SmartCheck",
    popular: false,
  },
  {
    name: "SmartCheck + Title",
    price: "£45",
    subtitle: "One-off",
    description: "SmartCheck plus title-focused legal insight in one package.",
    cta: "Get SmartCheck + Title",
    popular: true,
  },
  {
    name: "5-Report Credits",
    price: "£99",
    subtitle: "Bundle",
    description: "Best for repeat buyers, brokers, and active deal sourcers.",
    cta: "Buy 5-Report Credits",
    popular: false,
  },
  {
    name: "Investor Pack",
    price: "£59",
    subtitle: "One-off",
    description: "Added investor context with strategy-focused guidance.",
    cta: "Get Investor Pack",
    popular: false,
  },
  {
    name: "Pro Monthly",
    price: "£49/month",
    subtitle: "Subscription",
    description: "Ongoing access for professionals who review properties monthly.",
    cta: "Start Pro Monthly",
    popular: false,
  },
];

const comparisonRows = [
  {
    feature: "Core property checks",
    values: ["Yes", "Yes", "Yes", "Yes", "Yes"],
  },
  {
    feature: "Title insight included",
    values: ["Add-On", "Included", "Add-On", "Add-On", "Included"],
  },
  {
    feature: "Investor-focused guidance",
    values: ["No", "No", "No", "Included", "Included"],
  },
  {
    feature: "Multi-report credits",
    values: ["No", "No", "5 Credits", "No", "Monthly Access"],
  },
  {
    feature: "Priority delivery",
    values: ["Standard", "Priority", "Priority", "Priority", "Priority"],
  },
];

function CellValue({ value }) {
  if (value === "Yes" || value === "Included") {
    return (
      <span className="inline-flex items-center gap-1 text-accent font-medium">
        <Check className="w-4 h-4" />
        {value}
      </span>
    );
  }

  if (value === "No") {
    return (
      <span className="inline-flex items-center gap-1 text-red-600 font-medium">
        <X className="w-4 h-4" />
        {value}
      </span>
    );
  }

  return <span className="text-dark font-medium">{value}</span>;
}

function Pricing() {
  return (
    <section className="py-20 bg-primary/2">
      <div className="max-w-360 mx-auto w-[92%] lg:w-11/12">
        <div className="text-center pb-12">
          <PageTitle title={"Pricing"} subTitle={"Simple plans for every buyer."} />
          <p className="md:text-lg text-gray-600">
            Choose the option that matches your property search stage.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`rounded-2xl max-w-100 bg-white p-6 flex flex-col justify-between shadow-md transition-all ${
                tier.popular
                  ? "border-2 border-primary scale-[1.03] xl:scale-[1.06]"
                  : "border border-primary/15"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg md:text-xl font-semibold text-dark">
                    {tier.name}
                  </h3>
                  {tier.popular && (
                    <span className="text-xs font-semibold py-1 px-3 rounded-full bg-primary text-white">
                      Most Popular
                    </span>
                  )}
                </div>

                <div>
                  <p className="text-3xl md:text-4xl font-bold text-primary">
                    {tier.price}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{tier.subtitle}</p>
                </div>

                <p className="text-sm text-gray-600">{tier.description}</p>
              </div>

              <Link
                href={"/"}
                className={`mt-6 w-full rounded-xl py-3 px-4 text-center font-semibold duration-300 ${
                  tier.popular
                    ? "bg-primary text-white hover:opacity-90"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                }`}
              >
                {tier.cta}
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-14 bg-white rounded-2xl border border-primary/15 overflow-hidden shadow-md">
          <div className="px-6 py-5 border-b border-primary/10 bg-primary/5">
            <h2 className="text-xl md:text-2xl text-dark font-semibold">
              Feature Comparison
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Compare what is included in each pricing option.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-225 w-full">
              <thead className="bg-white">
                <tr className="border-b border-primary/10">
                  <th className="text-left px-5 py-4 text-sm font-semibold text-dark">
                    Feature
                  </th>
                  {tiers.map((tier) => (
                    <th
                      key={tier.name}
                      className="text-left px-5 py-4 text-sm font-semibold text-dark"
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-primary/10">
                    <td className="px-5 py-4 text-sm font-medium text-dark">
                      {row.feature}
                    </td>
                    {row.values.map((value, idx) => (
                      <td key={`${row.feature}-${idx}`} className="px-5 py-4 text-sm">
                        <CellValue value={value} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
