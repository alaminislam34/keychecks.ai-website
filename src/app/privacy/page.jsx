"use client";

import { FileCheck, Lock, Shield } from "lucide-react";
import Link from "next/link";
import React from "react";
import PageTitle from "../components/PageTitle/PageTitle";

function Privacy() {
  return (
    <section>
      <div className="max-w-310 mx-auto w-[92%] lg:w-11/12 py-24">
        <PageTitle
          title={"Legal Information"}
          subTitle={"Privacy, terms, and data transparency."}
        />
        <div className="space-y-6 md:space-y-8">
          <div className="flex flex-col gap-4 text-left p-8 md:p-12 rounded-2xl border-2 border-primary/5  group shadow-lg ">
            <div className="flex items-start gap-4">
              <div className="flex items-center">
                <span className="p-3 rounded-xl text-white bg-linear-to-b from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 duration-300">
                  <Lock />
                </span>
              </div>
              <div>
                <h3 className="text-dark group-hover:text-primary text-xl md:text-2xl font-bold duration-300">
                  Privacy Policy
                </h3>
              </div>
            </div>
            <div>
              <p className="text-dark md:text-lg">
                We collect your name, email and property address only to prepare
                your report.
              </p>
              <p className="text-dark md:text-lg">
                We never sell or share data.
              </p>
              <p className="text-dark md:text-lg">
                Stripe processes all payments securely.
              </p>
            </div>
            <p className="text-gray-400 text-sm md:text-base">
              Your personal information is stored securely and used solely for
              the purpose of delivering your property report. We comply with UK
              GDPR regulations and take data protection seriously.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-left p-8 md:p-12 rounded-2xl border-2 border-primary/5  group shadow-lg ">
            <div className="flex items-start gap-4">
              <div className="flex items-center">
                <span className="p-3 rounded-xl text-white bg-linear-to-b from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 duration-300">
                  <FileCheck />
                </span>
              </div>
              <div>
                <h3 className="text-dark group-hover:text-primary text-xl md:text-2xl font-bold duration-300">
                  Terms of Service
                </h3>
              </div>
            </div>
            <div>
              <p className="text-dark md:text-lg">
                KeyChecks provides informational guidance, not legal advice.
              </p>
              <p className="text-dark md:text-lg">
                Reports rely on official UK data which may occasionally have
                omissions.
              </p>
            </div>
            <p className="text-gray-400 text-sm md:text-base">
              Our reports are designed to help you make informed decisions about
              property purchases. However, they should be used alongside
              professional legal and surveying advice. We source data from
              official UK sources including Land Registry, EPC databases, local
              authorities, and other trusted public records.
            </p>
            <p className="text-gray-400 text-sm md:text-base">
              While we strive for accuracy, we cannot guarantee that all
              third-party data sources are completely up-to-date or error-free.
              We recommend using our reports as part of your due diligence
              process, not as a replacement for professional conveyancing or
              surveying services.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-left p-8 md:p-12 rounded-2xl border-2 border-primary/5  group shadow-lg ">
            <div className="flex items-start gap-4">
              <div className="flex items-center">
                <span className="p-3 rounded-xl text-white bg-linear-to-b from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 duration-300">
                  <Shield />
                </span>
              </div>
              <div>
                <h3 className="text-dark group-hover:text-primary text-xl md:text-2xl font-bold duration-300">
                  Refund Policy
                </h3>
              </div>
            </div>
            <div>
              <p className="text-dark md:text-lg">
                If your report is missing key information, we'll fix it or
                refund within 24 hours.
              </p>
            </div>
            <p className="text-gray-400 text-sm md:text-base">
              We stand behind the quality of our reports. If you're not
              satisfied with the information provided, or if you believe
              essential data is missing, please contact us within 7 days of
              receiving your report. We'll either provide the missing
              information or issue a full refund — no questions asked.
            </p>
          </div>
          <div className="space-y-6 shadow-lg p-6 md:p-8 rounded-2xl bg-linear-to-br from-[#FAF5FF] to-[#FEFEFF]">
            <h3 className="text-dark group-hover:text-primary text-xl md:text-2xl font-bold duration-300">
              Refund Policy
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Our reports are compiled using official UK data sources,
              including:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li className="text-xs md:text-sm text-gray">
                HM Land Registry (price paid data, title information)
              </li>
              <li className="text-xs md:text-sm text-gray">
                Energy Performance Certificate (EPC) Register
              </li>
              <li className="text-xs md:text-sm text-gray">
                Environment Agency (flood risk data)
              </li>
              <li className="text-xs md:text-sm text-gray">
                Police.uk (crime statistics)
              </li>
              <li className="text-xs md:text-sm text-gray">
                Ofsted (school ratings)
              </li>
              <li className="text-xs md:text-sm text-gray">
                Ofcom (broadband availability)
              </li>
              <li className="text-xs md:text-sm text-gray">
                Local authority planning data
              </li>
              <li className="text-xs md:text-sm text-gray">
                Office for National Statistics (demographic data)
              </li>
            </ul>
          </div>
          <div className="py-6 text-center flex items-center justify-center">
            <p className="flex items-center gap-2 text-center md:text-lg">
              Questions about our policies?
              <Link
                href={"/contact"}
                className="font-semibold hover:text-primary hover:underline"
              >
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Privacy;
