"use client";

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
  return (
    <div>
      <h1>
        <span className="text-primary">K</span> KeyChecks.
        <span className="text-primary">ai</span>
      </h1>
    </div>
  );
};

export default Navbar;
