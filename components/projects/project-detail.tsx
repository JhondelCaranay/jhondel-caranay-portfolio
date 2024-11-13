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
          position === "right" ? "xl:flex-row" : "xl:flex-row-reverse",
        )}
      >
        {/* image */}
        <motion.div
          className="group relative h-auto w-full xl:w-1/2"
          ref={imageRef}
          custom={position}
          variants={imageVariants}
          initial="hidden"
          // animate="visible"
          animate={imageControls}
        >
          {/* <Link href={data.liveUrl} target="_blank"> */}
          <Image
            width={800}
            height={600}
            src={data.image}
            alt=""
            className="h-full w-full rounded-md object-cover"
          />
          {/* </Link> */}
          <div className="absolute left-0 top-0 size-full rounded-lg bg-colorGreen/10 duration-300 group-hover:bg-transparent"></div>
        </motion.div>

        {/* content */}
        <motion.div
          className={clsx(
            "z-10 flex h-full w-full flex-col gap-5 lgl:justify-between xl:w-1/2",
            position === "right" ? "xl:-ml-16" : "xl:-mr-16",
            position === "right" ? "text-right" : "text-left",
            position === "right" ? "xl:items-end" : "xl:items-start",
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
              position === "right" && "flex-row-reverse",
            )}
          >
            <h3 className="text-lg font-bold md:text-2xl">{data.title}</h3>
            <p
              className={clsx(
                "font-titleFont text-xs tracking-wide text-colorGreen md:text-base",
                // position === "right" ? "text-start" : "text-end",
              )}
            >
              {data.type}
            </p>
          </div>

          <p className="rounded-md bg-[#112240] p-2 text-xs md:p-6 md:text-sm">
            {data.content}
          </p>

          <TechStack data={data.techstack} position={position} />

          <div
            className={clsx(
              "flex items-center gap-4 text-2xl",
              position === "left" ? "justify-start" : "justify-end",
            )}
          >
            {data.codeUrl && (
              <Link
                href={data.codeUrl}
                target="_blank"
                className="duration-300 hover:text-colorGreen"
              >
                <TbBrandGithub />
              </Link>
            )}
            {data.liveUrl && (
              <Link
                href={data.liveUrl}
                target="_blank"
                className="duration-300 hover:text-colorGreen"
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

const imageVariants: Variants = {
  hidden: (position: string) => ({
    opacity: 0,
    x: position === "right" ? -200 : 200,
  }),
  visible: () => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  }),
};

const contentVariants: Variants = {
  hidden: (position: string) => ({
    opacity: 0,
    x: position === "right" ? 200 : -200,
  }),
  visible: () => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  }),
};
