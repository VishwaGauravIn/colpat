import { Char, Phrase } from "animatedtxt";
import Link from "next/link";
import React from "react";

export default function ShowDownBit({ href, src, label, size = 40 }) {
  let letters = label.split("");
  return (
    <>
      <div className="group w-full sm:w-8/12 ring rounded-lg sm:rounded-xl overflow-hidden ring-tint-fuchsia graysclae-0 sm:grayscale hover:grayscale-0 relative transition-all ease-in-out">
        <Link href={href}>
          <img
            src={src}
            alt=""
            className="pointer-events-none select-none"
            draggable="false"
          />
          <div className="absolute w-full h-20 bg-black/30 backdrop-blur-lg z-10 left-0 right-0 bottom-0 hidden lg:group-hover:flex justify-center">
            <Phrase color="white" margin={10} size={size}>
              {letters.map((letter, id) => (
                <Char key={id} char={letter} />
              ))}
            </Phrase>
          </div>
          <div className="absolute w-full h-20 bg-black/30 backdrop-blur-lg z-10 left-0 right-0 bottom-0 hidden md:group-hover:flex lg:group-hover:hidden justify-center">
            <Phrase color="white" margin={10} size={20}>
              {letters.map((letter, id) => (
                <Char key={id} char={letter} />
              ))}
            </Phrase>
          </div>
          <div className="absolute w-full h-10 bg-black/30 backdrop-blur-lg z-10 left-0 right-0 bottom-0 flex md:group-hover:hidden justify-center">
            <Phrase color="white" margin={10} size={10}>
              {letters.map((letter, id) => (
                <Char key={id} char={letter} />
              ))}
            </Phrase>
          </div>
        </Link>
      </div>
    </>
  );
}
