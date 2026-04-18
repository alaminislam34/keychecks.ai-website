import React from "react";
import LinkButton from "../../ui/link/LinkButton";

function Banner() {
  return (
    <section className="bg-primary/2 min-h-[85vh] sm:min-h-[78vh] flex items-center justify-center py-14 md:py-20">
      <div className="max-w-360 mx-auto w-[92%] lg:w-11/12 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-3 space-y-6 md:space-y-8 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-dark leading-tight lg:max-w-[18ch]">
            Know exactly what you're buying before you commit.
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-normal text-text/85 lg:max-w-[60ch]">
            KeyChecks gives you a same-day SmartReport with flood, crime,
            schools, EPC, broadband, value analysis, and offer strategy - all
            reviewed by experts and explained clearly.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
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

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <span className="text-xs sm:text-sm bg-white border border-primary/15 text-text/85 rounded-full py-1.5 px-3">
              Official UK open data
            </span>
            <span className="text-xs sm:text-sm bg-white border border-primary/15 text-text/85 rounded-full py-1.5 px-3">
              Same-day delivery
            </span>
            <span className="text-xs sm:text-sm bg-white border border-primary/15 text-text/85 rounded-full py-1.5 px-3">
              Expert-reviewed
            </span>
            <span className="text-xs sm:text-sm bg-white border border-primary/15 text-text/85 rounded-full py-1.5 px-3">
              Clear next steps
            </span>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-primary/20 bg-white shadow-xl overflow-hidden">
            <div className="bg-primary px-4 py-3 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FCA5A5]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FCD34D]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#86EFAC]" />
              </div>
              <p className="text-xs text-white/80">SmartReport Preview</p>
            </div>

            <div className="p-4 sm:p-5 space-y-4">
              <div className="rounded-xl border border-primary/10 p-4 bg-background">
                <p className="text-xs text-text/70 mb-1">Property</p>
                <h3 className="text-base text-dark">42 Maple Avenue, Richmond</h3>
                <p className="text-sm text-text/75">SmartReport Confidence: 9.3/10</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-accent/20 bg-accent/10 p-3">
                  <p className="text-xs text-text/70">Flood Risk</p>
                  <p className="text-sm text-accent">Very Low</p>
                </div>
                <div className="rounded-lg border border-primary/15 bg-primary/5 p-3">
                  <p className="text-xs text-text/70">EPC Rating</p>
                  <p className="text-sm text-dark">B (83)</p>
                </div>
                <div className="rounded-lg border border-primary/15 bg-primary/5 p-3">
                  <p className="text-xs text-text/70">Schools</p>
                  <p className="text-sm text-dark">Outstanding nearby</p>
                </div>
                <div className="rounded-lg border border-primary/15 bg-primary/5 p-3">
                  <p className="text-xs text-text/70">Offer Guide</p>
                  <p className="text-sm text-dark">Suggested: £865,000</p>
                </div>
              </div>

              <div className="rounded-lg border border-primary/10 bg-background p-3">
                <p className="text-xs text-text/70">Expert Summary</p>
                <p className="text-sm text-text/85">
                  Low-risk area, strong schools and stable local value trend.
                  Recommended as a high-confidence purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
