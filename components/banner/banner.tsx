"use client";

import { typewriterData } from "@/utils/data";
import { useEffect, useState } from "react";
import TypewriterComponent, { Options } from "typewriter-effect";

export const Banner = () => {
  const [autoStart, setAutoStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoStart(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Entrance animations are plain CSS so the text paints before hydration
  // (Framer Motion's initial="hidden" kept it invisible until JS loaded).
  return (
    <div
      id="home"
      className="mx-auto flex min-h-[calc(88vh-2rem)] max-w-contentContainer flex-col justify-center gap-5 py-10 mdl:px-10 lgl:gap-6 xl:px-4"
    >
      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-colorPrimary/30 bg-colorPrimary/5 px-3 py-1 font-titleFont text-xs tracking-wide text-colorPrimary motion-safe:animate-fadeUp">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full rounded-full bg-colorPrimary opacity-75 motion-safe:animate-ping" />
          <span className="relative inline-flex size-2 rounded-full bg-colorPrimary" />
        </span>
        Open to new opportunities
      </span>

      <p className="font-titleFont text-base tracking-wide text-colorPrimary motion-safe:animate-fadeUp motion-safe:[animation-delay:100ms] md:text-lg">
        Hi, my name is
      </p>

      <h1 className="font-titleFont text-4xl font-bold leading-tight text-colorLight motion-safe:animate-fadeUp motion-safe:[animation-delay:150ms] md:text-6xl lgl:text-7xl">
        Jhondel Caranay.
      </h1>

      {/* fixed height so wrapping lines don't push the content below */}
      <div className="min-h-[2.6em] font-titleFont text-2xl font-semibold leading-tight text-colorDark motion-safe:animate-fadeUp motion-safe:[animation-delay:200ms] md:min-h-[1.3em] md:text-4xl lgl:text-5xl">
        <TypewriterComponent
          options={
            {
              strings: typewriterData,
              autoStart: autoStart,
              loop: true,
              delay: 50,
              deleteSpeed: 25,
              pauseFor: 2000,
            } as Partial<Options>
          }
        />
      </div>

      <p className="max-w-[40rem] text-base leading-relaxed text-colorDark motion-safe:animate-fadeUp motion-safe:[animation-delay:250ms] md:text-lg">
        I&apos;m a full-stack web developer who builds{" "}
        <span className="text-colorPrimary">business software</span> such as
        ERPs, POS and inventory systems, working across React, Next.js, Express
        and TypeScript, from the database to deployment.
      </p>

      <div className="mt-4 flex flex-wrap gap-4 motion-safe:animate-fadeUp motion-safe:[animation-delay:350ms]">
        <a
          href="#projects"
          className="rounded-md bg-colorPrimary px-7 py-4 font-titleFont text-sm font-semibold tracking-wide text-bodyColor duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-colorPrimary/30"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="rounded-md border border-colorPrimary px-7 py-4 font-titleFont text-sm tracking-wide text-colorPrimary duration-300 hover:-translate-y-1 hover:bg-colorPrimary/10"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
};
