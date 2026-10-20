import { TbBrandGithub } from "react-icons/tb";
import {
  // SlSocialGoogle,
  SlSocialFacebook,
  SlSocialLinkedin,
} from "react-icons/sl";
import { SiUpwork } from "react-icons/si";
import { ProjectType, ServiceType, WorkExperience } from "./types";

export const typewriterData = [
  "Creating modern web experiences.",
  "Specializing in Node.js backend development.",
  "Building intuitive UIs with React.",
  "Passionate full-stack developer.",
];

export const frontend = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "TanStack Query",
  "Redux",
  "shadcn/ui",
  "Ant Design",
  "Material UI",
  "SCSS",
];

export const backend = [
  "Node.js",
  "Express",
  "NestJS",
  "Hono",
  "PHP",
  "Laravel",
  "Socket.IO",
];

export const database = [
  "PostgreSQL",
  "MySQL",
  "SQL Server",
  "MongoDB",
  "Redis",
  "Prisma",
  "Drizzle",
];

export const others = [
  "Docker",
  "AWS EC2",
  "Vercel",
  "GitHub",
  "Cloudinary",
  "Firebase Storage",
];

export const socialAccounts = [
  {
    name: "GitHub",
    link: process.env.NEXT_PUBLIC_SOCIAL_GITHUB_LINK,
    icon: TbBrandGithub,
  },
  {
    name: "Upwork",
    link: process.env.NEXT_PUBLIC_SOCIAL_UPWORK_LINK,
    icon: SiUpwork,
  },
  {
    name: "Facebook",
    link: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK_LINK,
    icon: SlSocialFacebook,
  },
  {
    name: "LinkedIn",
    link: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN_LINK,
    icon: SlSocialLinkedin,
  },
  // Skip accounts whose env var is unset so no empty <a> tags render.
].filter((account) => account.link);

export const workExperiences: WorkExperience[] = [
  {
    id: "1",
    jobTitle: "Junior Web Developer",
    company: "Blue Wolf Solution",
    year: "JAN 2025 - AUG 2025",
    type: "Remote",
    description:
      "Designed and built a custom construction project management system with integrated payroll from the ground up using Laravel and React.</>Maintained and improved a PHP-based pharmacy management system, diagnosing and fixing bugs to keep it stable.</>Developed and maintained client WordPress websites, handling content management, blog updates, site enhancements, and ongoing maintenance.</>Tech: Laravel, React, PHP, MySQL, Tailwind CSS, WordPress",
  },
  {
    id: "2",
    jobTitle: "Junior Programmer",
    company: "Lloyds Laboratories, Inc.",
    year: "FEB 2024 - SEP 2024",
    type: "Onsite",
    description:
      "Primarily responsible for migrating an enterprise HR system's modules and features from a legacy VB.NET application to React and Express.js, preserving compatibility, performance, and stability.</>Maintained and continuously enhanced the HR system throughout the migration, keeping it reliable for day-to-day operations.</>Collaborated with the development team to implement, test, and maintain new application features.</>Tech: React, Redux, Express.js, Socket.IO, Microsoft SQL Server, Ant Design",
  },
  {
    id: "3",
    jobTitle: "Web Developer Intern (OJT)",
    company: "SPEDI Construction, Inc.",
    year: "OCT 2022 - JAN 2023",
    type: "Remote",
    description:
      "Implemented new features, resolved issues, and improved the overall functionality of an existing warehouse inventory management system.</>Built responsive, maintainable interface components within the existing codebase.</>Tech: Laravel, React, Redux, MySQL, React Bootstrap",
  },
];

