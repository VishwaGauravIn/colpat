import React from "react";
import HeroText from "./HeroText";
import HeroAnimation from "./HeroAnimation";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen justify-between items-center">
      <div className="w-full lg:w-6/12 sm:p-10 sm:pt-24 flex flex-col justify-evenly">
        <HeroText />
        <Link href="/dashboard">
          <button className="px-8 sm:px-10 md:px-16 w-full rounded-r-full py-4 md:py-6 self-center mx-10 md:mx-0 text-xl sm:text-3xl md:text-5xl mb-10 sm:mt-10 md:my-16 rounded-2xl bg-yellow text-black font-medium md:font-semibold hover:bg-tint-teal active:scale-[0.98] transition-all ease-in-out">
            Check Now <span className="animate-pulse">!</span>{" "}
          </button>
        </Link>
      </div>
      <div className="w-[90%] self-center lg:w-5/12 max-h-[85vh] overflow-hidden flex flex-wrap justify-center items-center relative rounded-2xl lg:mr-10">
        <HeroAnimation />
      </div>
    </div>
  );
}
