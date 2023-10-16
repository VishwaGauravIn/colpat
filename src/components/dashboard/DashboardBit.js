import Link from "next/link";
import React from "react";

export default function DashboardBit({ color, label, children, href = "" }) {
  return (
    <Link href={href}>
      <div
        className={`group p-10 w-72 h-64 text-2xl text-center font-semibold text-black rounded-lg flex flex-col justify-center items-center gap-6 cursor-pointer hover:ring-4 ring-offWhite/40 ${color} `}
      >
        {children}
        {label}
      </div>
    </Link>
  );
}
