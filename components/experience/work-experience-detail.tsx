import { WorkExperience } from "@/utils/types";
import { motion, Variants } from "framer-motion";
import { useMemo } from "react";
import { TiArrowForward } from "react-icons/ti";

type Props = {
  workExp: WorkExperience;
};

export const WorkExperienceDetail = ({ workExp }: Props) => {
  const descriptions = useMemo(
    () => workExp.description.split("</>"),
    [workExp.description],
  );

  return (
    <motion.div
      variants={workExpDetailVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="relative h-fit rounded-md border-2 border-colorPrimary p-5"
    >
      {/* title and dates share a row so long titles push the dates instead of overlapping them */}
      <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between md:gap-6">
        <div>
          <h3 className="flex gap-1 font-titleFont text-xl font-medium text-colorPrimary">
            {workExp.jobTitle}
          </h3>

          <p className="mt-1 text-sm font-medium text-colorDark">
            {workExp.company}
          </p>
        </div>

        <div className="shrink-0 md:text-end">
          <p className="mt-1 text-xs font-medium text-colorDark">
            {workExp.year}
          </p>
          <p className="mt-1 text-xs font-medium text-colorDark">
            {workExp.type}
          </p>
        </div>
      </div>

      <ul className="mt-6 flex flex-col gap-3 overflow-auto p-1">
        {descriptions.map((description, index) => (
          <li className="flex gap-2 text-base text-colorDark" key={index}>
            <span className="mt-1 text-colorPrimary">
              <TiArrowForward />
            </span>
            <div>{description}</div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const ease = [0.22, 1, 0.36, 1] as const;

// quick crossfade when switching jobs; no spring so nothing wobbles
const workExpDetailVariants: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease } },
  exit: { opacity: 0, x: -24, transition: { duration: 0.2, ease } },
};
