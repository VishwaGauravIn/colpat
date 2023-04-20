import codeCopier from "@/utils/codeCopier";
import React from "react";
import { DashCircleFill, PlusCircleFill } from "react-bootstrap-icons";
import ShadeGenerator from "shade-generator";

export default function WhatColorSays({ hex, name, pos, neg }) {
  return (
    <div className="w-72 rounded-xl overflow-hidden">
      <div
        style={{
          background: `#${hex}`,
          color:
            ShadeGenerator.hue(`#${hex}`).shadesMap("hex")[500] === "#000000"
              ? "#e5e5e5"
              : ShadeGenerator.hue(`#${hex}`).shadesMap("hex")[900],
        }}
        className="h-32 w-full flex justify-center items-center font-semibold text-4xl hover:brightness-90 active:brightness-110 transition-all ease-in-out ring-2 ring-white/80 cursor-pointer"
        onClick={() => codeCopier(`#${hex}`)}
      >
        {name}
      </div>
      <p className="pt-6 px-2 flex break-word gap-2">
        <PlusCircleFill className="w-6 h-6 text-tint-green flex-shrink-0" />{" "}
        {pos}
      </p>
      <p className="pt-6 px-2 flex break-word gap-2">
        <DashCircleFill className="w-6 h-6 text-tint-red flex-shrink-0" /> {neg}
      </p>
    </div>
  );
}
