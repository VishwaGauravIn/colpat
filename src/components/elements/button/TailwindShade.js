import Link from "next/link";
import React from "react";
import { Sliders } from "react-bootstrap-icons";

export default function TailwindShade({ colors }) {
  return (
    <>
      {colors && (
        <Link
          href={`/tpg?col1=${encodeURIComponent(
            colors[0]
          )}&col2=${encodeURIComponent(colors[1])}&col3=${encodeURIComponent(
            colors[2]
          )}&col4=${encodeURIComponent(colors[3])}&col5=${encodeURIComponent(
            colors[4]
          )}`}
        >
          <button className="rounded-full py-3 px-6 text-sm sm:text-base font-semibold bg-tint-emerald text-black flex justify-center items-center gap-2 group hover:ring-4 ring-offWhite/40">
            <Sliders className="h-6 w-6 group-hover:scale-90 transition-all ease-in-out" />
            Generate Shades for Tailwind
          </button>
        </Link>
      )}
    </>
  );
}
