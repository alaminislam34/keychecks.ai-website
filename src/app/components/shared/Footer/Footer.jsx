"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-310 mx-auto w-[95%] lg:w-11/12 space-y-6 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-white">
          <div className="space-y-4">
            {/* logo */}
            <div className="">
              <Link
                href={"/"}
                className="font-semibold tracking-wider text-lg md:text-xl text-white"
              >
                <span className="bg-primary text-white py-1 px-2.5 rounded-lg font-bold mr-2">
                  K
                </span>
                KeyChecks.
                <span className="text-[#bd97fa]">ai</span>
              </Link>
            </div>
            <p className="text-sm md:text-base text-[#9ca3af]">
              Same-day expert-reviewed property insights
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Product</h3>
            <ul className="text-[#9ca3af] space-y-2 text-sm">
              <li className="hover:text-[#a87cee]">
                <Link href={"#"}>SmartReport</Link>
              </li>
              <li className="hover:text-[#a87cee]">
                <Link href={"#"}>Investor Pack</Link>
              </li>
              <li className="hover:text-[#a87cee]">
                <Link href={"#"}>Bundle Credits</Link>
              </li>
              <li className="hover:text-[#a87cee]">
                <Link href={"#"}>Guarantee</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="text-[#9ca3af] space-y-2 text-sm">
              <li className="hover:text-[#a87cee]">
                <Link href={"#"}>About</Link>
              </li>
              <li className="hover:text-[#a87cee]">
                <Link href={"#"}>Partnerships</Link>
              </li>
              <li className="hover:text-[#a87cee]">
                <Link href={"#"}>Blog</Link>
              </li>
              <li className="hover:text-[#a87cee]">
                <Link href={"#"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="text-[#9ca3af] space-y-2 text-sm">
              <li className="hover:text-[#a87cee]">
                <Link href={"#"}>Privacy</Link>
              </li>
              <li className="hover:text-[#a87cee]">
                <Link href={"#"}>Terms</Link>
              </li>
              <li className="hover:text-[#a87cee]">
                <Link href={"#"}>Data Sources</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-b border-gray h-0 w-full my-6"></div>
        <div>
          <p className="text-xs md:text-sm text-gray text-center">
            KeyChecks.ai © 2025 • Same-day expert-reviewed property insights
          </p>
        </div>
      </div>
    </section>
  );
}
