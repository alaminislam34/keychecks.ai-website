import Link from "next/link";

export default function LinkButton({ text, link, type, size }) {
  return (
    <Link
      href={link}
      className={`truncate duration-300  ${
        type === "primary"
          ? "bg-linear-to-r hover:scale-105 from-primary to-primary/90 text-white"
          : " text-primary border-2 border-primary bg-white hover:bg-primary/5"
      } ${
        size === "sm"
          ? " py-2.5 px-6 text-sm"
          : size === "lg"
          ? "py-4 px-8 text-lg"
          : "py-4 px-12 text-xl"
      } rounded-xl  font-semibold tracking-wider`}
    >
      {text}
    </Link>
  );
}
