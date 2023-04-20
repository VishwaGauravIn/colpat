import Toast, { customToast } from "@/components/elements/toast/Toast";
import codeCopier from "@/utils/codeCopier";
import getColorName from "@/utils/getColorName";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { SquareFill } from "react-bootstrap-icons";

var tinycolor = require("tinycolor2");

export default function PaletteFromColor() {
  const [color, setColor] = useState();
  useEffect(() => {
    setColor("#e53883");
  }, []);

  return (
    <>
      <Head>
        <title>ColPat : Color Palette from Color [AI]</title>
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
          <div className="flex flex-col gap-4">
            <p className="text-sm md:text-base text-center text-offWhite">
              Click on the color to copy it
            </p>
            {color && (
              <div className="flex gap-6">
                {tinycolor(color)
                  .analogous()
                  .splice(3)
                  .map((color, id) => (
                    <SquareFill
                      fill={color}
                      key={id}
                      className="border-2 border-white rounded-xl h-16 w-16"
                      title={color.toString()}
                      onClick={() => codeCopier(color)}
                    />
                  ))}
                {tinycolor(color)
                  .splitcomplement()
                  .splice(-2)
                  .map((color, id) => (
                    <SquareFill
                      fill={color}
                      key={id}
                      className="border-2 border-white rounded-xl h-16 w-16"
                      title={color.toString()}
                      onClick={() => codeCopier(color)}
                    />
                  ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Toast />
    </>
  );
}
