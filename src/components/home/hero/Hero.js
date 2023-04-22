import React from "react";
import HeroText from "./HeroText";
import HeroAnimation from "./HeroAnimation";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen justify-between">
      <div className="w-full md:w-6/12 sm:p-10 sm:pt-24 flex flex-col justify-evenly">
        <HeroText />
        <Link href="/dashboard">
          <button className="px-8 sm:px-10 md:px-16 w-full rounded-r-full py-4 md:py-6 self-center mx-10 md:mx-0 text-xl sm:text-3xl md:text-5xl mb-10 sm:mt-10 md:my-16 rounded-2xl bg-yellow text-black font-medium md:font-semibold hover:bg-tint-teal active:scale-[0.98] transition-all ease-in-out">
            Check Now <span className="animate-pulse">!</span>{" "}
          </button>
        </Link>
      </div>
      <div className="w-full md:w-6/12 h-80 md:h-auto flex justify-center items-center relative invert brightness-90">
        <HeroAnimation />
      </div>
    </div>
  );
}