export const projects: ProjectType[] = [
  {
    id: "1",
    type: "Personal Project",
    title: "Kalakore - Wholesale Distribution ERP and BIR-Ready POS",
    content:
      "A full-stack ERP for Philippine wholesale distributors, built solo: purchasing and supplier canvassing, multi-warehouse inventory, sales from quotation to invoice, a multi-terminal POS, receivables and payables, and double-entry accounting where every document posts its own journal entry. Built to BIR rules (RMO 24-2023) with X and Z readings, BIR reports and books of accounts, plus role-based access, a full audit log and about 5,900 automated tests.",
    image: "/images/wholesale-erp-system.png",
    video: "/videos/kalakore-promo-web.mp4",
    caseStudyUrl: "/projects/kalakore",
    techstack: [
      "Express.js",
      "TypeScript",
      "React (Vite)",
      "TanStack Router & Query",
      "Shadcn UI",
      "Tailwind CSS",
      "Drizzle ORM",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "Docker",
      "Vitest",
    ],
    codeUrl: "",
    liveUrl: "",
  },
  {
    id: "2",
    type: "Freelance Project",
    title: "Alumni System",
    content:
      "A platform that keeps alumni connected with their former teachers through real-time communication, announcements, and job postings. Alumni keep their profiles up to date, while the Public Employment Service Office (PESO) posts job openings to help graduates find work.",
    image: "/images/alumni-system.png",
    techstack: [
      "Next Js",
      "React Js",
      "Next-auth",
      "Tailwind",
      "Shadcn ui",
      "Socket io",
      "Prisma",
      "React Query",
      "TypeScript",
    ],
    codeUrl: "https://github.com/JhondelCaranay/alumni_system_bsu",
    liveUrl: "",
  },
  {
    id: "3",
    type: "Freelance Project",
    title: "Pet Adoption System",
    content:
      "A pet adoption platform that covers the full adoption process. Users browse available pets and submit adoption requests; once a request is approved, they schedule an interview to complete the adoption.",
    image: "/images/pet-adoption.png",
    techstack: [
      "Nest Js",
      "React Js",
      "TypeScript",
      "MySQL",
      "Tailwind",
      "Prisma",
      "RTK Query",
    ],
    codeUrl: "https://github.com/JhondelCaranay/pet-adoption-backend",
    liveUrl: "",
  },
  {
    id: "4",
    type: "Capstone",
    title: "Warehouse Inventory System",
    content:
      "My capstone project: a web-based inventory management system for a warehouse. It keeps track of every product in stock and records the transactions that move items in and out.",
    image: "/images/inventory-spedi.jpg",
    techstack: [
      "Nest Js",
      "React Js",
      "Redux Toolkit",
      "RTK Query",
      "SCSS",
      "Prisma",
      "MySql",
    ],
    codeUrl:
      "https://github.com/JhondelCaranay/caps-warehouse-inventory-server-nestjs",
    liveUrl: "",
  },
  {
    id: "5",
    type: "Personal Project",
    title: "Real-Time Chat Application",
    content:
      "A Messenger-style chat app with direct messages, group chats, and media sharing. Messages appear instantly for everyone in the conversation, with no page refresh needed.",
    image: "/images/messenger-clone.png",
    techstack: [
      "NextJS",
      "ReactJS",
      "NextAuth",
      "Tailwind",
      "Pusher",
      "Zustand",
      "Prisma",
      "MongoDB",
    ],
    codeUrl: "https://github.com/JhondelCaranay/next-ts-messenger-clone",
    liveUrl: "",
  },
];

import { BsCode, BsDatabase, BsCloud } from "react-icons/bs";

export const services: ServiceType[] = [
  {
    id: "1",
    title: "Full-Stack Web Development",
    icon: BsCode,
    description:
      "Custom web applications built end to end, from the database and API to a fast, responsive interface.",
    technologies: ["React", "Next.js", "Express", "NestJS", "Hono", "PHP"],
    details:
      "Business systems such as ERPs, POS and dashboards, with role-based access, audit trails and automated tests.",
  },
  {
    id: "2",
    title: "Deployment and Maintenance",
    icon: BsCloud,
    description:
      "Getting your app into production and keeping it fast, stable and up to date after launch.",
    technologies: ["AWS EC2", "Docker", "Nginx", "PM2", "Vercel", "Cloudinary"],
    details:
      "Server setup, containers, reverse proxies, environment configuration and ongoing support.",
  },
  {
    id: "3",
    title: "Database Design and Optimization",
    icon: BsDatabase,
    description:
      "Data models that stay fast, consistent and secure as your business grows.",
    technologies: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "MongoDB",
      "Prisma",
      "Drizzle",
    ],
    details:
      "Schema design, migrations, indexing, query tuning and data clean-up.",
  },
];
