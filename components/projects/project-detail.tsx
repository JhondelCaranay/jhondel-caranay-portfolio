/* PACKAGES */
import * as motion from "framer-motion/client";
import clsx from "clsx";
import { useMemo } from "react";
/* UTILS */
import useScrollView from "@/hooks/use-scroll-view";
/* COMPONENTS */
import Link from "next/link";
import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import { Variants } from "framer-motion";
import { ProjectType } from "@/utils/types";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TechStack } from "./tech-stack";
import { ProjectVideo } from "./project-video";

type Props = {
  data: ProjectType;
};

export const ProjectDetail = ({ data }: Props) => {
  const { ref: imageRef, mainControls: imageControls } = useScrollView();
  const { ref: contentRef, mainControls: contentControls } = useScrollView();

  const position = useMemo(() => {
    return parseInt(data.id) % 2 !== 0 ? "left" : "right";
  }, [data.id]);

  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-28">
      <div
        className={clsx(
          "flex flex-col gap-6",
          position === "right" ? "lgl:flex-row" : "lgl:flex-row-reverse",
        )}
      >
        {/* image */}
        <motion.div
          className="group relative h-auto w-full lgl:w-1/2 lgl:self-center"
          ref={imageRef}
          custom={position}
          variants={imageVariants}
          initial="hidden"
          // animate="visible"
          animate={imageControls}
        >
          {/* <Link href={data.liveUrl} target="_blank"> */}
          {data.video ? (
            <ProjectVideo
              src={data.video}
              poster={data.image}
              title={data.title}
            />
          ) : (
            <Image
              width={800}
              height={600}
              src={data.image}
              alt={`${data.title} screenshot`}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-full w-full rounded-md object-cover"
            />
          )}
          {/* </Link> */}
          <div className="absolute left-0 top-0 size-full rounded-lg bg-colorPrimary/10 duration-300 group-hover:bg-transparent"></div>
        </motion.div>

        {/* content */}
        <motion.div
          className={clsx(
            "z-10 flex h-full w-full flex-col gap-5 lgl:w-1/2 lgl:justify-between",
            position === "right" ? "lgl:-ml-16" : "lgl:-mr-16",
            position === "right" && "lgl:text-right",
            position === "right" ? "lgl:items-end" : "lgl:items-start",
          )}
          ref={contentRef}
          custom={position}
          variants={contentVariants}
          initial="hidden"
          // animate="visible"
          animate={contentControls}
        >
          <div
            className={clsx(
              "flex w-full flex-col justify-start",
              position === "right" ? "lgl:pl-16" : "lgl:pr-16",
            )}
          >
            <h3 className="text-lg font-bold md:text-2xl">{data.title}</h3>
            <p
              className={clsx(
                "font-titleFont text-xs tracking-wide text-colorPrimary md:text-base",
                // position === "right" ? "text-start" : "text-end",
              )}
            >
              {data.type}
            </p>
          </div>

          <p className="rounded-md bg-[#112240] p-4 text-sm leading-relaxed md:p-6 md:text-base">
            {data.content}
          </p>

          <TechStack data={data.techstack} position={position} />

          <div
            className={clsx(
              "flex items-center gap-4 text-2xl",
              position === "right" && "lgl:justify-end",
            )}
          >
            {data.caseStudyUrl && (
              <Link
                href={data.caseStudyUrl}
                className="group/cs inline-flex items-center gap-2 rounded-md border border-colorPrimary px-4 py-2 font-titleFont text-sm tracking-wide text-colorPrimary duration-300 hover:bg-colorPrimary/10"
              >
                Read case study
                <span className="duration-300 group-hover/cs:translate-x-1">
                  &rarr;
                </span>
              </Link>
            )}
            {data.codeUrl && (
              <Link
                href={data.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${data.title} source code`}
                className="duration-300 hover:text-colorPrimary"
              >
                <TbBrandGithub />
              </Link>
            )}
            {data.liveUrl && (
              <Link
                href={data.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${data.title} live demo`}
                className="duration-300 hover:text-colorPrimary"
              >
                <RxOpenInNewWindow />
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// short eased slide instead of a long spring so the cards glide in without overshoot
const ease = [0.22, 1, 0.36, 1] as const;

const imageVariants: Variants = {
  hidden: (position: string) => ({
    opacity: 0,
    x: position === "right" ? -60 : 60,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease },
  },
};

const contentVariants: Variants = {
  hidden: (position: string) => ({
    opacity: 0,
    x: position === "right" ? 60 : -60,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.15, ease },
  },
};
