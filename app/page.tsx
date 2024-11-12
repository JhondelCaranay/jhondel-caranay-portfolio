import { About } from "@/components/about/about";
import { Banner } from "@/components/banner/banner";
import { WorkExperiences } from "@/components/experience/work-experiences";
import { Leftside } from "@/components/left-side";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects/projects";
import { RightSided } from "@/components/right-side";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="h-screen max-h-screen w-full overflow-y-auto overflow-x-hidden scroll-smooth bg-gradient-to-r from-bodyColor via-bodyColor to-indigo-950 font-bodyFont text-colorLight">
      <Navbar />

      <div className="h-[88vh] w-full items-center justify-between gap-20 xl:flex">
        <Leftside />
        <div className="mx-auto h-[88vh] w-full max-w-container p-4">
          <Banner />
          <About />
          <Suspense>
            <WorkExperiences />
          </Suspense>
          <Projects />
        </div>
        <RightSided />
      </div>
    </div>
  );
}
