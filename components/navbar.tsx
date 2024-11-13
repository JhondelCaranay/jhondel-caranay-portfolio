"use client";

import Link from "next/link";
import romans from "romans";
import * as motion from "framer-motion/client";
import { navLinks } from "@/utils/nav-links";
import { MenuIcon } from "./menu-icon";

export const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 h-20 w-full bg-bodyColor/50 px-5 shadow-navbarShadow lg:h-[12vh]">
      <div className="mx-auto flex h-full max-w-container items-center justify-between py-1 font-titleFont">
        {/* logo */}
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -50,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
                type: "spring",
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-textDark flex items-center gap-1 text-[20px] font-bold">
            <span className="text-colorPrimary">{"<"}</span>
            <span className="text-colorLight"> Jhondel </span>
            <span className="text-colorPrimary">{"/>"}</span>
          </h1>
        </motion.div>
        {/* nav link */}
        <div className="hidden items-center gap-7 mdl:inline-flex">
          <motion.ul
            className="text[13px] flex gap-7"
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  type: "spring",
                  duration: 0.2,
                  when: "beforeChildren",
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link, index) => (
              <motion.li
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -50,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                key={index}
              >
                <Link
                  href={link.link}
                  className="text-textDark hover:text-textGreen nav-link flex cursor-pointer items-center gap-1 font-medium"
                >
                  {index != 0 && (
                    <span className="text-colorPrimary">
                      {romans.romanize(Number(index))}.
                    </span>
                  )}
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* resume button */}
          <a href="jhondel-delicona-caranay.pdf" target="_blank">
            <motion.button
              className="border-colorPrimary text-colorPrimary rounded-md border px-4 py-2 text-[13px] hover:bg-HoverColor"
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
        </div>

        {/* small icon section */}
        <MenuIcon />
      </div>
    </div>
  );
};
