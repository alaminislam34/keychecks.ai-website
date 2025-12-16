import LinkButton from "@/app/components/ui/link/LinkButton";
import Link from "next/link";
import React from "react";

function GetYourOwnReport() {
  return (
    <div className="bg-primary flex items-center flex-col gap-4 py-8 md:py-10 ">
      <h1 className="text-xl md:text-2xl font-semibold text-white">
        Get your own property report
      </h1>
      <p className="text-sm md:text-base text-white font-normal">
        Expert-reviewed, same-day delivery, starting at £29
      </p>
      <div className="*:inline-block">
        <Link
          href={"/pricing"}
          className="py-3 px-6 md:text-lg border rounded-xl bg-white text-primary font-semibold tracking-wide hover:scale-105 duration-300"
        >
          Get My Report
        </Link>
      </div>
    </div>
  );
}

export default GetYourOwnReport;
