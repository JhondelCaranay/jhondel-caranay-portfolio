import { AiFillThunderbolt } from "react-icons/ai";

type Props = { data: string[]; title: string };

export const SkillList = ({ data, title }: Props) => {
  return (
    <ul className="border-colorPrimary hover:border-colorPrimary/70 flex flex-col gap-2 rounded-md border-2 p-2">
      <li className="flex items-center gap-2">
        <span className="text-colorPrimary">{title}</span>
      </li>
      {data.map((name, index) => (
        <li className="flex items-center gap-3" key={index}>
          <span className="text-colorPrimary">
            <AiFillThunderbolt />
          </span>
          {name}
        </li>
      ))}
    </ul>
  );
};
