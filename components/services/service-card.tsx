import { ServiceType } from "@/utils/types";
// import { FaRegFolder } from "react-icons/fa";
// import { RxOpenInNewWindow } from "react-icons/rx";

type Props = {
  data: ServiceType;
};

export const ServiceCard = ({ data }: Props) => {
  return (
    <div className="group flex h-96 w-full flex-col justify-center gap-6 rounded-lg bg-[#112240] p-7 transition-transform duration-300 hover:translate-y-2">
      <div className="flex items-center justify-center">
        {/* <FaRegFolder className="text-colorPrimary text-4xl" /> */}
        {/* <RxOpenInNewWindow className="hover:text-colorPrimary text-4xl" /> */}
        {<data.icon className="group-hover:text-colorPrimary text-4xl" />}
      </div>

      <div className="">
        <h2 className="group-hover:text-colorPrimary text-center font-titleFont text-xl font-semibold tracking-wide">
          {data.title}
        </h2>
        <p className="mt-3 text-center text-sm">{data.description}</p>
      </div>

      <ul className="flex flex-wrap items-center justify-center gap-2 text-xs text-colorDark mdl:text-sm">
        {data.technologies.map((tech) => (
          <li
            key={tech}
            className="text-colorPrimary bg-colorPrimary/10 hover:bg-colorPrimary/20 rounded-md px-2 py-1"
          >
            {tech}
          </li>
        ))}
      </ul>

      <p className="bg-colorPrimary/10 rounded-md p-1 text-center text-xs">
        {data.details}
      </p>
    </div>
  );
};
