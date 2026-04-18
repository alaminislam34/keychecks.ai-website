import Link from "next/link";

export default function LinkButton({ text, link, type, size }) {
  return (
    <Link
      href={link}
      className={`truncate duration-300  ${
        type === "primary"
          ? "bg-linear-to-r hover:scale-105 from-primary to-primary/90 text-white"
          : " text-primary bg-white hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_0px_#cbd5e0]"
      } ${
        size === "sm"
          ? " py-2 px-6 text-sm font-medium"
          : size === "lg"
            ? "py-4 px-8 text-lg font-semibold tracking-wider"
            : size === "xl" && "py-3 px-10 text-lg"
      } rounded-xl `}
    >
      {text}
    </Link>
  );
}
