import clsx from "clsx";

type Props = {
  data: string[];
  position: string;
};
export const TechStack = ({ data, position }: Props) => {
  return (
    <ul
      className={clsx(
        "flex flex-wrap justify-start gap-4 font-titleFont text-xs tracking-wide text-colorDark md:w-[80%] md:gap-3 md:text-sm",
        position === "right" && "justify-end",
      )}
    >
      {data.map((tech, index) => (
        <li key={index}>
          <span className="rounded-md bg-teal-950/30 px-2 py-1 text-colorGreen">
            {tech}
          </span>
        </li>
      ))}
    </ul>
  );
};
