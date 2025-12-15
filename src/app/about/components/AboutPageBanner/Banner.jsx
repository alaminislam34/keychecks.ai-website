import PageTitle from "@/app/components/PageTitle/PageTitle";
import React from "react";

function Banner() {
  return (
    <section className="bg-linear-to-l from-[#FCF8FF] to-white">
      <div className="max-w-360 mx-auto w-[92%] lg:w-11/12 py-20">
        <div>
          <PageTitle
            title={"About KeyChecks.ai"}
            subTitle={"Expert-led property insight for real people."}
          />
          <div>
            <div className="space-y-5 p-6 md:p-8 lg:p-12 rounded-2xl max-w-4xl mx-auto shadow-lg bg-white">
              <p className="text-dark md:text-lg">
                Buying a home shouldn't feel stressful or confusing.
              </p>
              <p className="text-dark md:text-lg">
                KeyChecks was created to give buyers — from first-time buyers to
                seasoned investors — a calm, clear and trustworthy understanding
                of any property before they spend money on surveys or
                solicitors.
              </p>
              <p className="text-dark md:text-lg">
                We turn complexity into clarity — so you know exactly what
                you're buying.
              </p>
            </div>
          </div>
        </div>
        <br />
      </div>
    </section>
  );
}

export default Banner;
