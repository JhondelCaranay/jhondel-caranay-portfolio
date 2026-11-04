import { IconType } from "react-icons";

type Props = { data: string[]; title: string; icon: IconType };

// Same card, icon tile and tag styles as ServiceCard.
export const SkillList = ({ data, title, icon: Icon }: Props) => {
  return (
    <div className="group flex flex-col gap-4 rounded-lg border border-transparent bg-[#112240] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-colorPrimary/40 hover:shadow-lg hover:shadow-colorPrimary/10">
      <div className="flex items-center gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-colorPrimary/10 text-colorPrimary duration-300 group-hover:bg-colorPrimary/20">
          <Icon className="text-xl" />
        </div>
        <h4 className="font-titleFont text-base font-semibold tracking-wide duration-300 group-hover:text-colorPrimary">
          {title}
        </h4>
      </div>
      <ul className="flex flex-wrap gap-2 font-titleFont text-xs tracking-wide">
        {data.map((name) => (
          <li
            key={name}
            className="rounded-md bg-colorPrimary/10 px-2 py-1 text-colorPrimary"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};
