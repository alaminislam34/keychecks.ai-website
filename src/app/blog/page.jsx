"use client";

import {
  BookOpen,
  FileCheck,
  House,
  RefreshCw,
  TrendingUp,
  Wifi,
} from "lucide-react";
import PageTitle from "../components/PageTitle/PageTitle";
export const blogs = [
  {
    icon: <TrendingUp size={24} />,
    title: "The 7 Smartest Checks to Make Before You Buy a Property",
    readTime: "8 min read",
    des: "Covers: price, flood, EPC, broadband, crime, schools, offer strategy. A comprehensive guide to property due diligence.",
  },
  {
    icon: <House size={24} />,
    title: "Why Flood Risk Matters More Than People Think",
    readTime: "5 min read",
    des: "Simple explanation of flood zones & insurance impacts. Understand the hidden costs and risks of flood-prone properties.",
  },
  {
    icon: <FileCheck size={24} />,
    title: "How to Negotiate With Estate Agents (KeyChecks Scripts)",
    readTime: "6 min read",
    des: "Copy-paste questions and offer tactics. Get the upper hand in negotiations with proven scripts and strategies.",
  },
  {
    icon: <BookOpen size={24} />,
    title: "What Your Solicitor Will Check Later — And What You Can Check NOW",
    readTime: "7 min read",
    des: "Titles, covenants, easements, boundaries, searches. Save time and money by understanding these key elements upfront.",
  },
  {
    icon: <Wifi size={24} />,
    title: "The Hidden Value of Good Broadband When Buying a Home",
    readTime: "8 min read",
    des: "Why FTTP matters, how to check speeds properly. In the age of remote work, connectivity is more important than ever.",
  },
];

function Blog() {
  return (
    <section>
      <div className="max-w-310 mx-auto w-[92%] lg:w-11/12 py-24">
        <PageTitle
          title={"About KeyChecks.ai"}
          subTitle={"Expert-led property insight for real people."}
        />
        <br />
        <br />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {blogs.map((b, i) => {
            return (
              <div
                key={i}
                className="flex flex-col gap-4 text-left p-8 rounded-2xl border border-primary/5 hover:border-primary group shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center">
                    <span className="p-3 rounded-xl text-white bg-linear-to-b from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 duration-300">
                      {b.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-dark group-hover:text-primary text-xl md:text-2xl font-semibold duration-300">
                      {b.title}
                    </h3>
                    <p className="text-primary text-xs py-2">
                      <span className="bg-primary/5 py-1.5 px-3 rounded-2xl">
                        {b.readTime}
                      </span>
                    </p>
                  </div>
                </div>
                <p className="text-gray text-sm md:text-base">{b.des}</p>
              </div>
            );
          })}
        </div>
        <br />
        <br />
        <section className="bg-linear-to-br from-dark to-primary py-14 mb-12 rounded-2xl">
          <div className="max-w-310 mx-auto w-[92%] lg:w-11/12 text-center space-y-6 flex flex-col items-center">
            <div className="space-y-4 md:space-y-6 text-center">
              <h1 className={`text-white text-2xl md:text-3xl font-semibold`}>
                Want property insights delivered to your inbox?
              </h1>
              <p className="text-white md:text-lg">
                Subscribe to our newsletter for tips, guides, and updates.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Enter your Email...."
                className="py-3 px-6 rounded-xl focus:ring-2 ring-primary bg-white"
              />
              <button className="py-3 px-6 bg-white text-primary hover:scale-105 duration-300 rounded-xl font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Blog;
