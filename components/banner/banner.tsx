"use client";

import { typewriterData } from "@/utils/data";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import TypewriterComponent, { Options } from "typewriter-effect";

export const Banner = () => {
  const [autoStart, setAutoStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoStart(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Entrance animations are plain CSS so the text paints before hydration
  // (Framer Motion's initial="hidden" kept it invisible until JS loaded).
  return (
    <div
      id="home"
      className="mx-auto flex max-w-contentContainer flex-col gap-4 py-10 mdl:px-10 mdl:py-24 lgl:gap-8 xl:px-4"
    >
      <p className="font-titleFont text-lg tracking-wide text-colorPrimary motion-safe:animate-fadeUp">
        Hi, my name is
      </p>
      <h1 className="flex flex-col font-titleFont text-2xl font-semibold motion-safe:animate-fadeUp motion-safe:[animation-delay:100ms] lg:text-4xl">
        Jhondel Delicona Caranay
        <span>
          <TypewriterComponent
            options={
              {
                strings: typewriterData,
                autoStart: autoStart,
                loop: true,
                pauseFor: 0,
              } as Partial<Options>
            }
          />
        </span>
      </h1>
      <p className="text-base font-medium text-colorDark motion-safe:animate-fadeUp motion-safe:[animation-delay:200ms] md:max-w-[650px]">
        I am a skilled Web Developer proficient in React, Next.js, Express, and
        TypeScript. Experienced in creating responsive, user-friendly
        applications with a focus on clean code and effective problem-solving.
        Seeking opportunities to contribute my expertise in a dynamic
        development role.
        <a href="#about">
          <span className="group relative block h-7 w-fit cursor-pointer overflow-x-hidden text-colorPrimary">
            Learn more
            <span className="absolute bottom-1 left-0 h-[1px] w-full -translate-x-full transform bg-colorPrimary text-colorPrimary transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
          </span>
        </a>
      </p>
      <a href="#projects" className="w-fit motion-safe:animate-popIn">
        <motion.button
          className="h-14 w-52 rounded-md border border-colorPrimary font-titleFont text-sm tracking-wide text-colorPrimary duration-300 hover:bg-HoverColor"
          variants={buttonVariants}
          whileHover="hover"
        >
          Check out my Project!
        </motion.button>
      </a>
    </div>
  );
};

const buttonVariants: Variants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.4,
      repeat: Infinity,
    },
  },
};
