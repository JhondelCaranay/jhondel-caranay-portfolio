"use client";
import { projects } from "@/utils/data";
/* PACKAGES */
/* UTILS */
/* COMPONENTS */
import { SectionTitle } from "../section-title";
import { ProjectDetail } from "./project-detail";

export const Projects = () => {
  return (
    <div id="projects" className="mx-auto max-w-container py-24 lgl:px-20">
      <SectionTitle title="Projects" titleNumber="III" />

      <div className="flex flex-col gap-14">
        {projects.map((project) => (
          <ProjectDetail key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
};
