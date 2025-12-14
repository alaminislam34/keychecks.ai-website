import React from "react";

function Banner() {
  return (
    <section className="bg-primary/5">
      <div className="max-w-360 mx-auto w-[92%] lg:w-11/12 py-24">
        <div className="py-12">
          <div className="pb-6 md:pb-8 space-y-4 md:space-y-6 text-center">
            <h1
              className={`text-dark text-3xl md:text-4xl lg:text-5xl font-bold`}
            >
              About KeyChecks.ai
            </h1>
            <p className="text-primary text-xl md:text-2xl">
              Expert-led property insight for real people.
            </p>
          </div>
          <div>
            <div className="space-y-5 p-6 md:p-8 lg:p-12 rounded-2xl max-w-4xl mx-auto shadow-2xl">
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
      </div>
    </section>
  );
}

export default Banner;
