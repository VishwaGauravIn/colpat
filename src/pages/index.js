import PreFooter from "@/components/home/PreFooter";
import Hero from "@/components/home/hero/Hero";
import ShowDown from "@/components/home/showdown/ShowDown";
import MouseTrail from "@pjsalita/react-mouse-trail";
import Head from "next/head";

export default function Home() {
  const config = {
    color: "#f8d593",
    idleAnimation: true,
    idleAnimationCount: 10,
    inverted: false,
    size: 20,
    trailCount: 20,
  };
  return (
    <>
      <Head>
        <title>ColPat : Color Palette & Design Tool</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <main className="-mt-24 cursor-none">
        <Hero />
        <ShowDown />
        <PreFooter />
      </main>
      <div className="hidden sm:block">
        <MouseTrail {...config} />
      </div>
    </>
  );
}
