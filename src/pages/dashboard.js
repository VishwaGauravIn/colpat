import DashboardBit from "@/components/dashboard/DashboardBit";
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
  const svgClassList =
    "w-20 h-20 group-hover:scale-90 transition-all ease-in-out";
  return (
    <div className="flex w-full justify-center">
      <Head></Head>
      <main className="w-full max-w-5xl mt-24 flex flex-wrap gap-10 justify-center">
        <DashboardBit
          color="bg-tint-emerald"
          label="Tailwind Palette Generator"
        >
          <Sliders className={svgClassList} />
        </DashboardBit>

        <DashboardBit color="bg-tint-yellow" label="Trending Color Palettes">
          <Fire className={svgClassList} />
        </DashboardBit>

        <DashboardBit color="bg-tint-fuchsia" label="Palette from Image [AI]">
          <Robot className={svgClassList} />
        </DashboardBit>

        <DashboardBit
          color="bg-tint-teal"
          label="Color Palette from Color [AI]"
        >
          <Palette2 className={svgClassList} />
        </DashboardBit>

        <DashboardBit color="bg-tint-red" label="Color Code Converter">
          <ArrowLeftRight className={svgClassList} />
        </DashboardBit>

        <DashboardBit color="bg-tint-green" label="What Color Says!">
          <EmojiSunglasses className={svgClassList} />
        </DashboardBit>
      </main>
    </div>
  );
}
