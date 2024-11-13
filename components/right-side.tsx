import * as motion from "framer-motion/client";

const gmail = process.env.NEXT_PUBLIC_GMAIL_LINK;

export const RightSided = () => {
  return (
    <motion.div
      className="fixed bottom-0 right-0 hidden h-full w-32 xl:inline-flex"
      initial={{ opacity: 0, y: "100vh" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 1.5,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      <div className="flex h-full w-full flex-col items-center justify-end gap-6 text-colorLight">
        <a href={`mailto:${gmail}`}>
          {/* <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${gmail}`}
          target="_blank"
          rel="noopener noreferrer"
        > */}
          <p className="text-colorPrimary w-72 -translate-y-28 rotate-90 text-sm tracking-wide hover:drop-shadow-dropShadowGlow">
            {gmail}
          </p>
        </a>
        <span className="inline-flex h-32 w-[2px] bg-colorDark"></span>
      </div>
    </motion.div>
  );
};
