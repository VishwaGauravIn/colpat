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
  Gem,
} from "react-bootstrap-icons";

export default function Dashboard() {
  const svgClassList =
    "w-20 h-20 group-hover:scale-90 transition-all ease-in-out";
  return (
    <div className="flex w-full justify-center">
      <Head>
        <title>ColPat Dashboard : Color Palette & Design Tool</title>
        <meta
          name="description"
          content="ColPat is the ultimate color palette generator with awesome tools. ColPat's AI, user-friendly interface, and customization options make it easy to find the perfect colors. Unleash your creativity and elevate your designs with ColPat!"
        />
        <meta
          name="keywords"
          content="ColPat, Color Palette, Gradient, Shade Generator, Color Shade, Tailwind"
        />
      </Head>
      <main className="w-full max-w-5xl flex flex-wrap gap-10 justify-center">
        <DashboardBit
          color="bg-tint-yellow"
          label="Trending Color Palettes"
          href="/trending"
        >
          <Fire className={svgClassList} />
        </DashboardBit>

        <DashboardBit
          color="bg-tint-red"
          label="Awesome Gradients"
          href="/gradients"
        >
          <Gem className={svgClassList} />
        </DashboardBit>

        <DashboardBit
          color="bg-tint-emerald"
          label="Tailwind Palette Generator"
          href="/tpg"
        >
          <Sliders className={svgClassList} />
        </DashboardBit>

        <DashboardBit
          color="bg-tint-fuchsia"
          label="Palette from Image [AI]"
          href="/pfi"
        >
          <Robot className={svgClassList} />
        </DashboardBit>

        <DashboardBit
          color="bg-tint-teal"
          label="Color Palette from Color [AI]"
          href="/palette-from-color"
        >
          <Palette2 className={svgClassList} />
        </DashboardBit>

        <DashboardBit
          color="bg-tint-green"
          label="What Color Says!"
          href="/color-says"
        >
          <EmojiSunglasses className={svgClassList} />
        </DashboardBit>
      </main>
    </div>
  );
}
