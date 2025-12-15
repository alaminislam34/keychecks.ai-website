"use client";

import { Mail, MessageSquare, Users } from "lucide-react";
import React from "react";
import PageTitle from "../components/PageTitle/PageTitle";

function Contact() {
  return (
    <section className="bg-linear-to-r from-[#FCF8FF] to-[#FDFAFF]">
      <div className="max-w-310 mx-auto w-[92%] lg:w-11/12 py-24">
        <PageTitle
          title={"Contact Us"}
          subTitle={"We respond within 24 hours."}
        />
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
        <br />
        <br />
        <br />
        <div>
          <form className="space-y-4 p-6 md:p-8 lg:p-10 rounded-2xl border border-primary/10 bg-white shadow-lg max-w-3xl mx-auto">
            <h2 className="text-dark text-xl md:text-2xl font-semibold text-center">
              Send us a message
            </h2>
            <br />
            <div className="space-y-2 flex flex-col">
              <label className="text-dark text-sm">Your Name</label>
              <input
                type="text"
                placeholder="John Smith"
                className="py-2.5 px-4 rounded-lg placeholder:text-gray border border-gray/20 focus:ring-primary"
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label className="text-dark text-sm">Email Address</label>
              <input
                type="email"
                placeholder="john@gmail.com"
                className="py-2.5 px-4 rounded-lg placeholder:text-gray border border-gray/20 focus:ring-primary"
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label className="text-dark text-sm">Subject</label>
              <input
                type="text"
                placeholder="How can we help?"
                className="py-2.5 px-4 rounded-lg placeholder:text-gray border border-gray/20 focus:ring-primary"
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label className="text-dark text-sm">Message</label>
              <textarea
                rows={4}
                type="text"
                placeholder="Tell us more ........."
                className="py-2.5 px-4 rounded-lg placeholder:text-gray border border-gray/20 focus:ring-primary"
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <button
                type="submit"
                className="py-2.5 w-full bg-linear-to-r text-white from-primary to-primary/90 md:text-lg font-medium rounded-xl hover:scale-105 duration-300"
              >
                {" "}
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
