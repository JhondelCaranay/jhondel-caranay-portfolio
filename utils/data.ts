import { TbBrandGithub } from "react-icons/tb";
import {
  // SlSocialGoogle,
  SlSocialFacebook,
  SlSocialLinkedin,
} from "react-icons/sl";
import { SiUpwork } from "react-icons/si";
import { ProjectType, WorkExperience } from "./types";

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
    link: process.env.NEXT_PUBLIC_SOCIAL_GITHUB_LINK,
    icon: TbBrandGithub,
  },
  {
    link: process.env.NEXT_PUBLIC_SOCIAL_UPWORK_LINK,
    icon: SiUpwork,
  },
  {
    link: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK_LINK,
    icon: SlSocialFacebook,
  },
  {
    link: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN_LINK,
    icon: SlSocialLinkedin,
  },
];

export const workExperiences: WorkExperience[] = [
  {
    id: "1",
    jobTitle: "Junior Programmer",
    company: "Lloyd Laboratories Inc",
    year: "FEB 2024 - SEP 2024",
    type: "Onsite",
    description:
      "I maintain the web-based HR system and migrate features from VB.NET to Node.js and React.</>Worked with Express.js, Socket.IO, SQL Server, React, Redux, and Ant Design to develop and maintain web applications.</>Conducted data correction and encoding tasks in the manufacturing system using SQL Server to maintain data accuracy and integrity.",
  },
  {
    id: "2",
    jobTitle: "React Developer OJT",
    company: "SPEDI",
    year: "SEP 2022 - JAN 2023",
    type: "Remote",
    description:
      "As an OJT, I actively contributed to enhancing an existing inventory management system by developing new features and optimizing transaction handling.</>Worked with Laravel, MySQL, React, Redux, and React Bootstrap to develop and maintain web applications.",
  },
];

export const projects: ProjectType[] = [
  {
    id: "1",
    type: "Freelance Project",
    title: "Alumni System",
    content:
      "The platform connects alumni and teachers, offering communication, announcements, job postings, and profile updates, with PESO managing job opportunities for employment support.",
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
    id: "2",
    type: "Freelance Project",
    title: "Pet Adoption System",
    content:
      "The project aims to build a platform where users can browse pets, submit adoption requests, and schedule interviews upon request approval to complete the adoption process.",
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
    id: "3",
    type: "Capstone",
    title: "Warehouse Inventory System",
    content:
      "A web-based Inventory Management System designed to oversee warehouse products and transactions effectively.",
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
    id: "4",
    type: "Personal Project",
    title: "Real-Time Chat Application",
    content:
      "A web-based chat application designed to facilitate seamless, real-time communication between users with features like direct messaging, group chats, and media sharing",
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
  {
    id: "5",
    type: "Personal Project",
    title: "Finance Management System",
    content:
      "A web-based finance management system designed to help users efficiently track and manage their income, expenses, budgets, and financial goals, with features like expense categorization, budget planning, and transaction history.",
    image: "/images/finance.png",
    techstack: [
      "Next Js",
      "Shadcn UI",
      "Tailwind",
      "Clerk",
      "Zustand",
      "Drizzle",
      "PostgreSQL",
      "Hono",
    ],
    codeUrl: "https://github.com/JhondelCaranay/finance-project-nextjs",
    liveUrl: "",
  },
];
