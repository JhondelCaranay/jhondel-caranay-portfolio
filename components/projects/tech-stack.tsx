import clsx from "clsx";

type Props = {
  data: string[];
  position: string;
};

export const TechStack = ({ data, position }: Props) => {
  return (
    <ul
      className={clsx(
        "flex flex-wrap gap-4 font-titleFont text-xs tracking-wide text-colorDark",
        position === "left" ? "justify-start" : "justify-end",
      )}
    >
      {data.map((tech, index) => (
        <li key={index}>
          <span className="text-colorPrimary bg-colorPrimary/10 hover:bg-colorPrimary/20 rounded-md px-2 py-1">
            {tech}
          </span>
        </li>
      ))}
    </ul>
  );
};
