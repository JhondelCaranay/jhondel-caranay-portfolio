"use client";

/* PACKAGES */
import Image from "next/image";
import useScrollView from "@/hooks/use-scroll-view";
import { motion, Variants } from "framer-motion";
/* UTILS */
import { meImg } from "@/assets";
import { backend, database, frontend, others } from "@/utils/data";
/* COMPONENTS */
import SectionTitle from "../section-title";
import { SkillList } from "./skill-list";

export const About = () => {
  // animate on scroll when in view
  const { ref, mainControls } = useScrollView();

  return (
    <motion.div
      id="about"
      ref={ref}
      variants={parentVariants}
      initial="hidden"
      animate={mainControls}
      className="mx-auto flex max-w-contentContainer flex-col gap-8 py-10 lgl:py-32 xl:px-4"
    >
      <SectionTitle title="About Me" titleNumber="01" />
      <div className="flex flex-col gap-16 lgl:flex-row">
        {/* left side */}
        <div className="text-textDark flex w-full flex-col gap-4 text-base font-medium lgl:w-2/3">
          <p>
            Hello! I&apos;m Jhondel Caranay, a passionate web developer with a
            keen interest in building innovative digital experiences. My journey
            in web development began in 2021 when I first explored it in
            college. Since then, I&apos;ve honed my skills in creating dynamic
            websites and web applications, leveraging technologies like ReactJS,
            NestJS, and NextJS. Im driven by the challenge of transforming ideas
            into functional and engaging online solutions.
          </p>
          <p className="text-colorGreen">
            Here are a few technologies I&apos;ve been exploring and working
            with recently:
          </p>
          <div className="mt-6 grid grid-cols-2 gap-2 font-titleFont text-sm">
            <SkillList data={frontend} title="Front-end" />
            <SkillList data={backend} title="Back-end" />
          </div>
          <div className="mt-6 grid grid-cols-2 gap-2 font-titleFont text-sm">
            <SkillList data={database} title="Database" />
            <SkillList data={others} title="Others" />
          </div>
        </div>
        {/* right side */}
        <div className="group relative h-80 w-full lgl:w-1/3">
          <div className="absolute -left-6 -top-6 h-80 w-full rounded-lg">
            <div className="relative z-20 flex h-full w-full pl-6 lgl:pl-0">
              <Image
                src={meImg}
                className="h-full w-full rounded-lg object-cover"
                alt="profile image"
              />
              <div className="absolute left-0 top-0 hidden h-80 w-full rounded-md bg-colorGreen/20 duration-300 group-hover:bg-transparent lgl:inline-block"></div>
            </div>
          </div>
          <div className="hidden h-80 w-full rounded-md border-2 border-colorGreen transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2 lgl:inline-flex" />
        </div>
      </div>
    </motion.div>
  );
};

const parentVariants: Variants = {
  hidden: { opacity: 0, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.3, type: "spring", stiffness: 100, damping: 20 },
  },
};
