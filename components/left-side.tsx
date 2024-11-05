import * as motion from "framer-motion/client";
import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialGoogle,
  SlSocialFacebook,
  SlSocialLinkedin,
} from "react-icons/sl";

const github = process.env.NEXT_PUBLIC_SOCIAL_GITHUB_LINK;
const upwork = process.env.NEXT_PUBLIC_SOCIAL_UPWORK_LINK;
const facebook = process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK_LINK;
const linkedin = process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN_LINK;

export const Leftside = () => {
  return (
    <motion.div
      className="fixed bottom-0 left-0 hidden h-full w-32 xl:inline-flex"
      initial={{ opacity: 0, y: "100vh" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="flex h-full w-full flex-col items-center justify-end gap-4 text-colorLight">
        <div className="flex flex-col gap-4 px-1">
          <a href={github} target="_blank">
            <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-HoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-colorGreen hover:shadow-BoxShadowGlow hover:drop-shadow-dropShadowGlow">
              <TbBrandGithub />
            </span>
          </a>
          <a href={upwork} target="_blank">
            <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-HoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-colorGreen hover:shadow-BoxShadowGlow hover:drop-shadow-dropShadowGlow">
              <SlSocialGoogle />
            </span>
          </a>
          <a href={facebook} target="_blank">
            <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-HoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-colorGreen hover:shadow-BoxShadowGlow hover:drop-shadow-dropShadowGlow">
              <SlSocialFacebook />
            </span>
          </a>
          <a href={linkedin} target="_blank">
            <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-HoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-colorGreen hover:shadow-BoxShadowGlow hover:drop-shadow-dropShadowGlow">
              <SlSocialLinkedin />
            </span>
          </a>
        </div>

        {/* line design */}
        <div className="h-32 w-[2px] bg-colorDark"></div>
      </div>
    </motion.div>
  );
};
