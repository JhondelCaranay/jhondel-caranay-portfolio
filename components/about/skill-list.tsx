type Props = { data: string[]; title: string };

export const SkillList = ({ data, title }: Props) => {
  return (
    <div className="flex flex-col gap-3 rounded-lg bg-[#112240] p-5 duration-300 hover:-translate-y-1">
      <h3 className="font-titleFont text-sm font-semibold tracking-wide text-colorPrimary">
        {title}
      </h3>
      <ul className="flex flex-wrap gap-2 font-titleFont text-xs tracking-wide">
        {data.map((name) => (
          <li
            key={name}
            className="rounded-md bg-colorPrimary/10 px-2 py-1 text-colorLight"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};
