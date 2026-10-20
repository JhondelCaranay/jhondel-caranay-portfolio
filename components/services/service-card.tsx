import { ServiceType } from "@/utils/types";

type Props = {
  data: ServiceType;
};

export const ServiceCard = ({ data }: Props) => {
  return (
    <div className="group flex h-full w-full flex-col gap-5 rounded-lg border border-transparent bg-[#112240] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-colorPrimary/40 hover:shadow-lg hover:shadow-colorPrimary/10">
      {/* icon + number */}
      <div className="flex items-start justify-between">
        <div className="flex size-14 items-center justify-center rounded-md bg-colorPrimary/10 text-colorPrimary duration-300 group-hover:bg-colorPrimary/20">
          <data.icon className="text-3xl" />
        </div>
        <span className="font-titleFont text-sm tracking-widest text-colorDark">
          {data.id.padStart(2, "0")}
        </span>
      </div>

      <div>
        <h3 className="font-titleFont text-xl font-semibold tracking-wide duration-300 group-hover:text-colorPrimary">
          {data.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-colorDark">
          {data.description}
        </p>
      </div>

      <p className="border-l-2 border-colorPrimary/60 pl-3 text-sm leading-relaxed">
        {data.details}
      </p>

      {/* tags sit at the bottom so cards line up */}
      <ul className="mt-auto flex flex-wrap gap-2 pt-2 font-titleFont text-xs tracking-wide">
        {data.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-md bg-colorPrimary/10 px-2 py-1 text-colorPrimary"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};
