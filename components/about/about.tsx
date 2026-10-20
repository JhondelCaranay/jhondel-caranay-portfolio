"use client";

/* PACKAGES */
import Image from "next/image";
import useScrollView from "@/hooks/use-scroll-view";
import { motion, Variants } from "framer-motion";
/* UTILS */
import { backend, database, frontend, others } from "@/utils/data";
import { meCutoutImg } from "@/public";
/* COMPONENTS */
import { SkillList } from "./skill-list";
import { SectionTitle } from "../section-title";

const highlights = [
  { value: "2021", label: "Writing code since" },
  { value: "3", label: "Professional roles" },
  { value: "Full-stack", label: "End-to-end delivery" },
];

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
      className="mx-auto flex max-w-container flex-col gap-8 py-10 lgl:px-20 lgl:py-32"
    >
      <SectionTitle title="About Me" titleNumber="I" />
      <div className="flex flex-col gap-16 lgl:flex-row">
        {/* left side */}
        <div className="flex w-full flex-col gap-4 text-base font-medium leading-relaxed lgl:w-2/3">
          <p>
            Hello! I&apos;m Jhondel Caranay, a{" "}
            <span className="text-colorPrimary">full-stack web developer</span>{" "}
            who builds the business software companies run on every day: ERPs,
            point-of-sale systems, HR and inventory platforms.
          </p>
          <p>
            I started coding in college in 2021, and since then I&apos;ve worked
            on real production systems: improving a{" "}
            <span className="text-colorPrimary">
              warehouse inventory system
            </span>
            , migrating an{" "}
            <span className="text-colorPrimary">enterprise HR system</span> from
            VB.NET to React and Express, and building a{" "}
            <span className="text-colorPrimary">
              construction management and payroll system
            </span>{" "}
            from the ground up.
          </p>
          <p>
            I enjoy owning a product end to end, from designing the database and
            APIs to shipping a fast, responsive interface and keeping it running
            in production. I care about software that is correct, easy to
            maintain, and pleasant to use.
          </p>

          {/* highlights */}
          <div className="mt-4 grid grid-cols-3 gap-2 sml:gap-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-colorPrimary/30 px-1 py-3 text-center sml:p-3 md:p-4"
              >
                <p className="whitespace-nowrap font-titleFont text-sm font-bold text-colorPrimary sml:text-lg md:text-3xl lgl:text-xl xl:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 text-[11px] leading-tight text-colorDark sml:text-xs md:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-colorPrimary">Technologies I work with:</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <SkillList data={frontend} title="Front-end" />
            <SkillList data={backend} title="Back-end" />
            <SkillList data={database} title="Database" />
            <SkillList data={others} title="DevOps & Tools" />
          </div>
        </div>
        {/* right side */}
        <div className="group relative mx-auto h-80 w-full max-w-[24rem] lgl:sticky lgl:top-10 lgl:mx-0 lgl:w-1/3 lgl:max-w-[none]">
          {/* offset outline */}
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border-2 border-colorPrimary/60 duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />

          <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#112240] to-bodyColor ring-1 ring-colorPrimary/20">
            {/* glow behind the cutout */}
            <div className="absolute left-1/2 top-1/2 size-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-colorPrimary/25 blur-3xl duration-500 group-hover:bg-colorPrimary/40" />
            {/* dot grid, fading out toward the bottom */}
            <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(theme(colors.colorPrimary)_1px,transparent_1px)] [background-size:18px_18px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
            <Image
              src={meCutoutImg}
              fill
              className="object-cover object-top"
              alt="Jhondel Caranay"
              sizes="(min-width: 1024px) 33vw, 24rem"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const parentVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
  },
};
