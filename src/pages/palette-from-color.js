import TailwindShade from "@/components/elements/button/TailwindShade";
import Toast, { customToast } from "@/components/elements/toast/Toast";
import codeCopier from "@/utils/codeCopier";
import getColorName from "@/utils/getColorName";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { SquareFill } from "react-bootstrap-icons";

var tinycolor = require("tinycolor2");

export default function PaletteFromColor() {
  const [color, setColor] = useState();
  const [palette, setPalette] = useState([]);
  // automatically seeting the initial color, doing this way to dodge the render mismatch issue
  useEffect(() => {
    setColor("#e53883");
  }, []);

  useEffect(() => {
    // creating a temp array
    let temp = [];
    // pushing the top 3 analgous colors (hex value)
    tinycolor(color)
      .analogous()
      .splice(3)
      .map((color) => temp.push("#" + tinycolor(color).toHex()));
    // pushing the last 2 complement colors (hex value)
    tinycolor(color)
      .splitcomplement()
      .splice(-2)
      .map((color) => temp.push("#" + tinycolor(color).toHex()));
    // finally assigning temp array value to
    setPalette(temp);
  }, [color]);

  return (
    <>
      <Head>
        <title>ColPat : Color Palette from Color [AI]</title>
        <meta name="title" content="ColPat : Color Palette from Color [AI]" />
        <meta
          name="description"
          content="ColPat's Color Palette from Color [AI] feature allows you to generate a color palette from a single color. Just tell ColPat about the color you want to use, and it will generate the best color palette for you. This feature is useful when you have a specific color in mind and want to build a palette around it."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://colpat.itsvg.in/palette-from-color"
        />
        <meta
          property="og:title"
          content="ColPat : Color Palette from Color [AI]"
        />
        <meta
          property="og:description"
          content="ColPat's Color Palette from Color [AI] feature allows you to generate a color palette from a single color. Just tell ColPat about the color you want to use, and it will generate the best color palette for you. This feature is useful when you have a specific color in mind and want to build a palette around it."
        />
        <meta
          property="og:image"
          content="https://colpat.itsvg.in/assets/6.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://colpat.itsvg.in/palette-from-color"
        />
        <meta
          property="twitter:title"
          content="ColPat : Color Palette from Color [AI]"
        />
        <meta
          property="twitter:description"
          content="ColPat's Color Palette from Color [AI] feature allows you to generate a color palette from a single color. Just tell ColPat about the color you want to use, and it will generate the best color palette for you. This feature is useful when you have a specific color in mind and want to build a palette around it."
        />
        <meta
          property="twitter:image"
          content="https://colpat.itsvg.in/assets/6.png"
        />
      </Head>
      <main className="flex flex-col sm:items-center gap-8 px-4 w-full mb-10 transition-all ease-in-out">
        <p className="text-3xl font-semibold text-white text-center">
          Color Palette from Color [AI]
        </p>
        <p className="text-sm md:text-base text-center text-offWhite">
          Click on the color to change it
        </p>
        <div className="flex px-4 md:w-10/12 gap-10 flex-wrap flex-col items-center">
          <div className="flex flex-col gap-2 w-24 justify-center items-center m-4 big">
            {/* doing this way to dodge the render mismatch issue */}
            {color && (
              <input
                type="color"
                defaultValue={color}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
                className="outline-none bg-transparent h-36 w-36 rounded-full overflow-hidden transition-all ease-in-out duration-100 ring ring-grey"
              />
            )}
            <span className="font-semibold">{color}</span>
            <button
              className="text-xs bg-tint-emerald text-black w-full py-1 rounded-sm hover:ring-2 ring-offWhite/40"
              onClick={() =>
                customToast(`Color name is: ${getColorName(color)}`)
              }
            >
              Check name
            </button>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <p className="text-sm md:text-base text-center text-offWhite">
              Click on the color to copy it
            </p>
            {color && (
              <div className="flex gap-6">
                {palette.map((color, id) => (
                  <SquareFill
                    fill={color}
                    key={id}
                    className="border-2 border-white rounded-xl h-16 w-16"
                    title={color}
                    onClick={() => codeCopier(color)}
                  />
                ))}
              </div>
            )}
            <TailwindShade colors={palette} />
          </div>
        </div>
      </main>
      <Toast />
    </>
  );
}
