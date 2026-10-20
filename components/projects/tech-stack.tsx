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
        // offset the content column's -ml-16/-mr-16 overlap so tags stay clear of the media
        position === "left" ? "justify-start xl:pr-16" : "justify-end xl:pl-16",
      )}
    >
      {data.map((tech, index) => (
        <li key={index}>
          <span className="rounded-md bg-colorPrimary/10 px-2 py-1 text-colorPrimary hover:bg-colorPrimary/20">
            {tech}
          </span>
        </li>
      ))}
    </ul>
  );
};
