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
          <span className="rounded-md bg-teal-950/30 px-2 py-1 text-colorGreen hover:bg-teal-950/80">
            {tech}
          </span>
        </li>
      ))}
    </ul>
  );
};
