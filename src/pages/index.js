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
        <meta
          name="description"
          content="ColPat is the ultimate color palette generator with awesome tools. ColPat's AI, user-friendly interface, and customization options make it easy to find the perfect colors. Unleash your creativity and elevate your designs with ColPat!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="ColPat, Color Palette, Gradient, Shade Generator, Color Shade, Tailwind"
        />
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
