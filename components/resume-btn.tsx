import * as motion from "framer-motion/client";

export const ResumeBtn = () => {
  return (
    <a href="jhondel-delicona-caranay-cv2.pdf" target="_blank">
      <motion.button
        className="rounded-md border border-colorPrimary px-4 py-2 text-[13px] text-colorPrimary hover:bg-HoverColor"
        variants={{
          hidden: {
            opacity: 0,
            y: -50,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.8,
              type: "spring",
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        Resume
      </motion.button>
    </a>
  );
};
