"use client";

import { useState } from "react";
import ProjectCard from "../sub/ProjectCard";

const categories = [
  "All",
  "Web & Software",
  "AI & Data",
  "Systems & Hardware",
] as const;

type Category = (typeof categories)[number];

interface Project {
  title: string;
  src: string;
  description: string;
  category: Exclude<Category, "All">;
  technologies: string[];
  githubUrl?: string;
  status?: "Complete" | "In progress";
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    src: "/portfoliob.png",
    description:
      "My personal portfolio showcasing my projects, technical skills, and engineering experience through an animated space theme.",
    category: "Web & Software",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
    ],
    githubUrl:
      "https://github.com/OratorMurambiwa/portfoliowebsite",
  },
  {
    title: "BookWyz",
    src: "/bookwyz.png",
    description:
      "A Python book recommendation system that helps users discover books by author, title, or genre.",
    category: "AI & Data",
    technologies: ["Python"],
  },
  {
    title: "Chatbot",
    src: "/chat.png",
    description:
      "A conversational chatbot built in Python to engage users in natural language conversations.",
    category: "AI & Data",
    technologies: ["Python"],
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "All" ||
      project.category === activeCategory
  );

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
        Explore my work in software development, AI, and systems
        engineering.
      </p>

      <div
        role="group"
        aria-label="Filter projects by category"
        className="mb-10 flex flex-wrap justify-center gap-3"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            aria-pressed={activeCategory === category}
            onClick={() => setActiveCategory(category)}
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

      <p
        role="status"
        className="mb-5 text-sm text-gray-400"
      >
        {filteredProjects.length}{" "}
        {filteredProjects.length === 1 ? "project" : "projects"}
      </p>

      {filteredProjects.length > 0 ? (
        <div className="grid w-full max-w-7xl grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              src={project.src}
              title={project.title}
              description={project.description}
              githubUrl={project.githubUrl}
              technologies={project.technologies}
              status={project.status}
            />
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-gray-400">
          Projects in this category will be added soon.
        </p>
      )}
    </section>
  );
};

export default Projects;