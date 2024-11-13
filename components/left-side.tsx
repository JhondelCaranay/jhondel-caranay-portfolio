import { socialAccounts } from "@/utils/data";
import * as motion from "framer-motion/client";

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
          {socialAccounts.map((item, index) => (
            <a key={index} href={item.link} target="_blank">
              <span className="hover:text-colorPrimary inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-HoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-BoxShadowGlow hover:drop-shadow-dropShadowGlow">
                <item.icon className="text-2xl" />
              </span>
            </a>
          ))}
        </div>

        {/* line design */}
        <div className="h-32 w-[2px] bg-colorDark"></div>
      </div>
    </motion.div>
  );
};
