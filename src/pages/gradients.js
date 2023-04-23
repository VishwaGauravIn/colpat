import Head from "next/head";
import gradient from "@privjs/gradients";
import { useState } from "react";
import { ArrowRepeat, ClipboardCheck, Sliders } from "react-bootstrap-icons";
import codeCopier from "@/utils/codeCopier";
import Toast from "@/components/elements/toast/Toast";

export default function Gradients() {
  const [background, setBackground] = useState(gradient(Math.random()));
  return (
    <>
      <Head>
        <title>ColPat : Awesome Gradients ✨</title>
        <meta name="title" content="ColPat : Awesome Gradients ✨" />
        <meta
          name="description"
          content="ColPat's Awesome Gradients feature allows you to generate infinite gradients with ease. Gradients can add depth and texture to your designs and make them more visually appealing. With this feature, you can experiment with different color combinations and create gradients that suit your design needs.
"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://colpat.itsvg.in/gradients" />
        <meta property="og:title" content="ColPat : Awesome Gradients ✨" />
        <meta
          property="og:description"
          content="ColPat's Awesome Gradients feature allows you to generate infinite gradients with ease. Gradients can add depth and texture to your designs and make them more visually appealing. With this feature, you can experiment with different color combinations and create gradients that suit your design needs.
"
        />
        <meta
          property="og:image"
          content="https://colpat.itsvg.in/assets/3.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://colpat.itsvg.in/gradients"
        />
        <meta
          property="twitter:title"
          content="ColPat : Awesome Gradients ✨"
        />
        <meta
          property="twitter:description"
          content="ColPat's Awesome Gradients feature allows you to generate infinite gradients with ease. Gradients can add depth and texture to your designs and make them more visually appealing. With this feature, you can experiment with different color combinations and create gradients that suit your design needs.
"
        />
        <meta
          property="twitter:image"
          content="https://colpat.itsvg.in/assets/3.png"
        />
      </Head>
      <div className="w-full flex justify-center">
        <main className="w-full max-w-5xl flex flex-col items-center justify-center">
          <p className="text-3xl font-semibold text-white text-center mb-10">
            Awesome Gradients ✨
          </p>
          <div
            style={{
              backgroundImage: background,
            }}
            className="w-[90vw] rounded-xl ring-4 ring-offWhite/30 mx-4 aspect-square md:aspect-video max-w-xl"
          ></div>
          <div className="flex justify-evenly w-full my-10">
            <button
              className="rounded-full py-3 px-6 text-sm sm:text-base font-semibold bg-tint-teal text-black flex justify-center items-center gap-2 group hover:ring-4 ring-offWhite/40 active:scale-95 transition-all ease-in-out"
              onClick={() => setBackground(gradient(Math.random()))}
            >
              <ArrowRepeat className="h-6 w-6 group-hover:scale-90 transition-all ease-in-out" />
              Generate New
            </button>
            <button
              className="rounded-full py-3 px-6 text-sm sm:text-base font-semibold bg-tint-green text-black flex justify-center items-center gap-2 group hover:ring-4 ring-offWhite/40 active:scale-95 transition-all ease-in-out"
              onClick={() => codeCopier(`background-color: ${background};`)}
            >
              <ClipboardCheck className="h-6 w-6 group-hover:scale-90 transition-all ease-in-out" />
              Copy CSS
            </button>
          </div>
        </main>
      </div>
      <Toast />
    </>
  );
}
