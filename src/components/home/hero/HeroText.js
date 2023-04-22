import React from "react";
import { Phrase, Char } from "animatedtxt";

export default function HeroText() {
  return (
    <>
      <div className="md:flex flex-col gap-6 hidden">
        <Phrase color="#FEC2B2" margin={10}>
          <Char char="A" />
          <Char char="I" delay={0.5} />
        </Phrase>
        <Phrase color="#D3F1F9" margin={10}>
          <Char char="M" />
          <Char char="E" delay={0.5} />
          <Char char="E" delay={1} />
          <Char char="T" delay={1.5} />
          <Char char="S" delay={2} />
        </Phrase>
        <Phrase color="#B0D2C2" margin={10}>
          <Char char="C" />
          <Char char="O" delay={0.5} />
          <Char char="L" delay={1} />
          <Char char="O" delay={1.5} />
          <Char char="R" delay={2} />
        </Phrase>
      </div>
      <div className="flex flex-col gap-6 p-10 pt-24 md:hidden">
        <Phrase color="#FEC2B2" margin={10} size={50}>
          <Char char="A" />
          <Char char="I" />
        </Phrase>
        <Phrase color="#D3F1F9" margin={10} size={50}>
          <Char char="M" />
          <Char char="E" />
          <Char char="E" />
          <Char char="T" />
          <Char char="S" />
        </Phrase>
        <Phrase color="#B0D2C2" margin={10} size={50}>
          <Char char="C" />
          <Char char="O" />
          <Char char="L" />
          <Char char="O" />
          <Char char="R" />
        </Phrase>
      </div>
    </>
  );
}
