"use client";
import { ProjectType } from "@/utils/types";
/* PACKAGES */
/* UTILS */
/* COMPONENTS */
import { SectionTitle } from "../section-title";
import { ProjectDetail } from "./project-detail";

const projects: ProjectType[] = [
  {
    id: "1",
    type: "Freelance Project",
    title: "Alumni System",
    content:
      "The platform connects alumni and teachers, offering communication, announcements, job postings, and profile updates, with PESO managing job opportunities for employment support.",
    image: "/images/inventory-spedi.jpg",
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
    coreUrl: "https://github.com/JhondelCaranay/next-ts-messenger-clone",
    liveUrl: "",
  },
  {
    id: "2",
    type: "Freelance Project",
    title: "Pet Adoption System",
    content:
      "The project aims to build a platform where users can browse pets, submit adoption requests, and schedule interviews upon request approval to complete the adoption process.",
    image: "/images/inventory-spedi.jpg",
    techstack: [
      "Nest Js",
      "React Js",
      "TypeScript",
      "MySQL",
      "Tailwind",
      "Prisma",
      "RTK Query",
    ],
    coreUrl: "",
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
    coreUrl: "",
    liveUrl: "",
  },
  {
    id: "4",
    type: "Personal Project",
    title: "Real-Time Chat Application",
    content:
      "A web-based chat application designed to facilitate seamless, real-time communication between users with features like direct messaging, group chats, and media sharing",
    image: "/images/inventory-spedi.jpg",
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
    coreUrl: "",
    liveUrl: "",
  },
];

export const Projects = () => {
  return (
    <div id="projects" className="mx-auto max-w-container py-24 lgl:px-20">
      <SectionTitle title="Projects" titleNumber="03" />

      <div className="flex flex-col gap-14">
        {projects.map((project) => (
          <ProjectDetail key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
};
