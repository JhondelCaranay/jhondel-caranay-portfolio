"use client";

/* PACKAGES */
import * as motion from "framer-motion/client";
import { useMemo } from "react";
import { AnimatePresence, Variants } from "framer-motion";
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
      className="mx-auto max-w-container overflow-x-clip py-10 lgl:px-20 lgl:py-24"
    >
      <SectionTitle title="Experience" titleNumber="II" />
      <div className="mt-10 flex w-full flex-col gap-8 md:flex-row">
        <WorkExperienceList
          data={workExperiences}
          handleChangeWorkExp={handleChangeWorkExp}
          activeWorkExp={workExp}
        />
        <AnimatePresence mode="wait">
          <WorkExperienceDetail
            key={getActiveWorkExp.id}
            workExp={getActiveWorkExp}
          />
        </AnimatePresence>
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
