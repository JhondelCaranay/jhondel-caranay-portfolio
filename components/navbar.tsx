"use client";

import Link from "next/link";
import romans from "romans";
import * as motion from "framer-motion/client";
import { navLinks } from "@/utils/nav-links";
import { MenuIcon } from "./menu-icon";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { socialAccounts } from "@/utils/data";
import { SocialIcon } from "./social-icon";
import { ResumeBtn } from "./resume-btn";

const gmail = process.env.NEXT_PUBLIC_GMAIL_LINK;

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onChangeMenu = () => {
    setShowMenu(!showMenu);
  };

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
            className="flex gap-7 text-[13px]"
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
          <ResumeBtn />
        </div>

        {/* small icon section */}
        <MenuIcon onOpen={onChangeMenu} />

        {showMenu && (
          <div className="absolute right-0 top-0 z-50 flex h-screen w-full flex-col items-end bg-black bg-opacity-50 mdl:hidden">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="relative flex h-full w-[80%] flex-col items-center overflow-y-scroll bg-[#112240] px-4 py-10 scrollbar-none"
            >
              <MdOutlineClose
                onClick={onChangeMenu}
                className="absolute right-4 top-4 cursor-pointer text-3xl text-colorPrimary hover:text-red-500"
              />
              <div className="flex flex-col items-center gap-7">
                <motion.ul
                  className="flex flex-col gap-7 text-base"
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
                        onClick={onChangeMenu}
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

                <ResumeBtn />

                <motion.div
                  className="flex items-center gap-4 px-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 1.2,
                    ease: "easeIn",
                  }}
                >
                  {socialAccounts.map((item, index) => (
                    <SocialIcon data={item} key={index} />
                  ))}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: 1.2,
                    ease: "easeIn",
                  }}
                  className="w-72 text-sm tracking-wide text-colorPrimary hover:drop-shadow-dropShadowGlow"
                >
                  <a href={`mailto:${gmail}`}>{gmail}</a>
                </motion.p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};
