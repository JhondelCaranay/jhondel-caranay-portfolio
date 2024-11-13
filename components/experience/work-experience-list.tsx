import { WorkExperience } from "@/utils/types";
import clsx from "clsx";

type Props = {
  data: WorkExperience[];
  handleChangeWorkExp: (work: string) => void;
  activeWorkExp: string;
};
export const WorkExperienceList = ({
  data,
  handleChangeWorkExp,
  activeWorkExp,
}: Props) => {
  return (
    <ul className="scrollbar-thin-teal flex max-h-[176px] min-w-fit flex-col overflow-auto">
      {data.map((experience) => {
        const isActive = activeWorkExp === experience.id;
        return (
          <li
            key={experience.id}
            className={clsx(
              "cursor-pointer border-l-2 bg-transparent px-8 py-3 text-sm duration-300 hover:bg-[#112240]",
              isActive ? "border-l-colorPrimary" : "border-l-HoverColor",
              isActive ? "text-colorPrimary" : "text-textDark",
            )}
            onClick={() => handleChangeWorkExp(experience.id)}
          >
            {experience.jobTitle}
          </li>
        );
      })}
    </ul>
  );
};
