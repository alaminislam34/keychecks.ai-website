"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const navlinks = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
    name: "About",
  },
  {
    href: "/partnerships",
    name: "Partnerships",
  },
  {
    href: "/blog",
    name: "Blog",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];

const Navbar = () => {
  const path = usePathname();
  return (
    <section className="py-4 bg-white fixed w-full top-0 border-b border-gray/40">
      <nav className="flex justify-between items-center max-w-360 mx-auto w-11/12">
        {/* logo */}
        <div className="font-bold tracking-wider text-xl">
          <h1>
            <span className="bg-primary text-white py-1 px-3 rounded-lg font-bold mr-2">
              K
            </span>
            KeyChecks.
            <span className="text-primary">ai</span>
          </h1>
        </div>

        <div className="flex items-center justify-between gap-6">
          {/* link */}
          <div>
            <ul className="flex flex-row gap-6 items-center">
              {navlinks.map((nav, i) => (
                <li key={i}>
                  <Link
                    href={nav.href}
                    className={`hover:text-primary text-sm font-semibold tracking-wider ${
                      path === nav.href ? "text-primary" : "text-[#64748B]"
                    }`}
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* button */}
          <div className="flex items-center gap-4">
            <button className="bg-primary border border-primary text-white py-2 px-6 rounded-lg text-sm font-semibold tracking-wider">
              Get My Report
            </button>{" "}
            <Link
              href={"/login"}
              className="hover:underline hover:text-primary"
            >
              Log in
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
