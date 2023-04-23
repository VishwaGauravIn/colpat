import TailwindShade from "@/components/elements/button/TailwindShade";
import Toast from "@/components/elements/toast/Toast";
import codeCopier from "@/utils/codeCopier";
import getColorName from "@/utils/getColorName";
import Head from "next/head";
import React, { useLayoutEffect, useState } from "react";
import {
  CaretLeftFill,
  CaretRightFill,
  SquareFill,
} from "react-bootstrap-icons";

export default function Trending() {
  var col = require("nice-color-palettes/500");
  const [count, setCount] = useState(0);
  const [colors, setColors] = useState(get10);

  //   Get 10 colors from the list of 100 or 200 or 500 colors as displaying all at once would be pain in ass
  function get10() {
    let tempArray = [];
    for (let i = 10 * count; i < 10 * (count + 1); i++) {
      tempArray.push(col[i]);
    }
    return tempArray;
  }
  // When the user clicks on the button, scroll to the top of the document
  //   Smooth Varient
  function topFunction() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  useLayoutEffect(() => {
    setColors(get10);
    topFunction();
  }, [count]);
  return (
    <>
      <Head>
        <title>ColPat : Trending Palettes 🔥</title>
        <meta name="title" content="ColPat : Trending Palettes 🔥" />
        <meta
          name="description"
          content="ColPat's Trending Color Palettes feature allows you to stay on top of the latest color trends. Whether you're designing a website, creating a marketing campaign, or designing a product, this feature can help you select the most popular colors for your project. You can also customize the palettes to your liking with ColPat's user-friendly interface."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://colpat.itsvg.in/trending" />
        <meta property="og:title" content="ColPat : Trending Palettes 🔥" />
        <meta
          property="og:description"
          content="ColPat's Trending Color Palettes feature allows you to stay on top of the latest color trends. Whether you're designing a website, creating a marketing campaign, or designing a product, this feature can help you select the most popular colors for your project. You can also customize the palettes to your liking with ColPat's user-friendly interface."
        />
        <meta
          property="og:image"
          content="https://colpat.itsvg.in/assets/2.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://colpat.itsvg.in/trending"
        />
        <meta
          property="twitter:title"
          content="ColPat : Trending Palettes 🔥"
        />
        <meta
          property="twitter:description"
          content="ColPat's Trending Color Palettes feature allows you to stay on top of the latest color trends. Whether you're designing a website, creating a marketing campaign, or designing a product, this feature can help you select the most popular colors for your project. You can also customize the palettes to your liking with ColPat's user-friendly interface."
        />
        <meta
          property="twitter:image"
          content="https://colpat.itsvg.in/assets/2.png"
        />
      </Head>
      <div className="flex justify-center">
        <main className="flex flex-col sm:items-center gap-8 px-4 w-[64rem] mb-10 transition-all ease-in-out">
          <p className="text-3xl font-semibold text-white text-center">
            Trending Palettes 🔥
          </p>
          <p className="text-sm md:text-base text-center text-offWhite">
            Click on the color to copy it, hover mouse to get the color name!
          </p>
          <div className="flex flex-col gap-10 justify-center items-center">
            {colors.map((colors, i) => (
              <div
                key={i}
                className="flex gap-4 items-center flex-col sm:flex-row"
              >
                <div className="flex gap-2 items-center">
                  #{count * 10 + (i + 1)}
                  {colors.map((color, i) => (
                    <SquareFill
                      fill={color}
                      key={i}
                      className="w-12 sm:w-16 h-12 sm:h-16"
                      title={getColorName(color)}
                      onClick={() => codeCopier(color)}
                    />
                  ))}
                </div>
                <div className="ml-8">
                  <TailwindShade colors={colors} />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between w-full items-center">
            <button
              className="rounded-full py-3 px-6 text-base font-semibold bg-tint-yellow disabled:bg-grey disabled:text-offWhite text-black flex justify-center items-center gap-1 group hover:ring-4 ring-offWhite/40 disabled:cursor-not-allowed"
              disabled={count === 0}
              onClick={() => setCount(count - 1)}
            >
              <CaretLeftFill className="h-6 w-6 group-hover:scale-90 transition-all ease-in-out" />
              Previous
            </button>
            <span className="text-offWhite">{count + 1}/50</span>

            <button
              className="rounded-full py-3 px-6 text-base font-semibold bg-tint-yellow disabled:bg-grey disabled:text-offWhite text-black flex justify-center items-center gap-1 group hover:ring-4 ring-offWhite/40 disabled:cursor-not-allowed"
              disabled={count === 49}
              onClick={() => setCount(count + 1)}
            >
              Next
              <CaretRightFill className="h-6 w-6 group-hover:scale-90 transition-all ease-in-out" />
            </button>
          </div>
        </main>
      </div>
      <Toast />
    </>
  );
}
