import React from "react";
import LinkButton from "../../ui/link/LinkButton";

function Banner() {
  return (
    <section className="py-20 bg-primary/2 h-[80vh] flex items-center justify-center">
      <div className="max-w-310 mx-auto w-[95%]   lg:w-11/12 text-center space-y-6 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl tracking-wider leading-[1.4] md:leading-none text-dark md:text-6xl lg:text-7xl font-extrabold">
          Know exactly what you're buying — without waiting, guessing or reading
          legal jargon.
        </h1>
        <p className="text-gray-500 md:text-lg lg:text-xl">
          Price, EPC, flood, crime, broadband, schools and offer strategy — all
          clearly explained in one same-day, expert-reviewed report.
        </p>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <LinkButton
            type={"primary"}
            link={"/pricing"}
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
