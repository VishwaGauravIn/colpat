import Toast from "@/components/elements/toast/Toast";
import WhatColorSays from "@/components/whatColorSays/WhatColorSays";
import Head from "next/head";
import React from "react";

export default function ColorSays() {
  return (
    <>
      <Head>
        <title>ColPat : What Color Says</title>
        <meta name="title" content="ColPat : What Color Says" />
        <meta
          name="description"
          content="ColPat's What Color Says! feature allows you to understand the significance of a color and decide which color suits you the best. This feature provides insights into the psychology of color and how different colors can affect emotions and behavior. This feature is useful when you want to create a design that resonates with your target audience."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://colpat.itsvg.in/color-says" />
        <meta property="og:title" content="ColPat : What Color Says" />
        <meta
          property="og:description"
          content="ColPat's What Color Says! feature allows you to understand the significance of a color and decide which color suits you the best. This feature provides insights into the psychology of color and how different colors can affect emotions and behavior. This feature is useful when you want to create a design that resonates with your target audience."
        />
        <meta
          property="og:image"
          content="https://colpat.itsvg.in/assets/7.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://colpat.itsvg.in/color-says"
        />
        <meta property="twitter:title" content="ColPat : What Color Says" />
        <meta
          property="twitter:description"
          content="ColPat's What Color Says! feature allows you to understand the significance of a color and decide which color suits you the best. This feature provides insights into the psychology of color and how different colors can affect emotions and behavior. This feature is useful when you want to create a design that resonates with your target audience."
        />
        <meta
          property="twitter:image"
          content="https://colpat.itsvg.in/assets/7.png"
        />
      </Head>
      <main className="flex flex-col sm:items-center gap-8 px-4 w-full mb-10 transition-all ease-in-out">
        <p className="text-3xl font-semibold text-white text-center">
          What Color Says
        </p>
        <p className="text-sm md:text-base text-center text-offWhite">
          Click on the color to copy hex code
        </p>
        <div className="flex px-4 md:w-10/12 gap-10 flex-wrap justify-center">
          <WhatColorSays
            hex="CCA773"
            name="Beige"
            pos="Calmness, elegence, simplicity, warmth, and softness"
            neg="Monotony"
          />
          <WhatColorSays
            hex="000000"
            name="Black"
            pos="Seriousness, power, prestige, strength, and discipline"
            neg="Pessimism, sadness, and aloofness"
          />
          <WhatColorSays
            hex="253489"
            name="Blue"
            pos="Calmness, intelligence, sincerity, faithfulness, wisdom"
            neg="Self-centeredness, stubbornness, melancholy, timidity"
          />
          <WhatColorSays
            hex="986234"
            name="Brown"
            pos="Warmth, simplicity, comfort, trustworthiness, and reliability"
            neg="Monotony and dullness"
          />
          <WhatColorSays
            hex="760F2A"
            name="Burgundy"
            pos="Wealth, maturity, and prosperity"
            neg="Aggression, lust, and malice"
          />
          <WhatColorSays
            hex="D75148"
            name="Coral"
            pos="Warmth, feminism, freshness and energy"
            neg="Immaturity, and unrealism"
          />
          <WhatColorSays
            hex="FFBE00"
            name="Amber"
            pos="Warmth, positivity, and energy"
            neg="Anger and frustration"
          />
          <WhatColorSays
            hex="F6B003"
            name="Gold"
            pos="Sophistication, compassion, courage, and wisdom"
            neg="Arrogance, extravagance, over-ambition, and self-centeredness"
          />
          <WhatColorSays
            hex="40E328"
            name="Green"
            pos="Creativity, productivity, freshness, harmony, and rejuvenation"
            neg="Greed, jealousy, ambition, and materialism"
          />
          <WhatColorSays
            hex="5E5E5E"
            name="grey"
            pos="Sophistication, reliability, maturity, and practicality"
            neg="Dullness, self-centeredness, and depression"
          />
          <WhatColorSays
            hex="5B0CC3"
            name="Indigo"
            pos="Spirituality, wisdom, devotion, dignity, and creativity"
            neg="Narrow-mindedness"
          />
          <WhatColorSays
            hex="8A5FAA"
            name="Lavender"
            pos="Gracefulness, calmness, and creativity"
            neg="Impracticality, indecisiveness"
          />
          <WhatColorSays
            hex="BE007C"
            name="Magenta"
            pos="Kindness, self-respect, compassion, gentleness, and tolerance"
            neg="Arrogance, depression, and irritability"
          />
          <WhatColorSays
            hex="980203"
            name="Maroon"
            pos="Confidence, creativity, strength, beauty, love, and courage"
            neg="Indecisiveness"
          />
          <WhatColorSays
            hex="EA5D27"
            name="Orange"
            pos="Creativity, positivity, warmth, enthusiasm, and youthfulness"
            neg="Excessive free-spiritedness, impatience, and commitment-phobia"
          />
          <WhatColorSays
            hex="EA4591"
            name="Pink"
            pos="Romance, tenderness, feminism, playfulness, and positivity"
            neg="Immaturity, lack of self-esteem and will-power"
          />
          <WhatColorSays
            hex="B163C6"
            name="Purple"
            pos="Royalty, luxury, nobility, wisdom, and creativity"
            neg="Arrogance, extravagance, immaturity, and impracticality"
          />
          <WhatColorSays
            hex="FE0000"
            name="Red"
            pos="Vibrancy, determination, optimism, courage, ambition"
            neg="Aggression, impulsiveness, lust, impatience, domination"
          />
          <WhatColorSays
            hex="B5B5B5"
            name="Silver"
            pos="Calmness, sophistication, maturity, and intelligence"
            neg="Arrogance, sense of domination, and lack of emotion"
          />
          <WhatColorSays
            hex="109EAA"
            name="Teal"
            pos="Gentleness, calmness, strength, and elegance"
            neg="Lack of spontaneity"
          />
          <WhatColorSays
            hex="0CC8D1"
            name="Turquoise"
            pos="Calmness, freshness, healing power, and energy"
            neg="Emotional imbalance, and lack of expression"
          />
          <WhatColorSays
            hex="8821D2"
            name="Violet"
            pos="Gentleness, wisdom, royalty, creativity, and spirituality"
            neg="Immaturity, impracticality, and extravagance"
          />
          <WhatColorSays
            hex="FFFFFF"
            name="White"
            pos="Simplicity, purity, cleanliness, coolness, and positivity"
            neg="Loneliness, isolation, and a sense of coldness"
          />
          <WhatColorSays
            hex="E4CC01"
            name="Yellow"
            pos="Freshness, optimism, creativity, loyalty, and happiness"
            neg="Irrationality, fear, cowardice, and jealousy"
          />
        </div>
      </main>
      <Toast />
    </>
  );
}

/*
        <WhatColorSays
            hex=""
            name=""
            pos=""
            neg=""
          />
*/
