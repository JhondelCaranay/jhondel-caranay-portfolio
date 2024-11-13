"use client";

/* PACKAGES */
import * as motion from "framer-motion/client";
import { useMemo } from "react";
import { Variants } from "framer-motion";
import { useQueryState } from "nuqs";
/* UTILS */
import useScrollView from "@/hooks/use-scroll-view";
import { workExperiences } from "@/utils/data";

/* COMPONENTS */
import { WorkExperienceList } from "./work-experience-list";
import { WorkExperienceDetail } from "./work-experience-detail";
import { SectionTitle } from "../section-title";

export const WorkExperiences = () => {
  const { ref, mainControls } = useScrollView();

  const [workExp, setWorkExp] = useQueryState("workExp", {
    defaultValue: workExperiences[0].id,
  });

  const handleChangeWorkExp = (work: string) => {
    setWorkExp(work);
  };

  const getActiveWorkExp = useMemo(
    () => workExperiences.filter((experience) => experience.id === workExp)[0],
    [workExp],
  );

  return (
    <motion.div
      id="experience"
      ref={ref}
      variants={parentVariants}
      initial="hidden"
      animate={mainControls}
      className="mx-auto max-w-container px-4 py-10 lgl:px-20 lgl:py-24"
    >
      <SectionTitle title="Experience" titleNumber="II" />
      <div className="mt-10 flex w-full flex-col gap-8 md:flex-row">
        <WorkExperienceList
          data={workExperiences}
          handleChangeWorkExp={handleChangeWorkExp}
          activeWorkExp={workExp}
        />
        <WorkExperienceDetail workExp={getActiveWorkExp} />
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
