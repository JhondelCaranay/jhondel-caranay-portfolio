"use client";

import clsx from "clsx";
import romans from "romans";
import * as motion from "framer-motion/client";
import { AnimatePresence } from "framer-motion";
import { navLinks } from "@/utils/nav-links";
import { MenuIcon } from "./menu-icon";
import { MouseEvent, useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { socialAccounts } from "@/utils/data";
import { SocialIcon } from "./social-icon";
import { ResumeBtn } from "./resume-btn";

const gmail = process.env.NEXT_PUBLIC_GMAIL_LINK;

// page.tsx scrolls inside this div, not the window
const getScrollRoot = () => document.getElementById("scroll-root");

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  // background on scroll, hide while scrolling down, show again on scroll up
  useEffect(() => {
    const root = getScrollRoot();
    if (!root) return;
    let lastTop = root.scrollTop;

    const onScroll = () => {
      const top = root.scrollTop;
      setScrolled(top > 10);
      setHidden(top > 200 && top > lastTop);
      lastTop = top;
    };

    root.addEventListener("scroll", onScroll, { passive: true });
    return () => root.removeEventListener("scroll", onScroll);
  }, []);

  // highlight the link of the section in the middle of the screen
  useEffect(() => {
    const root = getScrollRoot();
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { root, rootMargin: "-45% 0px -50% 0px" },
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.link.slice(1));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // close the mobile menu with Escape
  useEffect(() => {
    if (!showMenu) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowMenu(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showMenu]);

  // Scroll vertically only. A default anchor jump also scrolls the container
  // sideways when a section is mid-animation off to the side, which shifted
  // the whole page (navbar included) to the left.
  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    const root = getScrollRoot();
    const section = document.getElementById(href.slice(1));
    setShowMenu(false);
    if (!root || !section) return;

    e.preventDefault();
    const top =
      section.getBoundingClientRect().top -
      root.getBoundingClientRect().top +
      root.scrollTop;
    root.scrollLeft = 0;
    root.scrollTo({ top, behavior: "smooth" });
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}${href}`,
    );
  };

  const renderLinks = (mobile: boolean) =>
    navLinks.map((link, index) => {
      const isActive = activeId === link.link.slice(1);
      return (
        <motion.li
          key={link.link}
          variants={{
            hidden: { opacity: 0, y: mobile ? 20 : -20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <a
            href={link.link}
            onClick={(e) => handleNavClick(e, link.link)}
            aria-current={isActive ? "page" : undefined}
            className={clsx(
              "group relative flex items-center gap-1 py-1 font-medium duration-300 hover:text-colorPrimary",
              isActive ? "text-colorPrimary" : "text-colorLight",
            )}
          >
            {index !== 0 && (
              <span className="text-colorPrimary">
                {romans.romanize(index)}.
              </span>
            )}
            {link.name}
            {/* underline */}
            <span
              className={clsx(
                "absolute -bottom-0.5 left-0 h-[2px] w-full origin-left bg-colorPrimary duration-300",
                isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
              )}
            />
          </a>
        </motion.li>
      );
    });

  const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
  };

  return (
    <>
      <div
        className={clsx(
          "sticky top-0 z-50 h-20 w-full px-5 transition-all duration-300 lg:h-[12vh]",
          scrolled
            ? "bg-bodyColor/80 shadow-navbarShadow backdrop-blur-md"
            : "bg-transparent",
          hidden && !showMenu && "-translate-y-full",
        )}
      >
        <nav className="mx-auto flex h-full max-w-container items-center justify-between py-1 font-titleFont">
          {/* logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            aria-label="Back to top"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1 text-[20px] font-bold duration-300 hover:opacity-80"
          >
            <span className="text-colorPrimary">{"<"}</span>
            <span className="text-colorLight"> Jhondel </span>
            <span className="text-colorPrimary">{"/>"}</span>
          </motion.a>

          {/* nav links */}
          <div className="hidden items-center gap-4 mdl:inline-flex lg:gap-7">
            <motion.ul
              className="flex gap-4 text-[13px] lg:gap-7"
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              {renderLinks(false)}
            </motion.ul>

            <ResumeBtn />
          </div>

          {/* mobile menu button */}
          <MenuIcon onOpen={() => setShowMenu(true)} />
        </nav>
      </div>

      {/* outside the bar: its transform/backdrop-blur would trap position: fixed */}
      <AnimatePresence>
        {showMenu && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setShowMenu(false)}
            className="fixed inset-0 z-50 flex h-screen w-full justify-end bg-black/60 backdrop-blur-sm mdl:hidden"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex h-full w-[80%] max-w-[22rem] flex-col items-center justify-center overflow-y-auto bg-[#112240] px-4 py-10 scrollbar-none"
            >
              <button
                type="button"
                onClick={() => setShowMenu(false)}
                aria-label="Close menu"
                className="absolute right-4 top-4 text-3xl text-colorPrimary duration-300 hover:rotate-90"
              >
                <MdOutlineClose />
              </button>

              <div className="flex flex-col items-center gap-8">
                <motion.ul
                  className="flex flex-col items-center gap-6 text-lg"
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {renderLinks(true)}
                </motion.ul>

                <ResumeBtn />

                <div className="flex items-center gap-4 px-1">
                  {socialAccounts.map((item) => (
                    <SocialIcon data={item} key={item.name} />
                  ))}
                </div>

                {gmail && (
                  <a
                    href={`mailto:${gmail}`}
                    className="text-sm tracking-wide text-colorPrimary hover:drop-shadow-dropShadowGlow"
                  >
                    {gmail}
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
