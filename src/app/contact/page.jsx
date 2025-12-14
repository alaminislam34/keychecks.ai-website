"use client";

import { Mail, MessageSquare, Users } from "lucide-react";
import React from "react";

function Contact() {
  return (
    <section>
      <div className="max-w-310 mx-auto w-[95%] lg:w-11/12 py-24">
        <div className="pb-6 space-y-4 text-center">
          <h1
            className={`text-dark text-3xl md:text-4xl lg:text-5xl font-bold`}
          >
            Our Promise
          </h1>
          <p className="text-primary text-xl md:text-2xl">
            Clear. Honest. Same-day.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-4 items-center justify-center text-left p-6 rounded-2xl bg-white border border-primary/10 shadow-lg hover:shadow-xl duration-300">
            <div className="flex items-center">
              <span className="p-4 rounded-xl text-white bg-linear-to-b from-primary to-primary/80 flex items-center justify-center">
                <Mail />
              </span>
            </div>
            <h3 className="text-dark text-lg md:text-xl font-bold">
              General Enquiries
            </h3>
            <h4 className="text-primary text-lg md:text-xl font-semibold">
              hello@keychecks.ai
            </h4>
            <p className="text-gray text-sm">
              Questions about reports, pricing, or how KeyChecks works.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center text-left p-6 rounded-2xl bg-white border border-primary/10 shadow-lg hover:shadow-xl duration-300">
            <div className="flex items-center">
              <span className="p-4 rounded-xl text-white bg-linear-to-b from-primary to-primary/80 flex items-center justify-center">
                <Users />
              </span>
            </div>
            <h3 className="text-dark text-lg md:text-xl font-bold">
              Partnerships
            </h3>
            <h4 className="text-primary text-lg md:text-xl font-semibold">
              partners@keychecks.ai
            </h4>
            <p className="text-gray text-sm">
              Estate agents, brokers, investors — let's work together.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center text-left p-6 rounded-2xl bg-white border border-primary/10 shadow-lg hover:shadow-xl duration-300">
            <div className="flex items-center">
              <span className="p-4 rounded-xl text-white bg-linear-to-b from-primary to-primary/80 flex items-center justify-center">
                <MessageSquare />
              </span>
            </div>
            <h3 className="text-dark text-lg md:text-xl font-bold">Support</h3>
            <h4 className="text-primary text-lg md:text-xl font-semibold">
              hello@keychecks.ai
            </h4>
            <p className="text-gray text-sm">
              Need help with your report? We'll respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
