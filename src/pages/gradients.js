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
