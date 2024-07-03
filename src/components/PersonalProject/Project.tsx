import React from "react";
import projectData from "@/utils/Project";
import { ProjectCard } from "./ProjectCard";

const Project: React.FC = () => {
  return (
    <div className="mt-14">
      <div className="relative text-center">
        <h1 className="sm:text-6xl text-4xl font-extrabold text-yellow-500 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow">
          Projects
        </h1>
        <h1 className="sm:text-7xl text-5xl font-extrabold text-yellow-500 opacity-5 text-outline">
          Projects
        </h1>
      </div>
      <div className="">
        <ProjectCard projectData={projectData} />
      </div>
    </div>
  );
};

export default Project;
