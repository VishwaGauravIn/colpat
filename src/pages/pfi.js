import Head from "next/head";
import React from "react";
import {
  ArrowUp,
  ArrowUpCircle,
  ArrowUpCircleFill,
} from "react-bootstrap-icons";

export default function Pfi() {
  return (
    <>
      <Head></Head>
      <main className="flex flex-col min-h-screen -mt-32 md:-mt-44 ring justify-center items-center gap-6 sm:gap-10 text-center">
        <p className="text-tint-fuchsia text-2xl sm:text-4xl font-semibold">
          Generate Color Palette from Image using AI
        </p>
        <button className="rounded-full py-4 px-8 text-xl font-semibold bg-tint-fuchsia text-black flex justify-center items-center gap-2 group hover:ring-4 ring-offWhite/40">
          <ArrowUpCircle className="stroke-[10] h-10 w-10 group-hover:scale-90 transition-all ease-in-out" />
          Upload Image
        </button>
      </main>
    </>
  );
}
