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
    href: "/#how-it-works",
    name: "How It Works",
  },
  {
    href: "/pricing",
    name: "Pricing",
  },
  {
    href: "/partnerships",
    name: "Partnerships",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const path = usePathname();
  const uniqueNavlinks = navlinks.filter(
    (nav, index, arr) =>
      index === arr.findIndex((item) => item.href === nav.href),
  );
  return (
    <section className="py-3.5 bg-primary fixed w-full top-0 border-b border-white/10 z-50">
      <nav className="flex justify-between items-center max-w-360 mx-auto w-[92%] lg:w-11/12">
        {/* logo */}
        <div className="">
          <Link
            href={"/"}
            className="font-semibold tracking-wider text-lg md:text-xl text-white"
          >
            KeyChecks
          </Link>
        </div>

        <div className="md:flex items-center justify-between gap-6 hidden">
          {/* link */}
          <div>
            <ul className="flex flex-row gap-6 lg:gap-8 items-center">
              {uniqueNavlinks.map((nav, i) => (
                <li key={i}>
                  <Link
                    href={nav.href}
                    className={`hover:text-green-300 text-sm font-normal duration-300 tracking-wider ${
                      path === nav.href ? "text-green-300" : "text-white/80"
                    }`}
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <LinkButton
              type={"primary"}
              link={"/auth"}
              text={"Login"}
              size={"sm"}
            />
          </div>
          {/* button */}
          <div className="flex items-center gap-4">
            <LinkButton
              type={""}
              link={"/pricing"}
              text={"Get My Report"}
              size={"sm"}
            />
          </div>
        </div>
        <div className="md:hidden relative">
          <button onClick={() => setShowMenu(!showMenu)} className="text-white">
            <Menu />
          </button>
          <div
            className={`${
              showMenu ? "fixed top-14" : "hidden"
            } fixed bg-primary border-b border-b-white/10 right-0 w-screen p-6`}
          >
            <div className="flex flex-col gap-4">
              {/* link */}
              <div>
                <ul className="flex flex-col gap-2">
                  {uniqueNavlinks.map((nav, i) => (
                    <li key={i}>
                      <Link
                        href={nav.href}
                        onClick={() => setShowMenu(false)}
                        className={`hover:text-accent text-sm font-normal duration-300 tracking-wider py-2 px-4 hover:bg-white/10 inline-block w-full rounded-lg ${
                          path === nav.href ? "text-success" : "text-white"
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
                  type={""}
                  link={"/pricing"}
                  text={"Get My Report"}
                  size={"sm"}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
