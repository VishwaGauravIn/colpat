import TailwindShade from "@/components/elements/button/TailwindShade";
import Toast from "@/components/elements/toast/Toast";
import codeCopier from "@/utils/codeCopier";
import getColorName, { genericColorName } from "@/utils/getColorName";
import getColorPalette from "@/utils/getColorPalette";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { ArrowUpCircle, Recycle, SquareFill } from "react-bootstrap-icons";
import { ToastContainer } from "react-toastify";

const getColors = require("get-image-colors");

export default function Pfi() {
  const [img, setImg] = useState();
  const [colors, setColors] = useState([]);
  const [aiColors, setAiColors] = useState([]);

  const onImageChange = (e) => {
    if (e.target.files.length !== 0) {
      const [file] = e.target.files;
      setImg(URL.createObjectURL(file));
    }
  };
  useEffect(() => {
    if (img !== undefined) {
      getColors(img).then((clr) => {
        // `clr` is an array of color objects
        setColors(clr);
        // Test
        setAiColors(getColorPalette(clr[0].hex()));
      });
    }
  }, [img]);
  return (
    <div className="flex justify-center">
      <Head></Head>
      {img ? (
        // When Image has been selected
        <main className="flex flex-col sm:items-center gap-8 px-4 w-[64rem] mb-10">
          <p className="text-offWhite text-2xl font-semibold">Selected Image</p>
          <img
            src={img}
            alt=""
            className="max-h-96 w-max max-w-[90vw] aspect-auto rounded-lg"
          />
          {/* Generated palette */}
          <div className="flex flex-wrap gap-8 w-full justify-evenly">
            <div className="flex flex-col gap-8">
              <p className="text-offWhite flex flex-col">
                <span className="text-2xl font-semibold">
                  Generated Palette
                </span>
                <span className="opacity-75">
                  Click on the color to copy the hex code
                </span>
              </p>

              {colors.length !== 0 && (
                <div className="flex flex-col gap-4">
                  {colors.map((color, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <SquareFill
                        className="w-10 h-10"
                        fill={color.hex()}
                        title={getColorName(color.hex())}
                        onClick={() => codeCopier(color.hex())}
                      />
                      {genericColorName[index]} -
                      <span className="opacity-75">{color.hex()}</span>
                    </div>
                  ))}
                </div>
              )}
              <TailwindShade />
            </div>
            {/* Give option to generate tailwind scheme directly */}

            {/* Sugeested Palette */}
            <div className="flex flex-col gap-8">
              <p className="text-offWhite flex flex-col">
                <span className="text-2xl font-semibold">
                  AI Suggested Palette
                </span>
                <span className="opacity-75">
                  Click on the color to copy the hex code
                </span>
              </p>
              {aiColors.length !== 0 && (
                <div className="flex flex-col gap-4">
                  {aiColors.map((color, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <SquareFill
                        className="w-10 h-10"
                        fill={color}
                        title={getColorName(color)}
                        onClick={() => codeCopier(color)}
                      />
                      {genericColorName[index]} -
                      <span className="opacity-75">{color}</span>
                    </div>
                  ))}
                </div>
              )}
              <TailwindShade />
            </div>
          </div>
          <button
            className="rounded-full py-4 px-8 text-xl font-semibold bg-tint-red text-black flex justify-center items-center gap-2 group hover:ring-4 ring-offWhite/40"
            onClick={() => setImg("")}
          >
            <Recycle className="h-10 w-10 group-hover:scale-90 transition-all ease-in-out" />
            Change Image
          </button>
        </main>
      ) : (
        // When Image is not selected
        <main className="flex flex-col min-h-screen -mt-32 md:-mt-44 justify-center items-center gap-6 sm:gap-10 text-center">
          <>
            <p className="text-tint-fuchsia text-2xl sm:text-4xl font-semibold">
              Generate Color Palette from Image using AI
            </p>
            <button
              className="rounded-full py-4 px-8 text-xl font-semibold bg-tint-fuchsia text-black flex justify-center items-center gap-2 group hover:ring-4 ring-offWhite/40"
              onClick={() => document.getElementById("file_select").click()}
            >
              <ArrowUpCircle className="h-10 w-10 group-hover:scale-90 transition-all ease-in-out" />
              Upload Image
            </button>

            {/* Will be hidden */}
            <input
              id="file_select"
              type="file"
              className="hidden"
              onChange={onImageChange}
              accept="image/*"
            />
          </>
        </main>
      )}
      <Toast />
    </div>
  );
}
