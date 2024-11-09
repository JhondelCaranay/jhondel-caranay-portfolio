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

  return (
    <motion.div
      id="home"
      className="mx-auto flex max-w-contentContainer flex-col gap-4 py-10 mdl:px-10 mdl:py-24 lgl:gap-8 xl:px-4"
      variants={bannerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h3
        className="font-titleFont text-lg tracking-wide text-colorGreen"
        variants={bannerItemVariants}
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        className="flex flex-col font-titleFont text-2xl font-semibold lg:text-4xl"
        variants={bannerItemVariants}
      >
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
      </motion.h1>
      <motion.p
        className="text-base font-medium text-colorDark md:max-w-[650px]"
        variants={bannerItemVariants}
      >
        I am a skilled Web Developer proficient in React, Next.js, Express, and
        TypeScript. Experienced in creating responsive, user-friendly
        applications with a focus on clean code and effective problem-solving.
        Seeking opportunities to contribute my expertise in a dynamic
        development role.
        <a href="#about">
          <span className="group relative block h-7 w-fit cursor-pointer overflow-x-hidden text-colorGreen">
            Learn more
            <span className="absolute bottom-1 left-0 h-[1px] w-full -translate-x-full transform bg-colorGreen text-colorGreen transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
          </span>
        </a>
      </motion.p>
      <a href="#projects">
        <motion.button
          className="h-14 w-52 rounded-md border border-colorGreen font-titleFont text-sm tracking-wide text-colorGreen duration-300 hover:bg-HoverColor"
          variants={buttonVariants}
          whileHover="hover"
          initial="hidden"
          animate="visible"
        >
          Check out my Project!
        </motion.button>
      </a>
    </motion.div>
  );
};

const bannerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const bannerItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
      bounce: 1,
    },
  },
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
