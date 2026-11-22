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
    year: "JAN 2024 - JAN 2025",
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
    liveUrl: "https://kalakore.vercel.app",
  },
  {
    id: "2",
    type: "Personal Project",
    title: "AyosDocs - Multi-Tenant Document Management SaaS",
    content:
      "A multi-tenant SaaS for storing and sharing documents, built solo for Philippine teams. Files are organized as workspace, projects, nested folders and documents. Each workspace has owner, admin and member roles, and each project has its own admin, editor and viewer roles. Uploads go straight from the browser to Cloudinary using signed URLs, with storage quotas, version history, activity timelines, tags and categories, Postgres full-text search, trash with retention, and expiring share links that can be password-protected. Billing runs through PayMongo Checkout on Free, Pro and Business plans, with a verified webhook, a grace period and a read-only mode, so nothing is ever deleted automatically. It also has live notifications over Socket.IO, an audit log with CSV export for Business, a platform super-admin panel, a landing and pricing page, an in-app user guide, and a test suite covering the API contracts and isolation between tenants.",
    image: "/images/ayosdocs.png",
    video: "",
    caseStudyUrl: "/projects/ayosdocs",
    techstack: [
      "Express.js",
      "TypeScript",
      "React (Vite)",
      "TanStack Router & Query",
      "Base UI",
      "Tailwind CSS",
      "Drizzle ORM",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "Cloudinary",
      "PayMongo",
      "Resend",
      "Docker",
      "Vitest",
    ],
    codeUrl: "",
    liveUrl: "",
  },
  {
    id: "3",
    type: "Personal Project",
    title: "Seroksan - Multi-Tenant Record-Tracking SaaS for Xerox Shops",
    content:
      "A multi-tenant SaaS for Philippine xerox shops that also sell school supplies, built solo. Staff record sales on a fast counter screen, with variant-based pricing and volume tiers, and each sale deducts supplies and consumables like paper and laminating film. Shifts compare expected against counted cash, and machine counter readings are checked against recorded pages, so unrecorded copies show up. It also handles drop-off job orders with downpayments, utang (customer credit) with partial payments, voids that need a manager's approval and stay on record, expenses, and profit and cross-branch reports. Each shop runs multiple branches with Owner, Manager and Staff roles, and staff switch in with a PIN on registered counter devices. Billing runs through PayMongo Checkout on Free, Pro and Business plans, and it installs as a PWA with live updates over Socket.IO. It's a record-keeping tool by design, not a POS, so it issues no receipts and computes no VAT.",
    image: "/images/seroksan.png",
    video: "",
    caseStudyUrl: "/projects/seroksan",
    techstack: [
      "Express.js",
      "TypeScript",
      "React (Vite)",
      "TanStack Router & Query",
      "Base UI",
      "Tailwind CSS",
      "Drizzle ORM",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "Cloudinary",
      "PayMongo",
      "Resend",
      "Docker",
      "Vitest",
    ],
    codeUrl: "",
    liveUrl: "",
  },
  {
    id: "4",
    type: "Personal Project",
    title: "PCyesa - Record-Keeping POS for a Computer Shop",
    content:
      "A record-keeping POS for a single computer shop, built solo, so the owner always knows what was sold, what is in stock and how the shop is doing. It covers a parts catalog with typed specs, brands and categories, stock-ins from suppliers, adjustments and a full movement history with low-stock alerts. A PC builder checks part compatibility and saves drafts and quotes, and predefined packages show their availability from current stock. The POS handles mixed carts of parts, builds, packages and service items, with discounts capped for staff unless an Owner PIN approves, split payments, downpayments and held sales. It also covers balance collection, voids, partial returns, serial lookup with warranty status, an owner dashboard with sales, best-seller, inventory and profit reports, and live sync between counters over Socket.IO. Owner and Staff roles keep cost and profit hidden from staff. It's a record-keeping tool by design, so it issues no official receipts and computes no VAT.",
    image: "/images/pcyesa.png",
    video: "",
    caseStudyUrl: "/projects/pcyesa",
    techstack: [
      "Express.js",
      "TypeScript",
      "React (Vite)",
      "TanStack Router & Query",
      "TanStack Table",
      "Base UI",
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
    id: "5",
    type: "Personal Project",
    title: "Siklo - Software Project Lifecycle Tracker",
    content:
      "An internal system for a software team that tracks every project from the first plan until it's shut down, built solo. Each project moves through Planning, Approval, Development, Testing/UAT, Deployment, Live, Maintenance and Shutdown, and every move checks its requirements, like a signed approval or a logged production deployment. A drag-and-drop pipeline and ticket kanban run that flow, with milestones, progress and at-risk flags, time logs, comments with @mentions, and later phases like a v2 that run alongside a live project. After launch it keeps tracking hosting costs, renewals, maintenance and incidents, and a daily job generates service billing records with partial payments and overdue reminders. It also has project chat and DMs over Socket.IO, a client portal, five roles with cost and profit hidden from programmers, a dashboard and reports with CSV and PDF exports, and a permanent read-only archive. It's a record-keeping tool by design, so it issues no receipts and computes no VAT.",
    image: "/images/siklo-1.png",
    video: "",
    caseStudyUrl: "/projects/siklo",
    techstack: [
      "Express.js",
      "TypeScript",
      "React (Vite)",
      "TanStack Router & Query",
      "TanStack Table",
      "Base UI",
      "Tailwind CSS",
      "dnd-kit",
      "Drizzle ORM",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "Cloudinary",
      "Resend",
      "Docker",
      "Vitest",
    ],
    codeUrl: "",
    liveUrl: "https://siklo-ui.vercel.app",
  },
  {
    id: "6",
    type: "Personal Project",
    title: "Puro Link - Water Refilling Station Platform",
    content:
      "A multi-tenant SaaS for water refilling stations in the Philippines, built solo. Station owners record sales on a POS, track their 5-gallon containers by status and by customer through one movement ledger, take partial payments and see who owes what and for how long. Customers find the nearest approved station on a map, order a refill to their door and follow it live, while riders get their own phone screen with cash-on-delivery and empties. Owners run several stations, give staff permission presets (counter, rider, manager), and pay for Free, Pro or Business plans through PayMongo GCash checkout. A platform admin approves stations and sees counts and billing, never a station's customers or sales. It's a record-keeping tool by design, so it issues no official receipts and computes no VAT.",
    image: "/images/purolink-1.png",
    video: "",
    caseStudyUrl: "/projects/purolink",
    techstack: [
      "Express.js",
      "TypeScript",
      "React (Vite)",
      "TanStack Router & Query",
      "Base UI",
      "Tailwind CSS",
      "Leaflet",
      "Drizzle ORM",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "PayMongo",
      "Cloudinary",
      "Resend",
      "Docker",
      "Vitest",
    ],
    codeUrl: "",
    liveUrl: "",
  },
  {
    id: "7",
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
    id: "8",
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
    id: "9",
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
    id: "10",
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
