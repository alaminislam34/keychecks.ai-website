import React from "react";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";

function Pricing() {
  return (
    <section className="py-20 bg-primary/2">
      <div className="max-w-310 mx-auto w-[95%] lg:w-11/12">
        <div className="text-center">
          <SectionTitle title={"Pricing"} color={"text-dark"} />
          <p className="md:text-lg text-gray-600">
            Handcrafted, human-reviewed, written in plain English.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
