"use client";

import { Check } from "lucide-react";
import React from "react";
import SectionTitle from "../components/ui/SectionTitle/SectionTitle";
import Link from "next/link";

function Pricing() {
  return (
    <section className="py-20 bg-primary/2">
      <div className="max-w-310 mx-auto w-[95%] lg:w-11/12">
        <div className="text-center pb-12">
          <SectionTitle title={"Pricing"} color={"text-dark"} />
          <p className="md:text-lg text-gray-600">
            Handcrafted, human-reviewed, written in plain English.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white space-y-6 p-6 flex my-4 justify-between flex-col rounded-2xl border-2 shadow-md shadow-primary/10 duration-300 border-primary/10 hover:border-primary">
            <div className="space-y-2 text-center">
              <h3 className="text-xl lg:text-2xl font-semibold text-dark">
                SmartReport
              </h3>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                £29
              </h1>
              <p className="text-xs md:text-sm text-gray">
                A complete pre-offer property report, delivered same day.
              </p>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-1.5 text-xs md:text-sm text-dark">
                <span>
                  <Check className="text-primary" />
                </span>
                Price guidance & comparable sales
              </li>
              <li className="flex items-center gap-1.5 text-xs md:text-sm text-dark">
                <span>
                  <Check className="text-primary" />
                </span>
                EPC, flood, crime & schools
              </li>
              <li className="flex items-center gap-1.5 text-xs md:text-sm text-dark">
                <span>
                  <Check className="text-primary" />
                </span>
                Broadband & connectivity
              </li>
              <li className="flex items-center gap-1.5 text-xs md:text-sm text-dark">
                <span>
                  <Check className="text-primary" />
                </span>
                Running costs, council tax, local constraints
              </li>
              <li className="flex items-center gap-1.5 text-xs md:text-sm text-dark">
                <span>
                  <Check className="text-primary" />
                </span>
                Questions for estate agents & solicitors
              </li>
            </ul>
            <div className="flex items-center justify-center">
              <Link
                href={"#"}
                className={`truncate duration-300 py-3 px-6 w-full text-center bg-linear-to-r hover:scale-105 from-primary to-primary/90 text-white rounded-xl  font-semibold tracking-wider`}
              >
                Get SmartReport
              </Link>
            </div>
          </div>
          {/* popular */}
          <div className="bg-primary space-y-6 flex justify-between flex-col p-6 relative rounded-2xl border-2 shadow-md shadow-primary/10 duration-300 border-primary/10 hover:border-primary text-white">
            <div className="absolute -top-4 left-1/2  -translate-x-1/2 rounded-xl bg-primary/20 font-semibold font-inter backdrop-blur-3xl py-1 px-4">
              Most Popular
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl lg:text-2xl font-semibold">
                Investor Pack
              </h3>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                £59
              </h1>
              <p className="text-xs md:text-sm">
                For investors and deal sourcers who want deeper insight.
              </p>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-1.5 text-xs md:text-sm">
                <span>
                  <Check />
                </span>
                Everything in SmartReport
              </li>
              <li className="flex items-center gap-1.5 text-xs md:text-sm">
                <span>
                  <Check />
                </span>
                Rental estimates & typical yields
              </li>
              <li className="flex items-center gap-1.5 text-xs md:text-sm">
                <span>
                  <Check />
                </span>
                5-year growth trend
              </li>
              <li className="flex items-center gap-1.5 text-xs md:text-sm">
                <span>
                  <Check />
                </span>
                Area demand indicators
              </li>
              <li className="flex items-center gap-1.5 text-xs md:text-sm">
                <span>
                  <Check />
                </span>
                Suggested investor strategy
              </li>
            </ul>
            <div className="flex items-center justify-center">
              <Link
                href={"#"}
                className={`truncate duration-300 py-3 px-6 w-full text-center bg-white hover:scale-105 text-primary rounded-xl font-semibold tracking-wider`}
              >
                Get Investor Pack
              </Link>
            </div>
          </div>
          <div className="bg-white space-y-6 p-6 flex my-4 justify-between flex-col rounded-2xl border-2 shadow-md shadow-primary/10 duration-300 border-primary/10 hover:border-primary">
            <div className="space-y-2 text-center">
              <h3 className="text-xl lg:text-2xl font-semibold text-dark">
                5-Report Bundle
              </h3>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                £99
              </h1>
              <p className="text-xs md:text-sm text-gray">
                Save £46 with bundle credits
              </p>
            </div>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-1.5 text-xs md:text-sm text-dark">
                <span>
                  <Check className="text-primary" />
                </span>
                Five handcrafted SmartReports
              </li>
              <li className="flex items-center gap-1.5 text-xs md:text-sm text-dark">
                <span>
                  <Check className="text-primary" />
                </span>
                Credits never expire
              </li>
              <li className="flex items-center gap-1.5 text-xs md:text-sm text-dark">
                <span>
                  <Check className="text-primary" />
                </span>
                Priority delivery
              </li>
              <li className="flex items-center gap-1.5 text-xs md:text-sm text-dark">
                <span>
                  <Check className="text-primary" />
                </span>
                Perfect for investors and multi-property buyers
              </li>
            </ul>
            <div className="flex items-center justify-center">
              <Link
                href={"#"}
                className={`truncate duration-300 py-3 px-6 w-full text-center bg-linear-to-r hover:scale-105 from-primary to-primary/90 text-white rounded-xl  font-semibold tracking-wider`}
              >
                Get The Bundle
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-primary/2 max-w-3xl mx-auto mt-12 shadow-lg space-y-6 p-8 flex justify-between flex-col rounded-2xl border-2 shadow-primary/10 duration-300 border-primary/10 ">
            <div className="space-y-2 text-center">
              <h3 className="text-xl lg:text-2xl font-semibold text-dark">
                Title & Plan Legal Insight
              </h3>
              <h1 className="text-3xl md:text-4xl font-bold text-primary">
                £19{" "}
                <span className="text-sm md:text-base text-gray font-normal">
                  (Add-On)
                </span>
              </h1>
              <p className="text-xs md:text-sm text-gray">
                Expert review of the official Land Registry Title Register &
                Title Plan.
              </p>
            </div>
            <p className="text-xs md:text-sm text-dark text-center py-2">
              We explain in clear English:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-1.5 text-xs md:text-sm text-dark">
                  <span>
                    <Check className="text-primary" />
                  </span>
                  Restrictive covenants
                </li>
                <li className="flex items-center gap-1.5 text-xs md:text-sm text-dark">
                  <span>
                    <Check className="text-primary" />
                  </span>
                  Rights of way
                </li>
                <li className="flex items-center gap-1.5 text-xs md:text-sm text-dark">
                  <span>
                    <Check className="text-primary" />
                  </span>
                  Boundary lines
                </li>
              </ul>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-1.5 text-xs md:text-sm text-dark">
                  <span>
                    <Check className="text-primary" />
                  </span>
                  Easements
                </li>
                <li className="flex items-center gap-1.5 text-xs md:text-sm text-dark">
                  <span>
                    <Check className="text-primary" />
                  </span>
                  Shared access notes
                </li>
                <li className="flex items-center gap-1.5 text-xs md:text-sm text-dark">
                  <span>
                    <Check className="text-primary" />
                  </span>
                  Charges / rentcharges
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <Link
                href={"#"}
                className={`truncate duration-300 py-3 px-6 w-full text-center bg-linear-to-r hover:scale-105 from-primary to-primary/90 text-white rounded-xl  font-semibold tracking-wider`}
              >
                Add Legal Insight
              </Link>
            </div>
            <p className="text-xs md:text-sm text-gray text-center">
              We can order the Title Register (£3) and Title Plan (£3) at cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
