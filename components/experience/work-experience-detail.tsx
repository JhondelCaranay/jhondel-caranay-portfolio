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
      key={workExp.id}
      variants={workExpDetailVariants}
      initial="hidden"
      animate="visible"
      className="border-colorPrimary relative h-fit rounded-md border-2 p-5"
    >
      <h3 className="text-colorPrimary flex gap-1 font-titleFont text-xl font-medium">
        {workExp.jobTitle}
      </h3>

      <p className="mt-1 text-sm font-medium text-colorDark">
        {workExp.company}
      </p>

      <div className="hover:text-colorPrimary right-5 top-5 cursor-pointer duration-300 md:absolute">
        <p className="mt-1 text-xs font-medium text-colorDark">
          {workExp.year}
        </p>
        <p className="mt-1 text-xs font-medium text-colorDark md:text-end">
          {workExp.type}
        </p>
      </div>

      <ul className="mt-6 flex flex-col gap-3 overflow-auto p-1">
        {descriptions.map((description, index) => (
          <li className="flex gap-2 text-base text-colorDark" key={index}>
            <span className="text-colorPrimary mt-1">
              <TiArrowForward />
            </span>
            <div>{description}</div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const workExpDetailVariants: Variants = {
  hidden: { opacity: 0, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.1, type: "spring", stiffness: 150, damping: 10 },
  },
};
