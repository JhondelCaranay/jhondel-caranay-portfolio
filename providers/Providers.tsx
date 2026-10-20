"use client";

import { ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    // turn off Framer Motion's movement when the OS asks for reduced motion
    <MotionConfig reducedMotion="user">
      <NuqsAdapter>{children}</NuqsAdapter>
    </MotionConfig>
  );
};
