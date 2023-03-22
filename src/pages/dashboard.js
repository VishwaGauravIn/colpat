import Head from "next/head";
import React from "react";
import {
  Sliders,
  Fire,
  Robot,
  Palette2,
  ArrowLeftRight,
  EmojiSunglasses,
} from "react-bootstrap-icons";

export default function Dashboard() {
  return (
    <div className="flex w-full justify-center">
      <Head></Head>
      <main className="w-full max-w-5xl mt-24 flex flex-wrap gap-10 justify-center">
        <div className="p-10 w-11/12 sm:w-72 text-2xl text-center font-semibold text-black bg-tint-emerald rounded-lg flex flex-col justify-center items-center gap-6 cursor-pointer hover:ring-4 ring-offWhite/40">
          <Sliders className="w-20 h-20" />
          Tailwind Palette Generator
        </div>
        <div className="p-10 w-11/12 sm:w-72 text-2xl text-center font-semibold text-black bg-tint-yellow rounded-lg flex flex-col justify-center items-center gap-6 cursor-pointer hover:ring-4 ring-offWhite/40">
          <Fire className="w-20 h-20" />
          Trending Color Palettes
        </div>
        <div className="p-10 w-11/12 sm:w-72 text-2xl text-center font-semibold text-black bg-tint-fuchsia rounded-lg flex flex-col justify-center items-center gap-6 cursor-pointer hover:ring-4 ring-offWhite/40">
          <Robot className="w-20 h-20" />
          Palette from Image [AI]
        </div>
        <div className="p-10 w-11/12 sm:w-72 text-2xl text-center font-semibold text-black bg-tint-teal rounded-lg flex flex-col justify-center items-center gap-6 cursor-pointer hover:ring-4 ring-offWhite/40">
          <Palette2 className="w-20 h-20" />
          Color Palette from Color [AI]
        </div>
        <div className="p-10 w-11/12 sm:w-72 text-2xl text-center font-semibold text-black bg-tint-red rounded-lg flex flex-col justify-center items-center gap-6 cursor-pointer hover:ring-4 ring-offWhite/40">
          <ArrowLeftRight className="w-20 h-20" />
          Color Code Converter
        </div>
        <div className="p-10 w-11/12 sm:w-72 text-2xl text-center font-semibold text-black bg-tint-green rounded-lg flex flex-col justify-center items-center gap-6 cursor-pointer hover:ring-4 ring-offWhite/40">
          <EmojiSunglasses className="w-20 h-20" />
          What Color Says!
        </div>
      </main>
    </div>
  );
}
