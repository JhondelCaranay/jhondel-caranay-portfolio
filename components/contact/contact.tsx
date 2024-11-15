import * as motion from "framer-motion/client";
import { Variants } from "framer-motion";
import { SectionTitle } from "../section-title";

const gmail = process.env.NEXT_PUBLIC_GMAIL_LINK;

export const Contact = () => {
  return (
    <div
      id="contact"
      className="mx-auto flex max-w-contentContainer flex-col items-center justify-center gap-4 py-10 xl:py-32"
    >
      {/* <p className="flex items-center font-titleFont text-lg font-semibold tracking-wide text-colorPrimary">
        IV.What&apos;s next?
      </p> */}

      <div className="flex w-full flex-col items-center">
        <SectionTitle title="Contact" titleNumber="V" line={false} />
      </div>
      <h2 className="font-titleFont text-5xl font-semibold">Get in Touch</h2>

      <p className="max-w-[600px] text-center text-colorDark">
        My inbox is always Open. Whether you have a question or just want to say
        hi. I&apos;ll try my best get back to you!
      </p>

      <a href={`mailto:${gmail}`}>
        <motion.button
          className="h-14 w-52 rounded-md border border-colorPrimary font-titleFont text-sm tracking-wide text-colorPrimary duration-300 hover:bg-HoverColor"
          variants={buttonVariants}
          whileHover="hover"
          initial="hidden"
          animate="visible"
        >
          Say Hello!
        </motion.button>
      </a>
    </div>
  );
};

const buttonVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.6,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 1,
      bounce: 1,
    },
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.4,
      repeat: Infinity,
    },
  },
};
