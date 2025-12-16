import React from "react";

export default function ReportHeader() {
  return (
    <div className="bg-linear-to-r from-[#5C22B8] to-[#7A38EA] p-4 md:p-8 space-y-2">
      <div className="flex justify-between gap-4 items-center">
        <div>
          <h2 className="font-semibold tracking-wider text-xl md:text-2xl text-white">
            <span className="bg-[#a474f1] text-white py-1 px-2.5 rounded-lg font-bold mr-2">
              K
            </span>
            KeyChecks.
            <span>ai</span>
          </h2>
        </div>
        <div className="bg-[#aa82e9] rounded-xl">
          <div className="py-2 px-3 text-right">
            <p className="text-xs text-[#f3e8ff] font-normal">Report Date</p>
            <p className="text-sm md:text-base text-white"> 9 November 2025</p>
          </div>
        </div>
      </div>
      <div className="space-y-2 text-left">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">
          SmartReport
        </h1>
        <p className="text-[#f3e8ff] text-sm md:text-base font-normal">
          Expert-reviewed property insight report
        </p>
      </div>
      <div className="my-6 h-0 border-b border-gray-400 w-full" />
      <div>
        <div className="flex flex-col mb-4">
          <label className="text-xs md:text-sm font-normal text-[#f3e8ff] mb-2">
            Prepared for:
          </label>
          <h3 className="text-white text-lg md:text-xl font-semibold">
            Sarah Thompson
          </h3>
        </div>
        <div className="flex flex-col">
          <label className="text-xs md:text-sm font-normal text-[#f3e8ff] mb-2">
            Property address:
          </label>
          <h3 className="text-white text-lg md:text-xl font-semibold">
            42 Maple Avenue
          </h3>
          <p className="text-sm md:text-base font-normal text-white">
            Richmond, London, TW9 4BH
          </p>
        </div>
      </div>
    </div>
  );
}
