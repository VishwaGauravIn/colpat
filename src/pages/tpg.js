import Toast from "@/components/elements/toast/Toast";
import ColorPicker from "@/components/globals/ColorPicker";
import { genericColorName } from "@/utils/getColorName";
import { tailwindcssPaletteGenerator } from "@bobthered/tailwindcss-palette-generator";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import stringify from "json-stringify-pretty-compact";
import Highlight, { defaultProps } from "prism-react-renderer";
import { Brush, Clipboard2Check } from "react-bootstrap-icons";
import codeCopier from "@/utils/codeCopier";
import Head from "next/head";

export default function Tpg() {
  const router = useRouter();
  const [tailwindShades, setTailwindShades] = useState("");
  useEffect(() => {
    if (router.isReady) {
    }
  }, [router.isReady]);

  //  WARN: Using Dom method to avoid redering
  function getEncodedVal(id) {
    return encodeURIComponent(document.getElementById(`${id}_val`).value);
  }
  function getVal(id) {
    return document.getElementById(`${id}_val`).value;
  }
  function onChangeTrigger() {
    router.push(
      `?col1=${getEncodedVal("col1")}&col2=${getEncodedVal(
        "col2"
      )}&col3=${getEncodedVal("col3")}&col4=${getEncodedVal(
        "col4"
      )}&col5=${getEncodedVal("col5")}`
    );
    updateTailwindShades();
  }
  function updateTailwindShades() {
    setTailwindShades(
      tailwindcssPaletteGenerator([
        getVal("col1"),
        getVal("col2"),
        getVal("col3"),
        getVal("col4"),
        getVal("col5"),
      ])
    );
  }
  return (
    <>
      <Head>
        <title>ColPat : TailwindCSS Palette Generator</title>
        <meta name="title" content="ColPat : TailwindCSS Palette Generator" />
        <meta
          name="description"
          content="ColPat's Tailwind Palette Generator feature is specifically designed for developers who use Tailwind CSS. With just a click, you can generate color palettes for your next Tailwind-powered project. This feature saves you time and effort in selecting colors that match Tailwind's design system."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://colpat.itsvg.in/tpg" />
        <meta
          property="og:title"
          content="ColPat : TailwindCSS Palette Generator"
        />
        <meta
          property="og:description"
          content="ColPat's Tailwind Palette Generator feature is specifically designed for developers who use Tailwind CSS. With just a click, you can generate color palettes for your next Tailwind-powered project. This feature saves you time and effort in selecting colors that match Tailwind's design system."
        />
        <meta
          property="og:image"
          content="https://colpat.itsvg.in/assets/8.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://colpat.itsvg.in/tpg" />
        <meta
          property="twitter:title"
          content="ColPat : TailwindCSS Palette Generator"
        />
        <meta
          property="twitter:description"
          content="ColPat's Tailwind Palette Generator feature is specifically designed for developers who use Tailwind CSS. With just a click, you can generate color palettes for your next Tailwind-powered project. This feature saves you time and effort in selecting colors that match Tailwind's design system."
        />
        <meta
          property="twitter:image"
          content="https://colpat.itsvg.in/assets/8.png"
        />
      </Head>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-5xl flex items-center flex-col gap-10">
          <p className="text-3xl font-semibold text-white text-center">
            TailwindCSS Palette Generator
          </p>
          <p className="text-sm md:text-base text-center text-offWhite">
            Click on the color to change it, once selected, just click on
            generate to create the palette!
          </p>
          <div className="w-full flex flex-wrap justify-evenly">
            <ColorPicker
              id="col1"
              label={genericColorName[0]}
              onChangeTrigger={onChangeTrigger}
              updateTailwindShades={updateTailwindShades}
            />
            <ColorPicker
              id="col2"
              label={genericColorName[1]}
              onChangeTrigger={onChangeTrigger}
              updateTailwindShades={updateTailwindShades}
            />
            <ColorPicker
              id="col3"
              label={genericColorName[2]}
              onChangeTrigger={onChangeTrigger}
              updateTailwindShades={updateTailwindShades}
            />
            <ColorPicker
              id="col4"
              label={genericColorName[3]}
              onChangeTrigger={onChangeTrigger}
              updateTailwindShades={updateTailwindShades}
            />
            <ColorPicker
              id="col5"
              label={genericColorName[4]}
              onChangeTrigger={onChangeTrigger}
              updateTailwindShades={updateTailwindShades}
            />
          </div>
          <button
            className="rounded-full py-3 px-6 text-xl font-semibold bg-tint-emerald text-black flex justify-center items-center gap-2 group hover:ring-4 ring-offWhite/40"
            onClick={onChangeTrigger}
          >
            <Brush className="h-8 w-8 group-hover:scale-90 transition-all ease-in-out" />
            Generate
          </button>

          {router.isReady && (
            <Highlight
              {...defaultProps}
              code={stringify(tailwindShades)}
              language="js"
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className={`${className} rounded-lg p-4 w-full max-w-3xl`}
                  style={style}
                >
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          )}
          <button
            className="rounded-full py-3 px-6 text-xl font-semibold bg-tint-emerald text-black flex justify-center items-center gap-2 group hover:ring-4 ring-offWhite/40"
            onClick={() => codeCopier(stringify(tailwindShades))}
          >
            <Clipboard2Check className="h-8 w-8 group-hover:scale-90 transition-all ease-in-out" />
            One Click Copy
          </button>
        </div>
      </div>
      <Toast />
    </>
  );
}
