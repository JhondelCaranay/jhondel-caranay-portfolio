import { WorkExperience } from "./types";

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
    jobTitle: "Web Developer OJT",
    company: "SPEDI",
    year: "SEP 2022 - JAN 2023",
    type: "Remote",
    description:
      "As an OJT, I actively contributed to enhancing an existing inventory management system by developing new features and optimizing transaction handling.</>Worked with Laravel, MySQL, React, Redux, and React Bootstrap to develop and maintain web applications.",
  },
];
