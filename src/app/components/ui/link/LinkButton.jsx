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
          ? " py-2 px-6 text-sm"
          : size === "lg"
          ? "py-4 px-8 text-lg"
          : size === "xl" && "py-3 px-10 text-lg"
      } rounded-xl  font-medium`}
    >
      {text}
    </Link>
  );
}
