import type { Metadata } from "next";
import "./globals.css";
import { inter, montserrat } from "@/utils/fonts";

export const metadata: Metadata = {
  title: "jhondel delicona caranay",
  description:
    "I am a skilled Web Developer proficient in React, Next.js, Express, and TypeScript. Experienced in creating responsive, user-friendly applications with a focus on clean code and effective problem-solving. Seeking opportunities to contribute my expertise in a dynamic development role.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${montserrat.className} antialiased`}>{children}</body>
    </html>
  );
}
