import React from "react";
import ShowDownBit from "./ShowDownBit";

export default function ShowDown() {
  return (
    <div className="w-full min-h-screen p-10 flex flex-col justify-center items-center gap-10 mb-10 md:mb-20">
      <ShowDownBit href="/dashboard" src="/assets/1.png" label="DASHBOARD" />
      <ShowDownBit href="/trending" src="/assets/2.png" label="TRENDINGPALETTES" />
      <ShowDownBit href="/gradients" src="/assets/3.png" label="AWESOMEGRADIENTS" />
      <ShowDownBit href="/tpg" src="/assets/8.png" label="TAILWINDPALETTE" />
      <ShowDownBit href="/pfi" src="/assets/5.png" label="PALETTEFROMIMAGE" />
      <ShowDownBit href="/palette-from-color" src="/assets/6.png" label="PALETTEFROMCOLOR" />
      <ShowDownBit href="/color-says" src="/assets/7.png" label="WHATCOLORSAYS" />
    </div>
  );
}
