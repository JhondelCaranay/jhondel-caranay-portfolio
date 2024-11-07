"use client";

import { ReactNode } from "react";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export const Providers = ({ children }: { children: ReactNode }) => {
  return <NuqsAdapter>{children}</NuqsAdapter>;
};
