"use client";

import { socialAccounts } from "@/utils/data";
import { SocialIcon } from "./social-icon";

export const Footer = () => {
  // page.tsx scrolls inside this div, not the window
  const scrollToTop = () => {
    document
      .getElementById("scroll-root")
      ?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="flex w-full flex-col items-center gap-5 border-t border-colorDark/20 py-8 text-center">
      {/* the side rails show these on xl screens */}
      <div className="flex items-center justify-center gap-4 xl:hidden">
        {socialAccounts.map((item) => (
          <SocialIcon data={item} key={item.name} />
        ))}
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        className="font-titleFont text-sm tracking-wide text-colorPrimary duration-300 hover:-translate-y-1"
      >
        Back to top &uarr;
      </button>

      <p className="font-titleFont text-xs tracking-wide text-colorDark">
        &copy; {new Date().getFullYear()} Jhondel Caranay. Built with Next.js
        and Tailwind CSS.
      </p>
    </footer>
  );
};
