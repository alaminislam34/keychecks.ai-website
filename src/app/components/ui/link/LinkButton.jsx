import Link from "next/link";

export default function LinkButton({ text, link, type }) {
  return (
    <Link
      href={link}
      className={`truncate hover:scale-105 ${
        type === "primary"
          ? "bg-linear-to-r from-primary to-primary/80 duration-300 text-white"
          : " text-primary border border-primary bg-white"
      } py-2.5 px-6 rounded-lg text-sm font-semibold tracking-wider`}
    >
      {text}
    </Link>
  );
}
