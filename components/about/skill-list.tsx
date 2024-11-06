import { AiFillThunderbolt } from "react-icons/ai";

type Props = { data: string[]; title: string };

export const SkillList = ({ data, title }: Props) => {
  return (
    <ul>
      <li className="flex items-center gap-2">
        <span className="text-colorGreen">{title}</span>
      </li>
      {data.map((name, index) => (
        <li className="flex items-center gap-3" key={index}>
          <span className="text-colorGreen">
            <AiFillThunderbolt />
          </span>
          {name}
        </li>
      ))}
    </ul>
  );
};
