import { IconType } from "react-icons";

type Props = {
  data: {
    name: string;
    link: string | undefined;
    icon: IconType;
  };
};

export const SocialIcon = ({ data }: Props) => {
  return (
    <a
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={data.name}
    >
      <span className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full bg-HoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-colorPrimary hover:shadow-BoxShadowGlow hover:drop-shadow-dropShadowGlow">
        <data.icon className="text-2xl" />
      </span>
    </a>
  );
};
