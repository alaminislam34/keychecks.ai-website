"use client";

import { useState } from "react";
import { Building2, Check } from "lucide-react";
import PageTitle from "../components/PageTitle/PageTitle";

export const partners = [
  {
    icon: <Building2 size={32} />,
    title: "For Estate Agents",
    des: "Give buyers confidence, reduce fall-throughs and speed up decisions. Optional white-label reports available.",
    list: [
      "Reduce fall-throughs with informed buyers",
      "Speed up decision-making process",
      "Add value to your service",
      "White-label options available",
    ],
  },
  {
    icon: <Building2 size={32} />,
    title: "For Mortgage Brokers",
    des: "Help clients understand properties sooner, not later. Improve conversion and reduce surprises during conveyancing.",
    list: [
      "Help clients make confident decisions",
      "Reduce conveyancing surprises",
      "Improve conversion rates",
      "Add value to your consultation",
    ],
  },
  {
    icon: <Building2 size={32} />,
    title: "For Investors & Sourcers",
    des: "Use KeyChecks as your fast analysis tool for BRRR, rentals and flips. Bulk credit options available.",
    list: [
      "Fast property analysis",
      "Bulk credit discounts",
      "Priority delivery",
      "Investor-focused insights",
    ],
  },
];

function Partnerships() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setIsSubmitted(false);
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }
    if (!formData.company.trim()) {
      nextErrors.company = "Please enter your company name.";
    }
    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      nextErrors.message = "Please share at least 10 characters of details.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitted(true);
    setFormData({ name: "", company: "", email: "", message: "" });
  };

  return (
    <section className="bg-linear-to-r from-[#FCF8FF] to-[#FDFAFF]">
      <div className="min-h-[80vh] max-w-360 mx-auto w-[92%] lg:w-11/12 py-20">
        <PageTitle
          title={"Partner With KeyChecks"}
          subTitle={"Trusted by estate agents, brokers and investors."}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((p, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 text-left p-6 md:p-8 rounded-2xl bg-white border border-primary/10 hover:border-primary shadow-xl duration-300"
            >
              <div className="flex items-center">
                <span className="p-4 md:p-6 rounded-xl text-white bg-linear-to-b from-primary to-primary/80 flex items-center justify-center">
                  {p.icon}
                </span>
              </div>
              <h3 className="text-dark text-xl md:text-2xl font-bold">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base">{p.des}</p>
              <ul className="flex flex-col gap-2">
                {p.list.map((l, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-1.5 text-xs md:text-sm text-dark"
                  >
                    <span>
                      <Check className="text-primary" />
                    </span>
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <section className="bg-linear-to-br from-dark to-primary max-w-3xl mx-auto py-8 px-8 md:px-14 rounded-2xl">
          <div className="text-center space-y-6 flex flex-col items-center py-6">
            <div className="mb-6 space-y-4 text-center">
              <h1 className={`text-white text-2xl md:text-3xl font-semibold`}>
                Interested in partnering?
              </h1>
              <p className="text-white text-lg md:text-xl font-normal">
                Get in touch to discuss white-label options, bulk pricing, and
                custom integrations.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="py-3 md:py-4 md:px-8 px-6 bg-white text-primary hover:scale-105 duration-300 rounded-xl md:text-lg font-semibold">
                Contact: partners@keychecks.com
              </button>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto mt-12 bg-white border border-primary/10 rounded-2xl shadow-lg p-6 md:p-8">
          <h2 className="text-dark text-xl md:text-2xl font-semibold text-center mb-1">
            Partnership Enquiry
          </h2>
          <p className="text-gray-500 text-sm text-center mb-6">
            Tell us about your team and we will get back within 1 business day.
          </p>

          {isSubmitted && (
            <p className="mb-4 rounded-lg bg-green-50 border border-green-200 text-green-700 px-4 py-3 text-sm">
              Thanks for your enquiry. Our partnerships team will contact you
              shortly.
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label className="text-sm text-dark">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full py-2.5 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/40 outline-none"
              />
              {errors.name && (
                <p className="text-xs text-red-600">{errors.name}</p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-sm text-dark">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company name"
                className="w-full py-2.5 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/40 outline-none"
              />
              {errors.company && (
                <p className="text-xs text-red-600">{errors.company}</p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-sm text-dark">Work Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full py-2.5 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/40 outline-none"
              />
              {errors.email && (
                <p className="text-xs text-red-600">{errors.email}</p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-sm text-dark">What kind of partnership do you need?</label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="White-label reports, bulk credits, referral model, API..."
                className="w-full py-2.5 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/40 outline-none"
              />
              {errors.message && (
                <p className="text-xs text-red-600">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Submit Enquiry
            </button>
          </form>
        </section>
      </div>
    </section>
  );
}

export default Partnerships;
