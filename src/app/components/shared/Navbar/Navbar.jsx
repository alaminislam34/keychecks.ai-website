"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LinkButton from "../../ui/link/LinkButton";
import { useState } from "react";

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
  const [showMenu, setShowMenu] = useState(false);
  const path = usePathname();
  return (
    <section className="py-3 bg-white/60 backdrop-blur-lg fixed w-full top-0 border-b border-gray/10">
      <nav className="flex justify-between items-center max-w-310 mx-auto w-[95%] lg:w-11/12">
        {/* logo */}
        <div className="">
          <Link
            href={"/"}
            className="font-extrabold tracking-wider text-lg text-dark"
          >
            <span className="bg-primary text-white py-1 px-2.5 rounded-lg font-bold mr-2">
              K
            </span>
            KeyChecks.
            <span className="text-primary">ai</span>
          </Link>
        </div>

        <div className="md:flex items-center justify-between gap-6 hidden">
          {/* link */}
          <div>
            <ul className="flex flex-row gap-6 lg:gap-8 items-center">
              {navlinks.map((nav, i) => (
                <li key={i}>
                  <Link
                    href={nav.href}
                    className={`hover:text-primary text-sm font-medium duration-300 tracking-wider ${
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
            <LinkButton
              type={"primary"}
              link={"/pricing"}
              text={"Get My Report"}
            />
            {/* <Link
              href={"/login"}
              className="hover:underline hover:text-primary"
            >
              Log in
            </Link> */}
          </div>
        </div>
        <div className="md:hidden relative">
          <button onClick={() => setShowMenu(!showMenu)}>
            <Menu />
          </button>
          <div className={`${showMenu ? "fixed top-14" : "hidden"} fixed bg-white border-b border-b-gray/10 right-0 w-screen p-4`}>
            <div className="flex flex-col gap-4">
              {/* link */}
              <div>
                <ul className="flex flex-col gap-2">
                  {navlinks.map((nav, i) => (
                    <li key={i}>
                      <Link
                        href={nav.href}
                        className={`hover:text-primary text-sm font-medium duration-300 tracking-wider py-2 px-4 hover:bg-primary/10 inline-block w-full rounded-lg ${
                          path === nav.href
                            ? "text-primary bg-primary/10"
                            : "text-[#64748B]"
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
                <LinkButton
                  type={"primary"}
                  link={"/pricing"}
                  text={"Get My Report"}
                />
                {/* <Link
              href={"/login"}
              className="hover:underline hover:text-primary"
            >
              Log in
            </Link> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
