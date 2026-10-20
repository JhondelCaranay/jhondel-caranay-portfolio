import type { Metadata } from "next";
import "./globals.css";
import { inter, montserrat } from "@/utils/fonts";
import { Providers } from "@/providers/Providers";
import { siteDescription, siteName, siteTitle, siteUrl } from "@/utils/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  authors: [{ name: "Jhondel Delicona Caranay" }],
  keywords: [
    "Jhondel Caranay",
    "full-stack developer",
    "web developer Philippines",
    "React",
    "Next.js",
    "Express",
    "TypeScript",
    "PostgreSQL",
    "ERP",
    "POS",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${montserrat.className} overflow-auto antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
