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
  "HTML CSS",
  "Scss",
  "Tailwind",
  "React Js",
  "Next Js",
  "React Query",
  "Redux",
  "Shadcn Ui",
  "Ant Design",
  "Material Ui",
];

export const backend = [
  "PHP",
  "Node Js",
  "Typescript",
  "Nest Js",
  "Hono",
  "Prisma",
  "Drizzle",
];

export const database = ["Mongo DB", "MySQl", "PostgreSQL", "SQL server"];

export const others = [
  "Github",
  "Docker",
  "Cloudenary",
  "Firebase Storage",
  "AWS EC2",
  "Vercel",
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
    title: "Kalakore - Wholesale Distribution ERP",
    content:
      "Kalakore is a wholesale distribution ERP that brings inventory, purchasing, sales, and supplier records into one system. It tracks every stock movement and business transaction, so wholesale businesses can run day-to-day operations from a single, accurate set of records.",
    image: "/images/wholesale-erp-system.png",
    techstack: [
      "Express js",
      "React vite",
      "Shadcn UI",
      "Tailwind",
      "Drizzle",
      "PostgreSQL",
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
      "Build custom web applications from start to finish, handling both the frontend and backend.",
    technologies: [
      "React Js",
      "Express Js",
      "Nest Js",
      "Next Js",
      "Hono",
      "PHP",
    ],
    details:
      "I create responsive, reliable apps tailored to your needs, including setup, design, and deployment.",
  },
  {
    id: "2",
    title: "Application Deployment and Maintenance",
    icon: BsDatabase,
    description:
      "Set up and maintain applications on cloud platforms for smooth performance.",
    technologies: ["AWS EC2", "Cloudenary", "Docker", "Nginx", "PM2", "Vercel"],
    details:
      "I deploy apps, configure servers, and offer ongoing support to keep everything running efficiently.",
  },
  {
    id: "3",
    title: "Database Management and Optimization",
    icon: BsCloud,
    description:
      "Design and manage databases to ensure fast and secure data handling.",
    technologies: [
      "SQL Server",
      "MySQL",
      "PostgreSQL",
      "Mongo DB",
      "Prisma",
      "Drizzle",
    ],
    details:
      "I handle database setup, data corrections, and optimization to keep applications performing well and data secure.",
  },
];
