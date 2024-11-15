import { socialAccounts } from "@/utils/data";

export const Footer = () => {
  return (
    <div className="hidden w-full items-center justify-center gap-4 py-6 mdl:inline-flex xl:hidden">
      {socialAccounts.map((item, index) => (
        <a key={index} href={item.link} target="_blank">
          <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-HoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-colorPrimary hover:shadow-BoxShadowGlow hover:drop-shadow-dropShadowGlow">
            <item.icon className="text-2xl" />
          </span>
        </a>
      ))}
    </div>
  );
};
