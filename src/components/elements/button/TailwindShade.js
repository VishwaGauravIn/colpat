import Link from "next/link";
import React from "react";
import { Sliders } from "react-bootstrap-icons";

export default function TailwindShade() {
  return (
    <Link href="">
      <button
        className="rounded-full py-3 px-6 text-base font-semibold bg-tint-emerald text-black flex justify-center items-center gap-2 group hover:ring-4 ring-offWhite/40"
        onClick={() => setImg("")}
      >
        <Sliders className="h-6 w-6 group-hover:scale-90 transition-all ease-in-out" />
        Generate Shades for Tailwind
      </button>
    </Link>
  );
}
