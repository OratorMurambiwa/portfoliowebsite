"use client";

import { useState } from "react";
import {
  projects,
  projectCategories,
  type ProjectCategory,
} from "@/constants/projects";
import ProjectCard from "../sub/ProjectCard";

const INITIAL_COUNT = 6;

const Projects = () => {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory>("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "All" ||
      project.category === activeCategory
  );

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_COUNT);

  const selectCategory = (category: ProjectCategory) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative z-10 flex scroll-mt-24 flex-col items-center px-6 py-16 md:px-12 lg:px-20"
    >
      <h2
        id="projects-heading"
        className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text py-6 text-center text-3xl font-semibold text-transparent sm:text-4xl"
      >
        My Projects
      </h2>

      <p className="mb-8 max-w-2xl text-center leading-relaxed text-gray-300">
        Explore my work in software development, AI, data
        analytics, and scientific computing.
      </p>

      <div
        role="group"
        aria-label="Filter projects by category"
        className="mb-8 flex flex-wrap justify-center gap-3"
      >
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => selectCategory(category)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 ${
              activeCategory === category
                ? "border-purple-400 bg-purple-500/20 text-white"
                : "border-purple-500/30 bg-[#030014]/70 text-gray-300 hover:border-purple-400 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <p role="status" className="mb-6 text-sm text-gray-400">
        Showing {visibleProjects.length} of{" "}
        {filteredProjects.length} projects
      </p>

      <div
        id="project-grid"
        className="grid w-full max-w-7xl grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.githubUrl}
            src={project.src}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
            technologies={project.technologies}
            status={project.status}
          />
        ))}
      </div>

      {!showAll &&
        filteredProjects.length > INITIAL_COUNT && (
          <button
            type="button"
            aria-controls="project-grid"
            onClick={() => setShowAll(true)}
            className="mt-10 rounded-lg border border-purple-500/40 bg-[#030014]/70 px-6 py-3 font-medium text-white transition-colors hover:bg-purple-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400"
          >
            Show All {filteredProjects.length} Projects
          </button>
        )}
    </section>
  );
};

export default Projects;