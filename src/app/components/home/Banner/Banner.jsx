import React from "react";
import LinkButton from "../../ui/link/LinkButton";

function Banner() {
  return (
    <section className="bg-primary/2 h-full min-h-[85vh] sm:min-h-[78vh] flex items-center justify-center">
      <div className="max-w-310 mx-auto w-[92%] lg:w-11/12 text-center space-y-6 lg:space-y-8 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl text-dark md:text-6xl font-semibold lg:max-w-9/12">
          Know exactly what you're buying — without waiting, guessing or reading
          legal jargon.
        </h1>
        <p className="text-gray-500 text-lg md:text-xl font-normal lg:max-w-7/10">
          Price, EPC, flood, crime, broadband, schools and offer strategy — all
          clearly explained in one same-day, expert-reviewed report.
        </p>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <LinkButton
            type={"primary"}
            link={"/add-legal-insight"}
            text={"Get My Report"}
            size={"lg"}
          />
          <LinkButton
            type={"secondary"}
            link={"/report"}
            text={"View Sample Report"}
            size={"lg"}
          />
        </div>
        <p className="text-sm text-gray-500">
          Based on official UK open data • Same-day delivery • Expert-reviewed •
          Handcrafted insights
        </p>
      </div>
    </section>
  );
}

export default Banner;
