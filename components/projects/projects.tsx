"use client";
import { projects } from "@/utils/data";
/* PACKAGES */
import { useState } from "react";
/* UTILS */
/* COMPONENTS */
import { SectionTitle } from "../section-title";
import { ProjectDetail } from "./project-detail";

const INITIAL_PROJECT_COUNT = 5;

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll
    ? projects
    : projects.slice(0, INITIAL_PROJECT_COUNT);

  return (
    <div
      id="projects"
      className="mx-auto max-w-container overflow-x-clip py-24 lgl:px-20"
    >
      <SectionTitle title="Projects" titleNumber="III" />

      <div className="flex flex-col gap-14">
        {visibleProjects.map((project) => (
          <ProjectDetail key={project.id} data={project} />
        ))}
      </div>

      {visibleProjects.length < projects.length && (
        <div className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="h-14 w-52 rounded-md border border-colorPrimary font-titleFont text-sm tracking-wide text-colorPrimary duration-300 hover:bg-HoverColor hover:shadow-BoxShadowGlow"
          >
            View more
          </button>
        </div>
      )}
    </div>
  );
};
