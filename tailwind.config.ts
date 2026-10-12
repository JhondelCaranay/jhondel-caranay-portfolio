import type { Config } from "tailwindcss";
import scrollbar from "tailwind-scrollbar";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerS: "1024px",
      containerXs: "768px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
        limit: "1900px",
      },
      fontFamily: {
        bodyFont: ["var(--font-montserrat)", "sans-serif"],
        titleFont: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        navbarShadow: "0px 10px 30px -10px rgba(2,12,27,0.7)",
        BoxShadowGlow: "0px 0px 8px rgb(255,255,255)",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "none" },
        },
        popIn: {
          from: { opacity: "0", transform: "scale(0.6)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.5s ease-out both",
        popIn: "popIn 0.4s ease-out 1s both",
      },
      dropShadow: {
        dropShadowGlow: "0px 0px 8px rgb(255,255,255)",
      },
      colors: {
        bodyColor: "#0A192F",
        // colorPrimary: "#64ffda",
        colorPrimary: "#38bdf8",
        colorLight: "#ccd6f6",
        colorDark: "#8892b0",
        HoverColor: "rgba(100, 255, 218, 0.1)",
      },
    },
  },
  plugins: [scrollbar],
};
export default config;
